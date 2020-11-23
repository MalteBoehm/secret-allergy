package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Allergen {

    @Id
    List<String> names;
    List<String> englishNames;
    String deFoodCategory;
    String engFoodCategory;
    String deSpecificFood;
    String engSpecificFood;
    int laktose;
    int gluten;
    int histamin;
    String histaminWirkung;
    String weitereArmineWirkung;
    String liberatorWirkung;
    String blockerWirkung;
}
