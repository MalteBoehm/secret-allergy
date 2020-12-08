package com.secretallergy.app.service;

import com.secretallergy.app.dao.SideEffectMongoDao;
import com.secretallergy.app.dto.AddSideEffectsDto;
import com.secretallergy.app.model.SideEffect;
import com.secretallergy.app.model.SideEffects;
import com.secretallergy.app.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SideEffectService {

    private final SideEffectMongoDao sideEffectMongo;
    private final IdUtils idUtils;

    @Autowired
    public SideEffectService(SideEffectMongoDao sideEffectMongo, IdUtils idUtils) {
        this.sideEffectMongo = sideEffectMongo;
        this.idUtils = idUtils;
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
        if (isSideEffectForMealNotInDb(newSideEffect)) {
            sideEffectMongo.save(newSideEffect);
        }
    }

    public Boolean isSideEffectForMealNotInDb(SideEffect newSideEffect) {
        String mealIdToSearchFor = newSideEffect.getSideEffectWithMealId();
        Optional<SideEffect> answer = sideEffectMongo.findOutIfSideEffectIsAlreadyInDb(mealIdToSearchFor);
        return answer.map(sideEffect -> sideEffect.getSideEffectWithMealId().equals(mealIdToSearchFor)).orElse(true);
    }
}
