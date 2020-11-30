import React, {useContext, useEffect, useState} from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
    saveTokenToLocalStorage,
    saveUserDataToLocalStorage,
    deleteTokenFromLocalStorage
    } from '../service/AsyncStorage';


export default function ( {children} ) {
    const [token, setToken] = useState(null);
    console.log(token + " Das Token")
    const [userData, setUserData] = useState(null);
    console.log(userData + " UserData")


    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                console.log(decoded.toString() + " value of decoded token")
                console.log(decoded.user)
                if (decoded.exp > new Date().getTime() / 1000) {
                    setUserData(decoded);
                    saveTokenToLocalStorage(token);
                    saveUserDataToLocalStorage(decoded);
                }
            } catch (e) {
                console.log(e);
            }}
    }, [token]);



    const tokenIsValid = () =>
        token && userData?.exp > new Date().getTime() / 1000;

    const loginWithUserCredentials = (loginData) =>
        axios
            .post('http://192.168.178.76:8080/auth/login', loginData)
            .then((response) => {
                setToken(response.data)
            });

    const logout = () =>
        deleteTokenFromLocalStorage();

    console.log(tokenIsValid() + " " + token)
    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                logout,
                tokenIsValid,
                loginWithUserCredentials,
                userData
            }}>
            {children}
        </AuthContext.Provider>
    );
}
