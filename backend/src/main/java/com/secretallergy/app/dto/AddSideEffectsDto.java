package com.secretallergy.app.dto;

import com.secretallergy.app.model.Allergen;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.model.SideEffect;
import com.secretallergy.app.model.SideEffects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddSideEffectsDto {

    private String sideEffectOfUserId;
    private String mealDaytime;
    private List<Product> listOfProductsThatWereConsumed;
    private String date;
    private String sideEffectOfMealId;
    private List<Allergen> allergensList;
    private List<SideEffects> sideEffectByIcdAndStrength;

}
