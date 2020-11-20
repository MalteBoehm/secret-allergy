import React, {useEffect, useState} from 'react';
import {Grid, Row, Col} from "react-native-easy-grid";
import {TextInput, StyleSheet, ScrollView, Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {getProducts} from '../api/ProductSearch';

export default function AddMealSuche(){




    const [mealName, setMealName] = useState('Name deiner Mahlzeit eintragen');

    return(

            <Row size={1} style={{display:'flex', alignContent:'stretch', width: '100%', flexDirection: 'column'}}>
                <TextInput style={{ height: 150,
                                    borderColor: 'gray',
                                    borderWidth: 1 ,
                                    backgroundColor:'white',
                                    marginTop:10,
                                    marginLeft:10,
                                    marginRight:10,
                                    marginBottom:10
                                    }}
                           onChangeText={mealName}
                           value={mealName}
                />
                <SearchBar placeholder={mealName}

                           autoCorrect={false}
                           value={mealName}
                           containerStyle={{backgroundColor: 'gray' ,width:'100%'}}
                           inputContainerStyle={{backgroundColor: 'white', }}/>
            </Row>
    )
}

