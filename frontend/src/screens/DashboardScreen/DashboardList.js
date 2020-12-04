import { Grid, Row } from "react-native-easy-grid";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import { moderateScale } from "../../styles/globalstyles";
import AuthContext from "../../context/AuthContext";
import { getAllTodayMeals } from "../../service/LiveSearchService";
import DashboardMealHeader from "./components/DashboardMealHeader";
import DashboardMealAllergens from "./components/DashboardMealAllergens";

export default function DashboardList({ navigation }) {
    const { userData, token } = useContext(AuthContext);
    const userId = userData.sub;

    const [todaysBreakfast, setTodaysBreakfast] = useState([]);
    const [todaysMeal, setTodaysMeal] = useState([]);
    const [todaysDinner, setTodaysDinner] = useState([]);
    const [todaysSnack, setTodaysSnack] = useState([]);

    useEffect(() => {
        console.log(token);
        console.log(userId);
        getAllTodayMeals(userId, token).then((meals) => {
            setTodaysBreakfast(meals.filter(meal => meal.mealDaytime === "breakfast"));
            setTodaysMeal(meals.filter(meal => meal.mealDaytime === "meal"));
            setTodaysDinner(meals.filter(meal => meal.mealDaytime === "dinner"));
            setTodaysSnack(meals.filter(meal => meal.mealDaytime === "snack"));
        }).catch(console.log);
    }, []);

    useEffect(() => {
        console.log(todaysBreakfast);
    }, [todaysBreakfast]);

    function findAllergens(id) {
        if (id === 1) {
            return todaysBreakfast.allergens?.toString().replace(",", ", ");
        }
        if (id === 2) {
            return todaysMeal.allergens?.toString().replace(",", ", ");
        }
        if (id === 3) {
            return todaysDinner.allergens?.toString().replace(",", ", ");
        }
        if (id === 4) {
            return todaysSnack.allergens?.toString().replace(",", ", ");
        }
    }

    const listItemsToMap = [
        {
            id: 1,
            title: "Frühstück",
            emojiName: "coffee",
            kindOfMeal: "breakfast",
            mapObject: todaysBreakfast,
        }, {
            id: 2,
            title: "Mittagessen",
            emojiName: "pizza",
            kindOfMeal: "meal",
            mapObject: todaysMeal,
        }, {
            id: 3,
            title: "Abendessen",
            emojiName: "wine_glass",
            kindOfMeal: "dinner",
            mapObject: todaysDinner,
        }, {
            id: 4,
            title: "Snack",
            emojiName: "apple",
            kindOfMeal: "snacks",
            mapObject: todaysSnack,
        }];

    return (
      <Row size={2}>
          <ScrollView>
              <Grid style={GridListStyled.container}>
                  {listItemsToMap.map(item => {
                      const products = item.mapObject?.map(meal => meal.products?.map(product => product.product_name)).flat();
                      const allergens = item.mapObject?.map(meal => meal.allergens?.map(allergen => allergen.names)).flat();
                      return (
                        <Row key={item.id}>
                            <MealBoxStyled>
                                <Grid>
                                    <Row size={2}>
                                        <DashboardMealHeader
                                          item={item}
                                          navigation={navigation}
                                          products={products}
                                          allergens={allergens}
                                        />
                                    </Row>
                                    <Row size={1}>
                                        <DashboardMealAllergens allergens={allergens} />
                                    </Row>
                                </Grid>
                            </MealBoxStyled>
                        </Row>
                      );
                  })}
              </Grid>
          </ScrollView>
      </Row>
    );
}


const GridListStyled = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#8a92a35c",
        justifyContent: "space-between",
        marginLeft: moderateScale(5, 0.2),
        marginRight: moderateScale(5, 0.2),
        paddingTop: moderateScale(1, 0.2),
        paddingBottom: moderateScale(7, 0.2),
    },
});


const MealBoxStyled = styled.View`
  display: flex;
  width: 100%;
  min-height: ${moderateScale(180, 0.3)};
  background-color: white;
  border-color: #a5a5a5;
  justify-content: stretch;
  border-width: 1px;
`;

