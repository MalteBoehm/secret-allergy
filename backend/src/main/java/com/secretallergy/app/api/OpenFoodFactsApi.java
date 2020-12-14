package com.secretallergy.app.api;

import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.utils.IdUtils;
import lombok.val;
import org.apache.http.client.HttpResponseException;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;


@Service
public class OpenFoodFactsApi {

    private IdUtils idUtils;


    @Autowired
    public OpenFoodFactsApi(IdUtils idUtils) {
        this.idUtils = idUtils;
    }

    public List<Product> searchProductByName(String productName) throws UnirestException {

        JSONArray products = getUniRestRequest(productName);
        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < products.length(); i++) {
            var jsonObject = products.getJSONObject(i);
            String id = getProductIdIfPossibleOrGiveOwnId(jsonObject);
            String name = getProductNameIfPossible(jsonObject);
            String brands = getBrandIfPossible(jsonObject);
            String imageUrl = getProductPictureIfPossible(jsonObject);
            ArrayList<String> ingredients_text_de = new ArrayList<>( getIngredientsIfPossible(jsonObject) );
            productList.add(new Product(id, name, brands, ingredients_text_de, imageUrl));
        }
        return productList;
    }


    /* Helper Functions*/
    private String getProductIdIfPossibleOrGiveOwnId(JSONObject productObject) {
        try {
            return productObject.getString("_id");
        } catch (JSONException e) {
            return idUtils.generateId();
        }
    }

    private String getProductNameIfPossible(JSONObject productObject) {
        try {
            return productObject.keySet().contains("product_name") ? productObject.getString("product_name")
                    : productObject.getString("product_name_de");
        } catch (JSONException e) {
            return "Bitte Produktnamen eintragen";
        }
    }

    private String getBrandIfPossible(JSONObject productObject) {
        try {
            return productObject.keySet().contains("brands") ?
                    productObject.getString("brands") : productObject.getString("Bitte Hersteller eintragen");
        } catch (JSONException e) {
            return "Bitte Hersteller eintragen";
        }
    }

    private String getProductPictureIfPossible(JSONObject productObject) {
        try {
            return productObject.keySet().contains("image_url") ?
                    productObject.getString("image_url") :
                    productObject.getString("image_front_url");
        } catch (JSONException e) {
            return "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
        }
    }

    private ArrayList<String> getIngredientsIfPossible(JSONObject productObject) {
        try {
            return new ArrayList<>(Arrays.asList(productObject.keySet().contains("ingredients_text_de") ?
                    productObject.getString("ingredients_text_de").replaceAll("([0-9])w*|([%:;.?])w*|[()_]w*", "").trim().split(",") :
                    productObject.getString("ingredients_text").replaceAll("([0-9])w*|([%:;.?])w*|[()_]w*", "").trim().split(",")));
        } catch (JSONException e) {
            return new ArrayList<>(Collections.singleton("Bitte Inhaltsstoffe eintragen."));
        }
    }


    private JSONArray getUniRestRequest(String productName) throws UnirestException {
        Unirest.setTimeouts(8000, 8000);
        return Unirest.get("https://de.openfoodfacts.org/cgi/search.pl?search_terms=" + productName.replace(" ", "%20") + "&sort_by=unique_scans_n&json=true")
                .header("Accept", "application/json")
                .header("User-Agent", "Secret-Allergy")
                .header("Authorization", "Basic bWFsdGViOlhjWVczMTgxMQ==")
                .asJson()
                .getBody()
                .getObject()
                .getJSONArray("products");
    }
}
