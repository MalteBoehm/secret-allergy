import React, { useContext } from "react";
import { Row, Col, Grid } from "react-native-easy-grid";
import { Text, StyleSheet, Button, View } from "react-native";
import { moderateScale } from "../../../styles/globalstyles";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { FontAwesome } from "@expo/vector-icons";


export default function DashboardMealSideEffects({
                                                     products,
                                                     allergens,
                                                     checkSideEffects,
                                                     hasSideEffects,
                                                     navigation,
                                                     currentMeal
                                                 }) {


    return (
      <Grid>
          <Row style={{ alignSelf: "center" }}>
              <Text style={{
                  fontWeight: "bold",
                  fontSize: moderateScale(12, 0.3)
              }}>
                  Beschwerden:
              </Text>
          </Row>
          <Row style={{ alignSelf: "space-evenly", justifyContent: "space-evenly" }}>
              <Col size={0.33}>

              </Col>
              <Col size={0.33}>
                  {hasSideEffects ? <Text>Grafik ist sichtbar</Text> :
                    <Row>
                        <Text style={{ textAlign: "center" }}>
                            {checkSideEffects ? checkSideEffects.map(sideEffect => sideEffect) :
                              <Text>starke Magenkrämpfe</Text>}
                        </Text>
                    </Row>
                  }

              </Col>
              <Col size={0.33} style={{ alignSelf: "right" }}>
                  <AnimatedProgressWheel
                    backgroundColor={"#45ff00"}
                    size={30}
                    width={30}
                    progress={90}
                    animateFromValue={0}
                    duration={2000}
                    color={"#45ff00"}
                    fullColor={"#e91f1f"}
                  />
                  <View style={{ justifyContent: "flex-end" }}>
                      <FontAwesome.Button iconRight style={RowContainerStyled.buttonToDetail}
                                          name="arrow-right"
                                          backgroundColor="white"
                                          onPress={() =>
                                            navigation.navigate("ReviewMeal", {
                                                currentMeal: products,
                                                allergens: allergens,
                                                meal: currentMeal
                                            })}>
                      </FontAwesome.Button>
                  </View>
              </Col>
          </Row>
      </Grid>
    );
}


const RowContainerStyled = StyleSheet.create({
    container: {
        minHeight: 50,
        maxHeight: moderateScale(250)

    }, buttonToDetail: {
        backgroundColor: "#000000",
        color: "#ffffff",
        textAlign: "right",
        alignSelf: "flex-end"
    }
});
