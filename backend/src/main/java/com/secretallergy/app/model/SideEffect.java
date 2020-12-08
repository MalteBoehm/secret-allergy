package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "sideEffects")
public class SideEffect {

    @Id
    String sideEffectOfUserID;
    String sideEffectWithMealId;
    private String mealDaytime;
    String daytime;
    private String date;
    private List<Product> listOfProductsThatWereConsumed;
    private List<Allergen> allergens;
    Map<String, Integer> sideEffectByIcdAndStrength;
}
