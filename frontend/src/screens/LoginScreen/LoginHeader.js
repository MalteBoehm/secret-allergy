import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";


export default function LoginHeader() {
    return (
      <View>
          <Header
            centerComponent={{ text: "Secret Allergy Login", style: { color: "#fff" } }}
          />
      </View>
    );
}
