import React from 'react';
import {Grid, Row, Col} from "react-native-easy-grid";
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import {moderateScale} from "../styles/globalstyles";

export default function AddMealHeader( {navigation} ){

    return(
            <Row size={0.5} style={headerStyle.rowStyle}>
                <Button  type="outline"
                         title={"Zurück"}
                         onPress={()=> navigation.navigate('Dashboard')}
                />
                <Button  type="solid"
                         title={"Mahlzeit erstellen"}
                         onPress={()=> alert('Once you will be able to create a Meal')}
                 />
            </Row>

    )
}

const headerStyle = StyleSheet.create({
    rowStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: moderateScale(10, 0.5),
        marginRight: moderateScale(10, 0.5),
    },
})



