package com.secretallergy.app.controller;

import com.secretallergy.app.dao.AllergenMongoDao;
import com.secretallergy.app.dto.AddSideEffectsDto;
import com.secretallergy.app.security.JwtUtils;
import com.secretallergy.app.service.MealService;
import com.secretallergy.app.service.SideEffectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/sideeffects")
public class SideEffectsController {
    private final MealService mealService;
    private AllergenMongoDao allergenMongo;
    private final SideEffectService sideEffectService;

    @Autowired
    public SideEffectsController(MealService mealService, AllergenMongoDao allergenMongo, SideEffectService sideEffectService) {
        this.mealService = mealService;
        this.allergenMongo = allergenMongo;
        this.sideEffectService = sideEffectService;
    }


    @CrossOrigin
    @PostMapping("/add")
    public void addSideEffectsToDbAndUpdateMealInDb(@RequestBody AddSideEffectsDto addSideEffectsDto) {
        sideEffectService.addSideEffectsToDb(addSideEffectsDto);
        sideEffectService.updateMealsWithSideEffects(addSideEffectsDto);
    }
}
