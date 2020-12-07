import 'react-native-gesture-handler';
import React, { useContext } from "react";
import DashboardScreen from '../screens/DashboardScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import StackNavigator from "./StackNavigator";
import DashboardContextProvider from "../context/DashboardContextProvider";
import AuthContext from "../context/AuthContext";


const Tab = createMaterialBottomTabNavigator();


export default function Navigator() {
    const {token, userData} = useContext(AuthContext);

    return (
      <DashboardContextProvider token={token} userData={userData}>
                <Tab.Navigator  activeColor='#f0edf6'
                                inactiveColor='#0e4253'
                                barStyle={{ backgroundColor: '#2a7694'}}>
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
                    <Tab.Screen name="Symptome" component={DashboardScreen} options={{
                        tabBarLabel: 'Symptome',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="medical-bag" color={color} size={25} />
                        ),
                    }}/>
                    <Tab.Screen name="Settings" component={DashboardScreen} options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cogs" color={color} size={25} />
                        ),
                    }}/>
                </Tab.Navigator>
          </DashboardContextProvider>
    );
}
