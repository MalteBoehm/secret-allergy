import React, {useContext} from 'react';
import {Row} from "react-native-easy-grid";
import { StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import {moderateScale} from "../../styles/globalstyles";
import AuthContext from "../../context/AuthContext";
import {createMeal} from "../../service/LiveSearchService";
import {LiveSearchContext} from "../../context/LiveSearchContext";

export default function AddMealHeader( {navigation, route} ){

    const {userData} = useContext(AuthContext);
    const userId = userData.sub;
    const { mealParam } = route.params;

    const {addMealListOfProducts, setAddMealListOfProducts} = useContext(LiveSearchContext);


    return(
            <Row size={0.5} style={headerStyle.rowStyle}>
                <Button  type="outline"
                         title={"Zurück"}
                         onPress={()=> navigation.navigate('Dashboard')}
                />
                <Button  type="solid"
                         title={"Mahlzeit erstellen"}
                         onPress={()=> {
                             createMeal(userId, mealParam, addMealListOfProducts);
                             setAddMealListOfProducts([]);
                         }}
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


