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
import java.util.Collections;
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
            String name = jsonObject.keySet()
                                    .contains("product_name_de")?
                                            jsonObject.getString("product_name_de")
                                            :jsonObject.getString("product_name");
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
                                        jsonObject.getString("ingredients_text_de").replaceAll("[0-9]w*|[%|:]w*|[\\s{2}]w*","").split(","):
                                        jsonObject.getString("ingredients_text").replaceAll("([0-9]w*)|([%|:]w*)|([\\s{2}]w*)","").split(",")
                            ));
            productList.add( new Product(id, name, brands, ingredients_text_de, imageUrl) );
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


    private List<Product> cleanUpStringsOfProductsBeforeReturn(List<Product> productList) {
        List<String> filter = new ArrayList<>(List.of(
                "Teig",
                "Konservierungsstoff",
                "Stabilisator",
                "Antioxidationsmittel",
                "Gesamtmilchbestandteile",
                " im ",
                " Produkt",
                "Überzugsmittel",
                "Gesamtkakaobestandteile",
                "aufgeschlossenes",
                ":",
                ";",
                ".",
                "_",
                "  ",
                ")",
                "(",
                "%",
                "0", "1","2","3","4","5","6","7","8","9"));

        List<String> newIngredientsList = new ArrayList<>();
        for (Product currentProduct : productList) {
            currentProduct.getIngredients_text_de()
                    .forEach(ingredient-> {

                        newIngredientsList.add(ingredient.replaceAll("([0-9]w*)|([%|:]w*)|([\\s{2}]w*)", ""));

                    });


            System.out.println(newIngredientsList + "");
//            for(int x = 0; x < currentProduct.getIngredients_text_de().size(); x++) {
//
////                for(in y = 0; y < currentProduct.getIngredients_text_de().get(x).))
//                String ingredient = currentProduct.getIngredients_text_de().get(x);
//                if(ingredient.startsWith(" ")) {
//                    ingredient.replaceFirst(" ","");
//                    }
//                if(ingredient.contains("  ")) {
//                    ingredient.replace("  ","");
//                }
//
//
//            }
                  {

            }

//            currentProduct.setIngredients_text_de(newIngredientsList);
            }
        return productList;
    }




        // todo  klammern aus den Ingredients löschen
        // zweichfache leerzeichen nach beginn löschen
        // Unterstriche  vor wörtern löschen
        // digit digit % löschen



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
