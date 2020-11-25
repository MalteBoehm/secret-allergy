import React, {useContext, useEffect, useState} from 'react';
import {Grid, Row, Col} from "react-native-easy-grid";
import { SearchBar } from 'react-native-elements';
import LiveSearchContext from "../context/LiveSearchContext";

export default function AddMealSuche(){

    const [mealName, setMealName] = useState();

    const {liveSearchData} = useContext(LiveSearchContext);
    return(

            <Row size={0.5}
                 style={{
                        display:'flex',
                        alignContent:'stretch',
                        width: '100%',
                        flexDirection: 'column'}}>


                <SearchBar placeholder={'Suche ein Produkt'}
                           autoCorrect={false}
                           value={mealName}
                           containerStyle={{backgroundColor: 'gray' ,width:'100%'}}
                           inputContainerStyle={{backgroundColor: 'white', }}/>
            </Row>
    )
}

