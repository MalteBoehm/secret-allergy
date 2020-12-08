import React from 'react';
import AddMealHeader from "./AddMealScreen/AddMealHeader";
import AddMealList from "./AddMealScreen/AddMealList";
import { Grid } from "react-native-easy-grid";
import { StyleSheet } from "react-native";
import { moderateScale } from "../styles/globalstyles";



export default function ReviewMealScreen({navigation, route}){

    return(
      <Grid style={GridListStyled.container}>
          <AddMealHeader navigation={navigation} route={route} />
          <AddMealList />
      </Grid>
    )
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
