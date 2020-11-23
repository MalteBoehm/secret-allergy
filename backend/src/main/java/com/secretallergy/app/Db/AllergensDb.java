package com.secretallergy.app.Db;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.ObjectBuffer;
import com.secretallergy.app.model.Allergen;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Repository;


import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Repository
public class AllergensDb {



    public static JSONArray getAllergens() throws IOException {
        Path path = Paths.get("/Users/malte/Desktop/secretAllergy/secret-allergy/backend/data/allergens.json");
        ObjectMapper mapper = new ObjectMapper();
        JSONObject allergensList = mapper.readValue(
                Files.newBufferedReader
                        (path), JSONObject.class);

        return (JSONArray)allergensList.keys();


    }
    public static void main(String[] args) throws IOException, ParseException {

//        JSONArray jsonArray = new JSONArray("data/allergens.json");
        // Jackson
        ObjectMapper mapper = new ObjectMapper();
//        JSONParser parser = new JSONParser();
//        List<Allergen> allergensList = mapper.readValue(new File("/Users/malte/Desktop/secretAllergy/secret-allergy/backend/data/allergens.json", new TypeReference<List<Allergen>>(){}));


//        Object asd = mapper.readValue(new File("/Users/malte/Desktop/secretAllergy/secret-allergy/backend/data/allergens.json"), List.class);

//        System.out.println(allergensList);
    }





}
