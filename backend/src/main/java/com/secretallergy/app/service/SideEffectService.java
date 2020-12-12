package com.secretallergy.app.service;

import com.secretallergy.app.dao.SideEffectMongoDao;
import com.secretallergy.app.dto.AddSideEffectsDto;
import com.secretallergy.app.model.Meal;
import com.secretallergy.app.model.SideEffect;
import com.secretallergy.app.model.SideEffects;
import com.secretallergy.app.utils.IdUtils;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Builder
@Service
public class SideEffectService {

    private final SideEffectMongoDao sideEffectMongo;
    private final IdUtils idUtils;
    private final MongoOperations mongoOperation;

    @Autowired
    public SideEffectService(SideEffectMongoDao sideEffectMongo, IdUtils idUtils, MongoOperations mongoOperation) {
        this.sideEffectMongo = sideEffectMongo;
        this.idUtils = idUtils;
        this.mongoOperation = mongoOperation;
    }

    public void addSideEffectsToDb(AddSideEffectsDto addSideEffectsDto) {
        SideEffect newSideEffect = SideEffect.builder()
                .sideEffectId(idUtils.generateId())
                .sideEffectOfUserID(addSideEffectsDto.getSideEffectOfUserId())
                .sideEffectWithMealId(addSideEffectsDto.getSideEffectOfMealId())
                .mealDaytime(addSideEffectsDto.getMealDaytime())
                .date(addSideEffectsDto.getDate())
                .allergensList(addSideEffectsDto.getAllergensList())
                .listOfProductsThatWereConsumed(addSideEffectsDto.getListOfProductsThatWereConsumed())
                .sideEffectByIcdAndStrength(addSideEffectsDto.getSideEffectByIcdAndStrength())
                .build();
        if (!isSideEffectForMealNotInDb(newSideEffect)) {
            sideEffectMongo.save(newSideEffect);
        }
    }

    public void updateMealsWithSideEffects(AddSideEffectsDto addSideEffectsDto) {
        String idOfMeal = addSideEffectsDto.getSideEffectOfMealId();
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(idOfMeal));

        Meal foundMealToUpdate = Optional.ofNullable(mongoOperation.findOne(query, Meal.class))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST));


        List<SideEffects> createNewSideEffectByIcdAndStrengthWithId = addSideEffectsDto.getSideEffectByIcdAndStrength();
        for (SideEffects x : createNewSideEffectByIcdAndStrengthWithId) {
            x.setId(idUtils.generateId());
        }
        foundMealToUpdate.setSideEffects(createNewSideEffectByIcdAndStrengthWithId);

        if (addSideEffectsDto.getSideEffectByIcdAndStrength().size() > 0) {
            foundMealToUpdate.setHasSideEffect(true);
        }
        mongoOperation.save(foundMealToUpdate);
    }

    public Boolean isSideEffectForMealNotInDb(SideEffect newSideEffect) {
        String mealIdToSearchFor = newSideEffect.getSideEffectWithMealId();

        Optional<SideEffect> answer = sideEffectMongo.findOutIfSideEffectIsAlreadyInDb(mealIdToSearchFor);
        return answer.map(sideEffect -> sideEffect.getSideEffectWithMealId().equals(mealIdToSearchFor)).orElse(false);
    }
}
