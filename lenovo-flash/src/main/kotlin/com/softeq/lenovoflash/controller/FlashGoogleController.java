package com.softeq.lenovoflash.controller;

import com.google.api.services.calendar.model.Event;
import com.softeq.lenovoflash.service.GoogleOutboundService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class FlashGoogleController {
    private final GoogleOutboundService googleOutboundService;

    @GetMapping("/events")
    public List<Event> getEvents(@RequestParam String token) {
        return googleOutboundService.getEvents(token);
    }
}
