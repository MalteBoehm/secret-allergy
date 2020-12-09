package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class SideEffects {
    private String sideEffect;
    private double ratingOfSideEffects;
}
