import React from 'react';
import { FloatingAction } from "react-native-floating-action";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FloatingButton(){
    return (
            <FloatingAction
                color='#41bc70'
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                }}
            />
    );
}

const actions = [
    {
        text: "Frühstück",
        icon: <MaterialCommunityIcons name="plus"  color='white' size={25} />,
        name: "bt_accessibility",
        position: 1
    },
    {
        text: "Mittagessen",
        icon: <MaterialCommunityIcons name="plus"  color='white' size={25} />,
        name: "bt_adgfbility",
        position: 2
    },{
        text: "Abendessen",
        icon: <MaterialCommunityIcons name="plus"  color='white' size={25} />,
        name: "1212",
        position: 3
    },{
        text: "Snack",
        icon: <MaterialCommunityIcons name="plus"  color='white' size={25} />,
        name: "b1212",
        position: 4
    }
];