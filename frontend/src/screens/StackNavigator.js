import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import DashboardScreen from "./Dashboard/DashboardScreen";
import AddMealScreen from "./AddMeal/AddMealScreen";




const Stack = createStackNavigator();


export default function StackNavigator(){
    return(
                <Stack.Navigator initialRouteName={'Home'}
                                 screenOptions={{
                                     headerShown: false
                                 }}>
                    <Stack.Screen
                        name="Dashboard"
                        component={DashboardScreen}
                    />
                    <Stack.Screen name="AddMeal" component={AddMealScreen} />
                </Stack.Navigator>
    );

}
