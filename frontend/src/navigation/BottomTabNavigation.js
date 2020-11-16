import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import DashboardScreen from "../screens/Dashboard/DashboardScreen";


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashboardScreen} />
            <Tab.Screen name="Settings" component={DashboardScreen} />
        </Tab.Navigator>
    );
}
