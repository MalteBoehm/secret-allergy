package com.secretallergy.app.api;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dao.ProductMongoDao;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import lombok.Data;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service
public class OpenFoodFactsApi {

    ProductMongoDao productMongoDao;
    MealService mealService;


    public OpenFoodFactsApi(ProductMongoDao productMongoDao, MealService mealService) {
        this.productMongoDao = productMongoDao;
        this.mealService = mealService;
    }

    public List<Product> searchProductByName(String productName) throws UnirestException, FileNotFoundException {
        JSONArray products = getUniRestRequest(productName);

        List<Product> productList = new ArrayList<>();
        for (int i = 0; i < products.length(); i++) {
            String id = products.getJSONObject(i).getString("_id");
            String name = products.getJSONObject(i).getString("product_name_de");
            String imageUrl = products.getJSONObject(i).getString("image_url");

            List<String> ingredients_text_de = Arrays.asList(products.getJSONObject(i).getString("ingredients_text_de").split(","));
            List<String> allergens = mealService.checkIngredientsForAllergens(ingredients_text_de);

            productList.add( new Product(id, name, ingredients_text_de, allergens, imageUrl) );
        }

        checkMongoDbIfProductIsPresentAndAddItIfNotAddItToMongoDb(productName, productList);

        return productList;
    }



    /* Helper Functions*/
    private JSONArray getUniRestRequest(String productName) throws UnirestException{
        Unirest.setTimeouts(5000, 3000);
        return Unirest.get("https://de.openfoodfacts.org/cgi/search.pl?search_terms=" + productName + "&sort_by=unique_scans_n&json=true")
                .header("Accept", "application/json")
                .header("User-Agent", "Secret-Allergy")
                .header("Authorization", "Basic bWFsdGViOlhjWVczMTgxMQ==")
                .asJson()
                .getBody()
                .getObject()
                .getJSONArray("products");
    }

    private void checkMongoDbIfProductIsPresentAndAddItIfNotAddItToMongoDb(String productName, List<Product> products)  {
        // Init Lists of DB and API -- Compare and Add if needed
        List<Product> mongoDaoCheck = productMongoDao.findBy(productName);
        for (Product product: products) {
            if(!mongoDaoCheck.contains(product)){
                mongoDaoCheck.add(product);
            }
        }
    }
}
