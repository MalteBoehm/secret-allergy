package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    private String _id;
    private String product_name;
    private List<String> ingredients_text_de;
    private List<String> allergens;
    private String image_front_thumb_url;

}
