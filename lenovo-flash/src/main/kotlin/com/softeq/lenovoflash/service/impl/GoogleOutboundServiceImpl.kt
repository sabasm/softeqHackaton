package com.softeq.lenovoflash.service.impl

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport
import com.google.api.client.http.HttpTransport
import com.google.api.client.json.JsonFactory
import com.google.api.client.json.gson.GsonFactory
import com.google.api.client.util.DateTime
import com.google.api.services.calendar.Calendar
import com.google.api.services.calendar.model.Event
import com.google.api.services.calendar.model.Events
import com.google.api.services.directory.model.User
import com.google.auth.http.HttpCredentialsAdapter
import com.google.auth.oauth2.GoogleCredentials
import com.google.gson.Gson
import com.nimbusds.jwt.JWTParser
import com.softeq.lenovoflash.service.GoogleOutboundService
import lombok.extern.slf4j.Slf4j
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.io.FileInputStream
import java.io.IOException
import java.security.GeneralSecurityException
import java.time.LocalDateTime
import javax.annotation.PostConstruct

@Service
@Slf4j
class GoogleOutboundServiceImpl : GoogleOutboundService {

    val applicationName: String = "Flash"
    var calendar: Calendar? = null
    @Value("#{google.client.credentials.path}")
    lateinit var pathToCredentials: String


    @PostConstruct
    fun initTimeOffCalendar() {
        try {
            val jsonFactory: JsonFactory = GsonFactory.getDefaultInstance()
            val httpTransport = GoogleNetHttpTransport.newTrustedTransport()
            calendar =
                Calendar.Builder(httpTransport, jsonFactory, HttpCredentialsAdapter(getCalendarCredentials(httpTransport, jsonFactory)))
                    .setApplicationName(applicationName)
                    .build()
        } catch (e: GeneralSecurityException) {
            //to be implemented
        } catch (e: IOException) {
            //to be implemented
        }
    }

    override fun authorize() {
        //Not yet implemented. Auth UDS Service integration would be useful.
    }

    override fun getEvents(token: String): List<Event> {
        val events: Events
        val user: User = getUser(token)
        events = calendar!!.events().list(user["email"].toString())
                .setMaxResults(100)
                .setTimeMin(DateTime(LocalDateTime.now().toString()))
                .setOrderBy("startTime")
                .setSingleEvents(true)
                .execute();

        return events.items
    }

    private fun getUser(token: String): User {
        return Gson().fromJson(JWTParser.parse(token).parsedString, User::class.java);
    }

    fun getCalendarCredentials(httpTransport: HttpTransport, jsonFactory: JsonFactory): GoogleCredentials {
        val credential: GoogleCredentials = GoogleCredentials.fromStream(FileInputStream(pathToCredentials));
        credential.refreshIfExpired()
        return credential;
    }
}