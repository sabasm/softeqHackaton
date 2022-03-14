package com.softeq.lenovoflash.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UdsResponse {
    private String accessToken;
}
