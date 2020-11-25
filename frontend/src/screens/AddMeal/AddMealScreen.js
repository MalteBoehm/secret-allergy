import React from 'react';
import { StyleSheet } from 'react-native'
import { Grid } from "react-native-easy-grid";
import {moderateScale} from '../../styles/globalstyles';
import AddMealHeader from '../../components/AddMealHeader';
import AddMealList from '../../components/AddMealList';

export default function AddMealScreen( {navigation} ){
    return (
        <Grid style={StyledGrid.container}>
            <AddMealHeader navigation={navigation} />
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

