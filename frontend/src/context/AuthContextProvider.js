import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
    saveTokenToLocalStorage,
    saveUserDataToLocalStorage,
    deleteTokenFromLocalStorage
} from "../service/AsyncStorage";


export default function({ children }) {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp > new Date().getTime() / 1000) {
                    setUserData(decoded);
                    saveTokenToLocalStorage(token).catch(e => {
                        console.error(e);
                    });
                    saveUserDataToLocalStorage(decoded).catch(e => {
                        console.error(e);
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
    }, [token]);


    const tokenIsValid = () =>
      token && userData?.exp > new Date().getTime() / 1000;

    const loginWithUserCredentials = (loginData) =>
      axios
        .post("http://localhost:8080/auth/login", loginData)
        .then((response) => {
            setToken(response.data);
        });

    const logout = () =>
      deleteTokenFromLocalStorage();

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
