import 'react-native-gesture-handler';
import React, {useEffect, useMemo, useState} from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from "../screens/LoginScreen";
import {AuthContext} from "../context/AuthContext";
import {ActivityIndicator, View} from "react-native";
import StackNavigator from "./StackNavigator";


const Tab = createMaterialBottomTabNavigator();


export default function Navigator() {



    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, []);


    const authContext = useMemo(()=> ({
        signIn: () => {
            setUserToken("sampletoken");
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoading(false)
        },
        signUp: () => {
            setUserToken("sampletoken");
            setIsLoading(false);
        },
    }));

    if ( isLoading ) {
        return(
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'}}
            >
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
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
    );
}
