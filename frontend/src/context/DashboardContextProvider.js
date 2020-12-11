import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { getAllTodayMeals } from "../service/LiveSearchService";
import DashboardContext from "./DashboardContext";


export default function DashboardContextProvider({ children }) {

    const { token, userData } = useContext(AuthContext);
    const userId = userData.sub;
    const [todaysBreakfast, setTodaysBreakfast] = useState([]);
    const [todaysMeal, setTodaysMeal] = useState([]);
    const [todaysDinner, setTodaysDinner] = useState([]);
    const [todaysSnack, setTodaysSnack] = useState([]);


    useEffect(() => {
        getAllTodayMeals(userId, token).then((meals) => {
            setTodaysBreakfast(meals.filter(meal => meal.mealDaytime === "breakfast"));
            setTodaysMeal(meals.filter(meal => meal.mealDaytime === "meal"));
            setTodaysDinner(meals.filter(meal => meal.mealDaytime === "dinner"));
            setTodaysSnack(meals.filter(meal => meal.mealDaytime === "snacks"));
        }).catch(console.log);
    }, []);


    const mealRefresh = () => {
        return getAllTodayMeals(userId, token).then((meals) => {
            setTodaysBreakfast(meals.filter(meal => meal.mealDaytime === "breakfast"));
            setTodaysMeal(meals.filter(meal => meal.mealDaytime === "meal"));
            setTodaysDinner(meals.filter(meal => meal.mealDaytime === "dinner"));
            setTodaysSnack(meals.filter(meal => meal.mealDaytime === "snacks"));
        }).catch(console.log);
    }

    const getMealsTotal = () => {
        return todaysBreakfast.length + todaysMeal.length + todaysDinner.length + todaysSnack.length;
    };

    const getAllergensTotal = () => {
        let totalAllergies = 0;
        todaysBreakfast.forEach(meal => totalAllergies += meal.allergens.length);
        todaysMeal?.forEach(meal => totalAllergies += meal.allergens.length);
        todaysDinner?.forEach(meal => totalAllergies += meal.allergens.length);
        todaysSnack?.forEach(meal => totalAllergies += meal.allergens.length);
        return totalAllergies;
    };
    const getTotalSideEffects = () => {
        let totalSideEffects = 0;
        todaysBreakfast.forEach(meal => totalSideEffects += meal.sideEffects.length);
        todaysMeal?.forEach(meal => totalSideEffects += meal.sideEffects.length);
        todaysDinner?.forEach(meal => totalSideEffects += meal.sideEffects.length);
        todaysSnack?.forEach(meal => totalSideEffects += meal.sideEffects.length);
        return totalSideEffects;
    };

    const [sideEffectsList, setSideEffectsList] = useState([]);
    const [hasSideEffectIsSelected, setHasSideEffectIsSelected] = useState(false);

    return (
      <DashboardContext.Provider
        value={{
            todaysBreakfast, setTodaysBreakfast,
            todaysMeal, setTodaysMeal,
            todaysDinner, setTodaysDinner,
            todaysSnack, setTodaysSnack,
            sideEffectsList, setSideEffectsList,
            hasSideEffectIsSelected, setHasSideEffectIsSelected,
            getMealsTotal, getAllergensTotal, getTotalSideEffects, mealRefresh

        }}>
          {children}
      </DashboardContext.Provider>
    );
}

