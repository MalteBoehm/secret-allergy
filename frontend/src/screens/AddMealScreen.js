import React from 'react';
import { StyleSheet } from 'react-native'
import { Grid } from "react-native-easy-grid";
import {moderateScale} from '../styles/globalstyles';
import AddMealHeader from '../components/AddMealScreen/AddMealHeader';
import AddMealList from '../components/AddMealScreen/AddMealList';

export default function AddMealScreen( {navigation, route} ){
    return (
        <Grid style={StyledGrid.container}>
            <AddMealHeader navigation={navigation} route={route} />
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

