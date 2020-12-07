import { Grid, Row } from "react-native-easy-grid";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import { moderateScale } from "../../styles/globalstyles";
import AuthContext from "../../context/AuthContext";
import { getAllTodayMeals } from "../../service/LiveSearchService";
import DashboardMealHeader from "./components/DashboardMealHeader";
import DashboardMealAllergens from "./components/DashboardMealAllergens";
import DashboardMealSideEffects from "./components/DashboardMealSideEffects";
import DashboardContext from "../../context/DashboardContext";

export default function DashboardList({ navigation }) {
    const { todaysBreakfast, todaysMeal, todaysDinner, todaysSnack } = useContext(DashboardContext);


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

                      const products = item.mapObject.map(meal => meal.products?.map(product => product.product_name)).flat();
                      const allergens = item.mapObject.map(meal => meal.allergens?.map(allergen => allergen.names)).flat();
                      const hasSideEffects = item.mapObject.hasSideEffect;
                      const hasAllergens = item.mapObject.allergens;
                      const checkSideEffectsArray = item.mapObject.sideEffects;

                      return (
                        <Row key={item.id} style={MealStyled.card}>
                            <MealBoxStyled>
                                <Grid>
                                    <Row size={1}>
                                        <DashboardMealHeader
                                          item={item}
                                          navigation={navigation}
                                          products={products}
                                          allergens={allergens}
                                        />
                                    </Row>
                                    <Row size={1} style={GridListStyled.component}>
                                        <DashboardMealAllergens allergens={allergens} hasAllergens={hasAllergens}
                                        />
                                    </Row>
                                    <Row size={1} style={GridListStyled.lastComponent}>
                                        <DashboardMealSideEffects hasSideEffects={hasSideEffects}
                                                                  checkSideEffects={checkSideEffectsArray}
                                                                  navigation={navigation}
                                                                  item={item}

                                        />
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
const MealStyled = StyleSheet.create({
    card: {

        marginVertical: moderateScale(4),
        marginBottom: moderateScale(4),
        marginHorizontal: moderateScale(5),
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderColor: "#d0d0d0",
        shadowRadius: 2,
    },
});

const GridListStyled = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "rgb(255,255,255)",
        justifyContent: "space-between",
        paddingTop: moderateScale(1, 0.2),
        paddingBottom: moderateScale(7, 0.2),
    }, component: {
        paddingTop: moderateScale(10),
    }, lastComponent: {
        paddingTop: moderateScale(15),
        marginBottom: moderateScale(10),
    },
});


const MealBoxStyled = styled.View`
  display: flex;
  width: 100%;
  min-height: ${moderateScale(180, 0.3)};
  justify-content: stretch;

`;

