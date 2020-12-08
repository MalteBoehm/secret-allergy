import axios from "axios";

const header = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});


const url = "http://192.168.178.41:8080/api/meal/livesearch?products=";
export const getLiveSearchData = (searchInput, token) =>
  axios
    .get(url + searchInput, header(token))
    .then((response) => response.data)
    .catch((error) => console.log(error));


const mealUrl = "http://192.168.178.41:8080/api/meal/new";
export const createMeal = (userId, mealParam, addMealListOfProducts, token) => {
    axios
      .post(mealUrl, { userId, mealParam, addMealListOfProducts }, header(token))
      .then((response) => response.data);
};


const getAllMealsUrl = "http://localhost:8080/api/meal/getall?user=";
export const getAllTodayMeals = (userId, token) =>
  axios
    .get(getAllMealsUrl + userId, header(token))
    .then((response) => response.data)
    .catch((error) => console.log(error));


const updateSideEffectsInMealUrl = "http://192.168.178.41:8080/api/meal/sideeffectupdate";
export const updateSideEffectsInMeal = (userId, createdSideEffectDto, token) => {
    axios
      .put(createSideEffectsToMealUrl, { userId, createdSideEffectDto }, header(token))
      .then((response) => response.data);
};
