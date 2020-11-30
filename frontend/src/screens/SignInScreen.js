import React, {useContext, useState} from "react";
import { AuthContext } from '../context/AuthContext';


export default function SignInScreen({ navigation }) {

    const { signIn } = useContext(AuthContext);
    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });
}
