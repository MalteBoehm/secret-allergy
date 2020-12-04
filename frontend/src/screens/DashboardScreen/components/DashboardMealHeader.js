import React from "react";
import { Row, Col } from "react-native-easy-grid";
import { FlatList, Text, StyleSheet } from "react-native";
import Emoji from "react-native-emoji";
import { moderateScale } from "../../../styles/globalstyles";
import { Button } from "react-native-elements";

export default function DashboardMealHeader({ item, products, navigation }) {

    return (
      <Row style={RowContainerStyled.container}>
          <Col >
              <Row size={1} style={{ textAlign: "center" }}>
                  <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: moderateScale(18, 0.3),
                        textAlign: "center",
                    }}> {item.title}
                  </Text>
              </Row>
              <Row size={1} style={{ justifyContent: "center" }}>
                  <Col size={0.2}>
                      <Text>
                          <Emoji name={item.emojiName} style={{ fontSize: 35 }} />
                      </Text>
                  </Col>
                  <Col size={0.5}>
                      <FlatList
                        data={products}
                        renderItem={({ item }) => <Text>{item}</Text>}
                        keyExtractor={item => item}
                      />
                  </Col>
                  <Col size={0.2} style={{ justifyContent: " inherit" }}>
                      <Button title={"+"} buttonStyle={{
                          height: 50,
                          width: 50,
                          backgroundColor: "transparent",
                      }}
                              titleStyle={{ fontSize: 20 }} type="outline" onPress={() =>
                        navigation.navigate("AddMeal", { mealParam: item.kindOfMeal })} />
                  </Col>
              </Row>
          </Col>
      </Row>
    );
}

const RowContainerStyled = StyleSheet.create({
    container: {


    }
});
