import axios from "axios";


const header = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const url = "http://192.168.178.76:8080/api/meal/livesearch?products=";

export const getLiveSearchData = (searchInput, token) =>
        axios
            .get(url + searchInput, header(token))
            .then((response) => response.data)
            .catch((error) => console.log(error));


const mealUrl = "http://192.168.178.76:8080/api/meal/new"; //todoMeal Controller

export const createMeal = (userId, mealParam, addMealListOfProducts, token) => {
    console.log({userId, mealParam, addMealListOfProducts})
    axios
        .post(mealUrl, {userId, mealParam, addMealListOfProducts}, header(token))
        .then((response) => response.data);
}
