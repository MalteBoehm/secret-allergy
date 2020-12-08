import React from "react";
import { Grid, Row } from "react-native-easy-grid";
import { StyleSheet } from "react-native";
import { moderateScale } from "../styles/globalstyles";
import ReviewMealScreenHeader from "./ReviewMealScreen/ReviewMealScreenHeader";
import ReviewMealScreenModal from "./ReviewMealScreen/ReviewMealScreenModal";


export default function ReviewMealScreen({ navigation, route }) {
    const { currentMeal, allergens, meal } = route.params;
    return (
      <Grid style={GridListStyled.container}>
          <Row size={2}>
              <ReviewMealScreenHeader navigation={navigation} currentMeal={currentMeal} allergens={allergens}
                                      meal={meal} />
          </Row>
          <Row size={3}>
              <ReviewMealScreenModal currentMeal={currentMeal} allergens={allergens} />
          </Row>
      </Grid>
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
        paddingBottom: moderateScale(7, 0.2)
    }
});
