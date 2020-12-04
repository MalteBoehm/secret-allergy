import React from 'react';
import {View} from 'react-native';
import { Grid } from "react-native-easy-grid";
import FloatingAddButton from "../navigation/FloatingAddButton";
import DashboardHeader from "./DashboardScreen/DashboardHeader";
import DashboardList from "./DashboardScreen/DashboardList";
import { LinearGradient } from "expo-linear-gradient/src/LinearGradient";

export default function DashboardScreen({ navigation }){
    return (
                 <Grid style={{display:'flex', flexDirection: 'column'}}>

                    <DashboardHeader/>


                <DashboardList navigation={navigation} />
                <FloatingAddButton navigation={navigation}/>
            </Grid>
    );
}

