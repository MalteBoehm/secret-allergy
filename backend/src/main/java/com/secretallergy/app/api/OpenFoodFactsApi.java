package com.secretallergy.app.api;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.model.Product;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service
public class OpenFoodFactsApi {

    @Autowired
    public OpenFoodFactsApi() {
    }

    public List<Product> searchProductByName(String productName) throws UnirestException {
        JSONArray products = getUniRestRequest(productName);
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < products.length(); i++) {
            var jsonObject = products.getJSONObject(i);
            String id = jsonObject.getString("_id");
            String name = jsonObject.keySet()
                                    .contains("product_name")?
                                            jsonObject.getString("product_name")
                                            :jsonObject.getString("product_name_de");
            String brands = jsonObject.keySet()
                    .contains("brands")?
                    jsonObject.getString("brands")
                    :jsonObject.getString("Hersteller unbekannt");
            String imageUrl = jsonObject.keySet()
                                        .contains("image_url")?
                                            jsonObject.getString("image_url"):
                                            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
            ArrayList<String> ingredients_text_de = new ArrayList<>(
                    Arrays.asList(
                            jsonObject.keySet()
                                        .contains("ingredients_text_de")?
                                        jsonObject.getString("ingredients_text_de").replaceAll("([0-9])w*|([-%:;.?])w*|([\\s{2}])w*|[()_-]w*", ",").split(","):
                                        jsonObject.getString("ingredients_text").replaceAll("([0-9])w*|([-%:;.?])w*|([\\s{2}])w*|[()_-]w*",",").split(",")
                            ));
            productList.add( new Product(id, name, brands, ingredients_text_de, imageUrl) );
        }
        return productList;
    }


    /* Helper Functions*/
    private JSONArray getUniRestRequest(String productName) throws UnirestException{
        Unirest.setTimeouts(8000, 8000);
        return Unirest.get("https://de.openfoodfacts.org/cgi/search.pl?search_terms=" + productName.replace(" ", "%20") +"&sort_by=unique_scans_n&json=true")
                .header("Accept", "application/json")
                .header("User-Agent", "Secret-Allergy")
                .header("Authorization", "Basic bWFsdGViOlhjWVczMTgxMQ==")
                .asJson()
                .getBody()
                .getObject()
                .getJSONArray("products");
    }
}
