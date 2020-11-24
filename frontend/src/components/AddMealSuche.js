import React, {useEffect, useState} from 'react';
import {Grid, Row, Col} from "react-native-easy-grid";
import {TextInput, StyleSheet, ScrollView, Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {getProducts} from '../api/ProductSearch';
import {verticalScale} from "../styles/globalstyles";

export default function AddMealSuche(){

    const [mealName, setMealName] = useState();

    return(

            <Row size={1}
                 style={{
                        display:'flex',
                        alignContent:'stretch',
                        width: '100%',
                        flexDirection: 'column'}}>

                <TextInput placeholder="Frühstück, Mittag, Abendessen, Dropdown Menu"
                           style={{
                                    height: verticalScale(50),
                                    defaultValue:'Name deiner Mahlzeit',
                                    borderColor: 'gray',
                                    borderWidth: 1 ,
                                    backgroundColor:'white',
                                    marginTop:10,
                                    marginLeft:10,
                                    marginRight:10,
                                    marginBottom:10
                                    }}

                           value={mealName}
                           onChangeText={text => setMealName(text)}
                />
                <SearchBar placeholder={'Suche ein Produkt'}
                           autoCorrect={false}
                           value={mealName}
                           containerStyle={{backgroundColor: 'gray' ,width:'100%'}}
                           inputContainerStyle={{backgroundColor: 'white', }}/>
            </Row>
    )
}

