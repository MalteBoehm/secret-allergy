package com.secretallergy.app.api;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import lombok.Data;
import org.json.JSONArray;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Data
public class OpenFoodFactsApi {

    public List<Product> searchProductByName(SearchByProductNameDto productName) throws UnirestException {
        JSONArray products = getUniRestRequest(productName);
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < products.length(); i++) {
            String id = products.getJSONObject(i).getString("_id");
            String name = products.getJSONObject(i).getString("product_name_de");
            String imageUrl = products.getJSONObject(i).getString("image_url");
            productList.add(new Product(id, name, imageUrl));
        }

        return productList;
    }

    /* Helper Functions*/
    private JSONArray getUniRestRequest(SearchByProductNameDto productName) throws UnirestException{
        Unirest.setTimeouts(3000, 3000);
        return Unirest.get("https://de.openfoodfacts.org/cgi/search.pl?search_terms=" + productName + "&sort_by=unique_scans_n&json=true")
                .header("Accept", "application/json")
                .header("User-Agent", "Secret-Allergy")
                .header("Authorization", "Basic bWFsdGViOlhjWVczMTgxMQ==")
                .asJson().getBody().getObject().getJSONArray("products");
    }
}
