package com.secretallergy.app.dto;

import com.secretallergy.app.model.Allergen;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.model.SideEffect;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddSideEffectsDto {

    private String userId;
    private String mealParam;
    private List<Product> addMealListOfProducts;
    private String sideEffectOfUserId;
    private String date;
    private String sideEffectOfMealId;
    private String mealDaytime;
    private List<Product> products;
    private List<Allergen> allergens;
    private List<SideEffect> sideEffects;

}
