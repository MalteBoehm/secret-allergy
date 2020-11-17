import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {moderateScale} from '../../styles/globalstyles';
import { LinearGradient } from 'expo-linear-gradient';
import FloatingAddButton from "../../navigation/FloatingAddButton";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardList from "../../components/DashboardList";


export default function DashboardScreen(){
    return (
            <Grid style={StyledGrid.container}>
                <DashboardHeader/>
                <DashboardList/>
                <FloatingAddButton/>
            </Grid>
    );
}

const StyledGrid = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    dashboard: {
        alignContent: 'center',
        flexDirection: 'column',
        width: '100%'

    },

})

