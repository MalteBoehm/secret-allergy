import React, {useContext, useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import LoginHeader from "../components/LoginScreen/LoginHeader";
import LoginForm from "../components/LoginScreen/LoginForm";
import AuthContext from "../context/AuthContext";
import {
    loadTokenFromLocalStorage ,
} from '../service/AsyncStorage';

export default function LoginScreen () {

    const [isLoading, setIsLoading] = useState(true);
    const { token, setToken } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            if(token === null){
                loadTokenFromLocalStorage().
                then(value=> {
                    setToken(value);
                    console.log(value + " LoginScreen")
                });
            }
            setIsLoading(false);
        }, 2000)
    }, []);
    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <ActivityIndicator size='large'/>
            </View>
        );}

    return (
        <View>
            <LoginHeader/>
            <LoginForm/>
        </View>
    )

}
