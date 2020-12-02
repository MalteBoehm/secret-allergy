package com.secretallergy.app.dao;

import com.secretallergy.app.model.Allergen;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface AllergenMongoDao extends PagingAndSortingRepository<Allergen, String> {

   @Query("{ 'names' : { $regex : ?0 , $options : 'i' }}")
   List<Allergen> findAllergenByName(String regex);
}
