package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class SideEffects {

    @Id
    private String id;
    private String sideEffect;
    private double ratingOfSideEffects;
}
