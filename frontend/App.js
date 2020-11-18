import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
import DashboardScreen from "./src/screens/Dashboard/DashboardScreen";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import AddMealScreen from "./src/screens/AddMeal/AddMealScreen";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator  activeColor='#f0edf6'
                        inactiveColor='#3e2435'
                        barStyle={{ backgroundColor: '#646ea0'}} >
            <Tab.Screen name="Home" component={DashboardScreen} options={{
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
    );
}




const Stack = createStackNavigator();
export default function App() {
  return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName={'Home'}>
                  <Stack.Screen
                      name="Dashboard"
                      component={DashboardScreen}
                  />
                  <Stack.Screen name="AddMeal" component={AddMealScreen} />
                  <Stack.Screen name="Tabs" component={MyTabs}/>
              </Stack.Navigator>
          </NavigationContainer>
        );
}


