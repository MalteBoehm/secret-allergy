import React, {useContext, useState} from 'react';
import { Row} from "react-native-easy-grid";
import { SearchBar } from 'react-native-elements';
import {LiveSearchContext} from "../context/LiveSearchContext";
import SearchInputContext from "../context/SearchInputContext";

export default function AddMealSuche(){

    const {searchInput, setSearchInput} = useContext(SearchInputContext);


    const handler = (input=> {
        setSearchInput(input)
    });

    return(
            <Row size={0.5}
                 style={{
                        display:'flex',
                        alignContent:'stretch',
                        width: '100%',
                        flexDirection: 'column'}}>


                <SearchBar placeholder={'Suche ein Produkt'}
                           preventDefault
                           autoCorrect={false}
                           value={searchInput}
                           onChangeText={handler}
                           containerStyle={{backgroundColor: 'gray' ,width:'100%'}}
                           inputContainerStyle={{backgroundColor: 'white', }}/>
            </Row>
    )
}

