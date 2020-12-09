import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthContext from "../../context/AuthContext";

const initialState = {
    username: "",
    password: ""
};
export default function LoginForm({ navigation }) {

    const { loginWithUserCredentials } = useContext(AuthContext);

    const [loginData, setLoginData] = useState(initialState);
    const [error, setError] = useState("");

    return (
      <View>
          <Input
            placeholder="Username"
            name="username"
            value={loginData.username}
            onChangeText={text => setLoginData({ ...loginData, username: text })}

            leftIcon={
                <Icon
                  name="user"
                  size={24}
                  color="black"
                />
            }
          />
          <Input
            placeholder="Password"
            name="password"
            value={loginData.password}
            errorStyle={{ color: "red" }}
            secureTextEntry={true}
            onChangeText={text => setLoginData({ ...loginData, password: text })}

          />
          <Button
            title="Login"
            buttonStyle={{ backgroundColor: "#3ca938" }}
            onPress={handleSubmit}
          />
      </View>
    );


    function handleSubmit() {
        loginWithUserCredentials(loginData)
          .then(() => navigation.navigate("Dashboard"))
          .catch(() => setError("Unknown username or password."));
    }
}
