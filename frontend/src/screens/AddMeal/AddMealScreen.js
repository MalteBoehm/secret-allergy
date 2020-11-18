import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {moderateScale} from '../../styles/globalstyles';
import AddMealHeader from '../../components/AddMealHeader';
import AddMealSuche from '../../components/AddMealSuche';
import AddMealList from '../../components/AddMealList';

export default function AddMealScreen(){
    return (
        <Grid style={StyledGrid.container}>
            <AddMealHeader />
            <AddMealSuche />
            <AddMealList />
        </Grid>
    );
}

const StyledGrid = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#cacaca',
        marginTop: moderateScale(25),
    },
    addMealHeadercontainer: {
        backgroundColor:  '#f1550c',
    },
    listContainer: {
        backgroundColor: '#ac3434'
    }


})

const HeaderStyle = StyleSheet.create({

    addButton: {
        justifyContent: 'flex-end',
    }
})
