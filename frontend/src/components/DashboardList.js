import {Grid, Row} from "react-native-easy-grid";
import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'
import {moderateScale} from '../styles/globalstyles';
import { LinearGradient } from 'expo-linear-gradient';
import FloatingAddButton from "../navigation/FloatingAddButton";


export default function DashboardList(){
        return(
                <Row size={2}>
                        <ScrollView>
                            <Grid style={StyledGridList.container}>
                                <Row>
                                    <Text> FRÜHSTÜCK</Text>
                                </Row>
                                <Row>
                                    <Text> Mittag</Text>
                                </Row>
                                <Row>
                                    <Text> Abend</Text>
                                </Row>
                                <Row>
                                    <Text> Snack</Text>
                                </Row>
                            </Grid>
                        </ScrollView>
                </Row>


        );
}


const StyledGridList = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
})
