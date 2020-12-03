package com.secretallergy.app.dto;

import com.secretallergy.app.model.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddMealDto {
    private String userId;
    private String mealParam;
    private List<Product> addMealListOfProducts;
}
