package com.softeq.lenovoflash.controller;

import com.softeq.lenovoflash.dto.UdsResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/uds/mocks")
@RequiredArgsConstructor
@Slf4j
public class UdsController {

    @Value("")
    private String token;

    @GetMapping
    public UdsResponse getUdsMock() {
        return UdsResponse.builder()
                .accessToken(token)
                .build();
    }
}
