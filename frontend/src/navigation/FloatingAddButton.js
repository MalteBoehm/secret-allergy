import React from "react";
import { FloatingAction } from "react-native-floating-action";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale } from "../styles/globalstyles";
import { StyleSheet } from "react-native";


export default function FloatingButton({ navigation }) {
    return (
      <FloatingAction
        distanceToEdge={{ vertical: moderateScale(20), horizontal: moderateScale(10) }}
        buttonSize={moderateScale(50)}
        iconWidth={moderateScale(35)}
        iconHeight={moderateScale(35)}
        color="#2bbf9c"
        actions={actions}
        textBackground="#2bbf9c"
        onPressItem={() => navigation.navigate({ target })
        }
      />
    );
}

const MenuItemsStyled = StyleSheet.create({
    container: {
        backgroundColor: "#2bbf9c"

    }

});

const actions = [
    {
        text: "Frühstück",
        icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container} color="white" size={25} />,
        name: "Dashboard",
        target: "Dashboard",
        position: 1
    },
    {
        text: "Mittagessen",
        icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container} color="white" size={25} />,
        name: "bt_adgfbility", //todo
        position: 2
    }, {
        text: "Abendessen",
        icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container} color="white" size={25} />,
        name: "1212",
        position: 3
    }, {
        text: "Snack",
        icon: <MaterialCommunityIcons name="plus" style={MenuItemsStyled.container} color="white" size={25} />,
        name: "b1212",
        position: 4
    }
];

