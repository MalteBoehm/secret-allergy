import React, {useState} from 'react';
import { Row} from "react-native-easy-grid";
import { SearchBar } from 'react-native-elements';

export default function AddMealSuche(){

    const [mealName, setMealName] = useState();

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

