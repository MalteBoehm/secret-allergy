import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Header,Image} from 'react-native-elements';


export default function LoginHeader(){
    return(
        <View>
                <Header
                    centerComponent={{ text: 'Secret Allergy Login', style: { color: '#fff' } }}
                />
        </View>
    )
}
