package com.secretallergy.app.service;

import com.secretallergy.app.dao.SideEffectMongoDao;
import com.secretallergy.app.dto.AddSideEffectsDto;
import com.secretallergy.app.model.Meal;
import com.secretallergy.app.model.SideEffect;
import com.secretallergy.app.utils.IdUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

class SideEffectServiceTest {

    // GIVEN
    private final SideEffectMongoDao sideEffectMongo = mock(SideEffectMongoDao.class);
    private final IdUtils idUtils = mock(IdUtils.class);
    private final MongoOperations mongoOperation = mock(MongoOperations.class);
    private final SideEffectService sideEffectService = SideEffectService
            .builder()
            .sideEffectMongo(sideEffectMongo)
            .mongoOperation(mongoOperation)
            .idUtils(idUtils)
            .build();

    private final AddSideEffectsDto addSideEffectsDto = AddSideEffectsDto
            .builder().build();


    @Test
    @DisplayName("Add Method works as expected")
    void addSideEffectsToDb() {
        // GIVEN
        String givenId = "XYZ";
        SideEffect givenSideEffect = SideEffect.builder()
                .sideEffectId(givenId)
                .build();
        // WHEN
        when(idUtils.generateId()).thenReturn(givenId);
        sideEffectService.addSideEffectsToDb(addSideEffectsDto);

        // THEN
        verify(sideEffectMongo).save(givenSideEffect);
    }

    @Test
    @DisplayName("Situation: Sideeffect is in DB")
    void updateMealsWithSideEffects() {
        //GIVEN
        String givenMealId = "1";
        Meal givenMeal = Meal.builder().sideEffects(List.of()).build();

        addSideEffectsDto.setSideEffectOfMealId(givenMealId);
        addSideEffectsDto.setSideEffectByIcdAndStrength(List.of());

        // WHEN
        when(mongoOperation.findOne(anyObject(), eq(Meal.class))).thenReturn(givenMeal);

        sideEffectService.updateMealsWithSideEffects(addSideEffectsDto);

        // THEN
        verify(mongoOperation).save(givenMeal);
    }

    @Test
    @DisplayName("Situation: Sideeffect is NOT in DB")
    void updateMealsWithSideEffectsIsNotInDb() {
        try {
            // WHEN
            when(mongoOperation.findOne(anyObject(), eq(Meal.class))).thenReturn(null);
            sideEffectService.updateMealsWithSideEffects(addSideEffectsDto);
        } catch (ResponseStatusException e){
            // THEN
            assertThat(e.getStatus(), is(HttpStatus.BAD_REQUEST));
        }
    }

    @Test
    void isSideEffectForMealNotInDb() {
    }
}
