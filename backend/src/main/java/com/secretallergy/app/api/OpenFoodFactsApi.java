package com.secretallergy.app.api;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dao.ProductMongoDao;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import lombok.Data;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service
public class OpenFoodFactsApi {

    JSONArray products = new JSONArray();
    @Autowired
    public OpenFoodFactsApi() {
    }




    public List<Product> searchProductByName(String productName) throws UnirestException {

        JSONArray products = getUniRestRequest(productName);

        List<Product> productList = new ArrayList<>();


        for (int i = 0; i < products.length(); i++) {

            var jsonObject = products.getJSONObject(i);

            String id = jsonObject.getString("_id");
            String name = jsonObject.keySet().contains("product_name_de")? jsonObject.getString("product_name_de")
                                                                            :jsonObject.getString("product_name");
            String imageUrl = jsonObject.getString("image_url");
            ArrayList<String> ingredients_text_de = new ArrayList<>(
                    Arrays.asList(
                            jsonObject.keySet().contains("ingredients_text_de")?
                                jsonObject.getString("ingredients_text_de").split(","):
                                jsonObject.getString("ingredients_text").split(",")
                            ));
            productList.add( new Product(id, name, ingredients_text_de, imageUrl) );
        }

//        checkMongoDbIfProductIsPresentAndAddItIfNotAddItToMongoDb(productName, productList);

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

//    private void checkMongoDbIfProductIsPresentAndAddItIfNotAddItToMongoDb(String productName, List<Product> products)  {
//        // Init Lists of DB and API -- Compare and Add if needed
//        List<Product> mongoDaoCheck = productMongoDao.findBy(productName);
//        for (Product product: products) {
//            if(!mongoDaoCheck.contains(product)){
//                mongoDaoCheck.add(product);
//            }
//        }
//    }
}
