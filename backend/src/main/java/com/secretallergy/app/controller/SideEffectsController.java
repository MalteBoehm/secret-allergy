package com.secretallergy.app.controller;

import com.secretallergy.app.dto.AddSideEffectsDto;
import com.secretallergy.app.service.SideEffectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/sideeffects")
public class SideEffectsController {
    private final SideEffectService sideEffectService;

    @Autowired
    public SideEffectsController(SideEffectService sideEffectService) {
        this.sideEffectService = sideEffectService;
    }


    @CrossOrigin
    @PostMapping("/add")
    public void addSideEffectsToDbAndUpdateMealInDb(@RequestBody AddSideEffectsDto addSideEffectsDto) {
        sideEffectService.addSideEffectsToDb(addSideEffectsDto);
        sideEffectService.updateMealsWithSideEffects(addSideEffectsDto);
    }
}
