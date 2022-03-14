package com.softeq.lenovoflash.service

import com.google.api.services.calendar.model.Event

interface GoogleOutboundService {
    fun authorize()
    fun getEvents(token: String): List<Event>
}