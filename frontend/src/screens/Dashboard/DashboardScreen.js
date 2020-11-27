import React from 'react';
import { Grid } from "react-native-easy-grid";
import FloatingAddButton from "../../navigation/FloatingAddButton";
import DashboardHeader from "../../components/DashboardScreen/DashboardHeader";
import DashboardList from "../../components/DashboardScreen/DashboardList";

export default function DashboardScreen({ navigation }){
    return (
            <Grid style={{display:'flex', flexDirection: 'column'}}>
                <DashboardHeader/>
                <DashboardList navigation={navigation} />
                <FloatingAddButton navigation={navigation}/>
            </Grid>
    );
}

