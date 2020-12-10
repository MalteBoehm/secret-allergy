import React from "react";
import { Image, View } from "react-native";
import { Header } from "react-native-elements";


export default function LoginHeader() {
    return (
      <View>
          <Header centerComponent={{ text: "Secret Allergy Login", style: { color: "#fff" } }} />
          <Image style={{ width:250 ,height:250, alignSelf: "center"}} source={require("../../../assets/secretallergy.png")}/>
      </View>
    );
}
