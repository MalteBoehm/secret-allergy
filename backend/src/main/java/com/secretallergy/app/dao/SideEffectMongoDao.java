package com.secretallergy.app.dao;

import com.secretallergy.app.model.SideEffect;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface SideEffectMongoDao extends PagingAndSortingRepository<SideEffect, String> {
    @Query(value = "{  'sideEffectWithMealId': {$regex : '^?0$', $options: 'i'} }")
    Optional<SideEffect> findOutIfSideEffectIsAlreadyInDb(String mealId);

}
