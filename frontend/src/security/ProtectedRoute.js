import React, { useContext } from 'react';
import Navigator from "../navigation/Navigator";
import StackNavigator from "../navigation/StackNavigator";
import AuthContext from '../context/AuthContext';
import {NavigationContainer} from "@react-navigation/native";
import LiveSearchProvider from "../context/LiveSearchProvider";
import SearchInputContextProvider from "../context/SearchInputContextProvider";

export default function ProtectedRoute(props) {
    const { tokenIsValid } = useContext(AuthContext);

    return(
        <SearchInputContextProvider>
            <LiveSearchProvider>
                <NavigationContainer>
                    {tokenIsValid() ? <Navigator {...props}/> : <StackNavigator/>}
                </NavigationContainer>
            </LiveSearchProvider>
        </SearchInputContextProvider>
    )
}
