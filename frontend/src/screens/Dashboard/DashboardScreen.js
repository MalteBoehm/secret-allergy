import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Col, Row, Grid } from "react-native-easy-grid";
import FloatingAddButton from "../../navigation/FloatingAddButton";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardList from "../../components/DashboardList";

export default function DashboardScreen({ navigation }){
    return (
            <Grid style={{display:'flex', flexDirection: 'column'}}>
                <DashboardHeader/>
                <DashboardList navigation={navigation} />
                <FloatingAddButton navigation={navigation}/>
            </Grid>
    );
}

