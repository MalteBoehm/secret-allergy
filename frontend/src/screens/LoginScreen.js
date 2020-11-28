import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import LoginHeader from "../components/LoginScreen/LoginHeader";
import LoginForm from "../components/LoginScreen/LoginForm";

export default function LoginScreen () {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
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
