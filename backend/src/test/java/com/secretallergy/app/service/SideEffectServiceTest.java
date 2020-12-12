package com.secretallergy.app.service;

import com.secretallergy.app.dao.SideEffectMongoDao;
import com.secretallergy.app.dto.AddSideEffectsDto;
import com.secretallergy.app.model.SideEffect;
import com.secretallergy.app.model.SideEffects;
import com.secretallergy.app.utils.IdUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.mongodb.core.MongoOperations;

import static org.junit.jupiter.api.Assertions.*;
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
    void updateMealsWithSideEffects() {
    }

    @Test
    void isSideEffectForMealNotInDb() {
    }
}
