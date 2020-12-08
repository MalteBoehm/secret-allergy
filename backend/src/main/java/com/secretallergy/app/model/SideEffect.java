package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Document(collection = "sideEffects")
public class SideEffect {

    @Id
    private String sideEffectId;

    private String sideEffectOfUserID;
    private String sideEffectWithMealId;
    private String mealDaytime;
    private String date;
    private List<Product> listOfProductsThatWereConsumed;
    private List<Allergen> allergensList;
    private List<SideEffects> sideEffectByIcdAndStrength;
}
