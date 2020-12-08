import 'react-native-gesture-handler';
import * as React from 'react';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import DashboardScreen from "../screens/DashboardScreen";
import AddMealScreen from "../screens/AddMealScreen";
import LoginScreen from "../screens/LoginScreen";
import AuthContext from '../context/AuthContext';
import {useContext} from "react";
import ReviewMealScreen from "../screens/ReviewMealScreen";




const Stack = createStackNavigator();

export default function StackNavigator(){
    const { tokenIsValid } = useContext(AuthContext);
    return(
                <Stack.Navigator initialRouteName={ tokenIsValid() ? 'Dashboard': 'Login'}
                                 screenOptions={{
                                     headerShown: false
                                 }}>
                    <Stack.Screen
                        name="Dashboard"
                        component={DashboardScreen}
                    />
                    <Stack.Screen name="AddMeal" component={AddMealScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="ReviewScreen" component={ReviewMealScreen} />
                </Stack.Navigator>
    );

}
