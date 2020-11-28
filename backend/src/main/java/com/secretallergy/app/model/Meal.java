package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Meal {
    @Id
    String mealOfUserId;
    String mealId;
    String daytime;
    List<Product> products;
    List<Allergen> allergens;
    List<SideEffect> sideEffects;
    int ratingOfSideEffects;
}
