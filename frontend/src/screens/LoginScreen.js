import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import LoginHeader from "../components/LoginScreen/LoginHeader";
import LoginForm from "../components/LoginScreen/LoginForm";

export default function LoginScreen ({ navigation }){

    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, []);

    if ( isLoading ) {
        return(
            <View style={{
                        flex:1,
                        justifyContent: 'center',
                        alignItems: 'center'}}
            >
                <ActivityIndicator size='large'/>
            </View>
        )
    }
    return(
        <View>
            <LoginHeader/>
            <LoginForm/>
        </View>
    )

}
