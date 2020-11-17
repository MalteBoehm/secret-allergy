import React, {useState} from 'react';
import {Grid, Row, Col} from "react-native-easy-grid";
import {TextInput, StyleSheet, ScrollView, Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements';


export default function AddMealSuche(){

    const [search, setSearch] = useState("hier suchen");
    return(

            <Row size={1} style={{display:'flex', alignContent:'stretch', width: '100%'}}>
                <SearchBar placeholder="Suche hier..."
                           onChangeText={text => setSearch(text)}
                           value={search}
                           containerStyle={{backgroundColor: 'gray' ,width:'100%'}}
                           inputContainerStyle={{backgroundColor: 'white', }}/>
            </Row>

    )
}

