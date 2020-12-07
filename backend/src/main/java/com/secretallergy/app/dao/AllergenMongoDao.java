package com.secretallergy.app.dao;

import com.secretallergy.app.model.Allergen;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface AllergenMongoDao extends PagingAndSortingRepository<Allergen, String> {

   /*@Query("{ 'names' : { $regex : ?0 , $options : 'i,m' }, $and:[ { 'laktose': { $gt: ?1 } }, { 'gluten': { $gt: ?2 } ,{ 'histamin': { $gt: ?3 } } ] }")*/
   /*List<Allergen> findAllergenByName(String regex, int laktose, int gluten, int histamin);*/

   List<Allergen> findAllergensByNamesAndLaktoseIsGreaterThanOrGlutenIsGreaterThanOrHistaminGreaterThan(String name, int histamine,int gluten,int lactose);

   List<Allergen> findAllergensByNamesMatchesRegex(String name);
}
