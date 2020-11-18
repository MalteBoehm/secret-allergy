import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
import DashboardScreen from "./src/screens/Dashboard/DashboardScreen";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import AddMealScreen from "./src/screens/AddMeal/AddMealScreen";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Navigator from "./src/screens/Navigator";
import StackNavigator from "./src/screens/StackNavigator";






export default function App() {
  return (
      <Navigator/>
        )
      }



