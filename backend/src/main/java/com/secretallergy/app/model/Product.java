package com.secretallergy.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="products")
public class Product {

    @Id
    private String _id;
    private String product_name;
    private List<String> ingredients_text_de;
//    private List<String> allergens;
    private String image_front_thumb_url;

}
