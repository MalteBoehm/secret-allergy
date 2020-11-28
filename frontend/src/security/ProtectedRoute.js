import React, { useContext } from 'react';
import Navigator from "../navigation/Navigator";
import StackNavigator from "../navigation/StackNavigator";
import AuthContext from '../context/AuthContext';
import {NavigationContainer} from "@react-navigation/native";

export default function ProtectedRoute(props) {
    const { tokenIsValid } = useContext(AuthContext);

    return(
    <NavigationContainer>
        {tokenIsValid() ? <Navigator {...props}/> : <StackNavigator/>}
    </NavigationContainer>
    )
}
