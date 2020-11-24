import 'react-native-gesture-handler';
import React from 'react';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import StackNavigator from "./StackNavigator";


const Tab = createMaterialBottomTabNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator  activeColor='#f0edf6'
                            inactiveColor='#3e2435'
                            barStyle={{ backgroundColor: '#646ea0'}}>
                <Tab.Screen name="Home" component={StackNavigator} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                }}/>
                <Tab.Screen name="Tagebuch" component={DashboardScreen} options={{
                    tabBarLabel: 'Tagebuch',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={25} />
                    ),
                }}/>
                <Tab.Screen name="Settings" component={DashboardScreen} options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}