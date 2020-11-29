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
@Document(collection = "sideEffect")
public class SideEffect {

    @Id
    String sideEffectOfUserID;
    String mealId;
    String daytime;
    List<Product>  listOfProductsThatWereConsumed;
    List<Allergen>listOfAllCombinedAllergens;
    Map<String, String> sideEffectByIcdAndStrength;
}
