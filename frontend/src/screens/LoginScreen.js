import React, {useEffect, useMemo, useState} from 'react';
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



    const authContext = useMemo(()=> ({
        signIn: () => {
            setUserToken("sampletoken");
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoading(false)
        },
        signUp: () => {
            setUserToken("sampletoken");
            setIsLoading(false);
        },
    }));

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
