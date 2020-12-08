import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import { moderateScale } from "../../styles/globalstyles";
import { LinearGradient } from "expo-linear-gradient";
import mealCount from "./DashboardList";
import DashboardContext from "../../context/DashboardContext";


export default function DashboardHeader() {

    const { getMealsTotal, getAllergensTotal } = useContext(DashboardContext);

    return (
      <Row size={0.5}>
          <LinearGradient
            style={DashboardStyle.container}
            colors={["rgb(0,121,91)", "transparent"]}>
              <Row size={0.4}>
                  <Text style={{
                      textAlign: "center",
                      fontFamily: "Helvetica-Oblique",
                      fontSize: 24,
                      justifyContent: "center",
                      color: "white",
                      paddingTop: moderateScale(18, 0.5)
                  }}>
                      Secret Allergy
                  </Text>
              </Row>
              <Row size={0.6} style={DashboardStyle.rowWithCols}>
                  <Col size={1} style={DashboardStyle.colsText}>
                      <Text style={DashboardStyle.textStyle}>
                          {getAllergensTotal()}
                      </Text>
                      <Text style={DashboardStyle.textStylecolsText}>
                          Allergene
                      </Text>
                  </Col>
                  <Col size={1} style={DashboardStyle.colsText}>
                      <Text style={DashboardStyle.textStyle}>
                          {getMealsTotal()}
                      </Text>
                      <Text style={DashboardStyle.textStylecolsText}>
                          Mahlzeiten
                      </Text>
                  </Col>
                  <Col size={1} style={DashboardStyle.colsText}>
                      <Text style={DashboardStyle.textStyle}>

                      </Text>
                      <Text style={DashboardStyle.textStylecolsText}>
                          Beschwerden
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
          width: "100%"
      },
      rowWithCols: {
          width: "100%",
          flexDirection: "row"

      },
      cols: {
          justifyContent: "center",
          textAlign: "center"
      },
      colsText: {
          justifyContent: "center",
          textAlign: "center"
      },
      textStylecolsText: {
          fontSize: moderateScale(14, 0.4),
          color: "#ffffff",
          alignContent: "center",
          textAlign: "center"
      },
      textStyle: {
          fontSize: moderateScale(18, 0.4),
          color: "#ffffff",
          alignContent: "center",
          textAlign: "center",
          justifyContent: "flex-end"
      }

  }
);

