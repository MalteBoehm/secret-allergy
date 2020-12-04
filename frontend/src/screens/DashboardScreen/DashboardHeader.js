import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Col, Row } from "react-native-easy-grid";
import { moderateScale } from "../../styles/globalstyles";
import { LinearGradient } from "expo-linear-gradient";

export default function DashboardHeader() {

    return (
      <Row size={1} style={DashboardStyle.container}>
          <LinearGradient
            style={DashboardStyle.container}
            colors={["rgb(0,121,91)", "transparent"]}>

              <Row size={0.4}>
                  <Text h1 style={{
                      textAlign: "center",
                      justifyContent: "center",
                      color: "white",
                      paddingTop: moderateScale(18, 0.5),
                  }}>
                      Secret Allergy
                  </Text>
              </Row>

              <Row size={0.6} style={DashboardStyle.rowWithCols}>
                  <Col size={1} style={DashboardStyle.cols}>
                      <Text style={DashboardStyle.textStyle}>
                          4 Mahlzeiten
                      </Text>
                  </Col>
                  <Col size={1} style={DashboardStyle.cols}>
                      <Text style={DashboardStyle.textStyle}>
                          18 Allergene
                      </Text>
                  </Col>
                  <Col size={1} style={DashboardStyle.cols}>
                      <Text style={DashboardStyle.textStyle}>
                          0 Nebenwirkungen
                      </Text>
                  </Col>
              </Row>
          </LinearGradient>
      </Row>
    );
}


const DashboardStyle = StyleSheet.create({
      container: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#2bbf9c",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",

      },
      rowWithCols: {
          width: "100%",
          flexDirection: "row",
          borderBottomColor: "#383938",
          borderBottomWidth: 1,

      },
      cols: {

          justifyContent: "center",
          textAlign: "center",
      },

      textStyle: {
          fontSize: moderateScale(12, 0.4),
          color: "#ffffff",
          alignContent: "center",
          textAlign: "center",
      },
  },
);

