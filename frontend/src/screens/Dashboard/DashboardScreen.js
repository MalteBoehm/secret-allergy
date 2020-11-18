import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {moderateScale} from '../../styles/globalstyles';
import { LinearGradient } from 'expo-linear-gradient';
import FloatingAddButton from "../../navigation/FloatingAddButton";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardList from "../../components/DashboardList";
import App from '../../../App';
import Navigator from "../Navigator";

export default function DashboardScreen({ navigation, route }){
    return (
            <Grid style={{display:'flex', flexDirection: 'column'}}>
                <DashboardHeader/>
                <DashboardList navigation={navigation} route={route}/>
                <FloatingAddButton/>
            </Grid>
    );
}

