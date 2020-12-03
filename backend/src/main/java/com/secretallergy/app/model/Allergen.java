package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "allergens")
public class Allergen {
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
