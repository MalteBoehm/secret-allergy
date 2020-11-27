import React from 'react';
import {Text, View} from 'react-native';
import LoginHeader from "../components/LoginScreen/LoginHeader";
import LoginForm from "../components/LoginScreen/LoginForm";

export default function LoginScreen ({ navigation }){

    return(
        <View>
            <LoginHeader/>
            <LoginForm/>
        </View>
    )

}
