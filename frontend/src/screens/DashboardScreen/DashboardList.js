import { Grid, Row } from "react-native-easy-grid";
import React, { useContext, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import { moderateScale } from "../../styles/globalstyles";
import DashboardMealHeader from "./components/DashboardMealHeader";
import DashboardMealAllergens from "./components/DashboardMealAllergens";
import DashboardMealSideEffects from "./components/DashboardMealSideEffects";
import DashboardContext from "../../context/DashboardContext";
import FloatingAddButton from "../../navigation/FloatingAddButton";

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
                      const currentMeal = item.mapObject;
                      const products = item.mapObject.map(meal => meal.products?.map(product => product.product_name)).flat();
                      const allergens = item.mapObject.map(meal => meal.allergens?.map(allergen => allergen.names)).flat();
                      const hasSideEffects = item.mapObject.hasSideEffect;
                      const sideEffectsArray = item.mapObject.map(meal => meal.sideEffects?.map(sideEffect => sideEffect)).flat();
                      return (
                        <Row key={item.id} style={MealStyled.card}>
                            <MealContainerStyled>
                                <Grid>
                                    <MealBoxStyled size={1}>
                                        <DashboardMealHeader
                                          item={item}
                                          navigation={navigation}
                                          products={products}
                                          currentMeal={currentMeal}
                                        /></MealBoxStyled>
                                    <Row size={1} style={GridListStyled.component}>
                                        <DashboardMealAllergens allergens={allergens}
                                        /></Row>
                                    <Row size={1} style={GridListStyled.lastComponent}>
                                        <DashboardMealSideEffects hasSideEffects={hasSideEffects}
                                                                  sideEffectsArray={sideEffectsArray}
                                                                  navigation={navigation}
                                                                  products={products}
                                                                  allergens={allergens}
                                                                  currentMeal={currentMeal}
                                                                  item={item} /></Row>
                                </Grid>
                            </MealContainerStyled>
                        </Row>
                      );
                  })}
              </Grid>
          </ScrollView>
          <FloatingAddButton navigation={navigation} />
      </Row>
    );
}
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

const MealContainerStyled = styled(Grid)`
  margin-vertical: ${moderateScale(2)};
  marginBottom: ${moderateScale(2)};
  marginHorizontal: ${moderateScale(2)};
  backgroundColor: #ffffff;
  borderStyle: solid;
  borderColor: #d0d0d0;
  shadowRadius: 2;
`;

const MealStyled = styled(Row)`
  backgroundColor: #ffffff;
  borderStyle: solid;
  borderColor: #d0d0d0;
  shadowRadius: 2;
`;

const MealBoxStyled = styled(Row)`
  display: flex;
  width: 100%;
  min-height: ${moderateScale(100, 0.3)};
`;

