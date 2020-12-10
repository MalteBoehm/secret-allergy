import React from "react";
import { FloatingAction } from "react-native-floating-action";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale } from "../styles/globalstyles";
import { StyleSheet } from "react-native";


export default function FloatingButton({ navigation }) {
    const actions = [
        {
            text: "Frühstück",
            icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container}   color="white" size={25} />,
            name: "Dashboard",
            color: "#2bbf9c",
            target: "AddMeal",
            mealParamTarget: "breakfast",
            position: 1
        }, {
            text: "Mittagessen",
            icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container} color="white" size={25} />,
            name: "Mittagessen",
            target: "AddMeal",
            mealParamTarget: "meal",
            color: "#2bbf9c",
            position: 2
        }, {
            text: "Abendessen",
            icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container} color="white" size={25} />,
            name: "Abendessen",
            target: "AddMeal",
            mealParamTarget: "dinner",
            color: "#2bbf9c",
            position: 3
        }, {
            text: "Snacks",
            icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container} color="white" size={25} />,
            name: "Snacks",
            target: "AddMeal",
            mealParamTarget: "snacks",
            color: "#2bbf9c",
            position: 4
        }
    ];

    return (
      <FloatingAction
        distanceToEdge={{ vertical: moderateScale(20), horizontal: moderateScale(10) }}
        buttonSize={moderateScale(50)}
        iconWidth={moderateScale(35)}
        iconHeight={moderateScale(35)}
        color="#2bbf9c"
        actions={actions}
        textBackground= '#ffffff'
        onPressItem={(name) => navigation.navigate( "AddMeal" ,
          { mealParam: actions.find(action => action.name === name)?.mealParamTarget })
        }
      />
    );
}

const MenuItemsStyled = StyleSheet.create({
    container: {
        backgroundColor: "#2bbf9c",
    }
});




