import 'react-native-gesture-handler';
import * as React from 'react';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import AddMealScreen from "../screens/AddMeal/AddMealScreen";




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
