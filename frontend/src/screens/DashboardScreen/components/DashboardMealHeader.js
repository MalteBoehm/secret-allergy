import React from "react";
import { Row, Col, Grid } from "react-native-easy-grid";
import { FlatList, Text, StyleSheet, View } from "react-native";
import Emoji from "react-native-emoji";
import { moderateScale } from "../../../styles/globalstyles";
import { Button, ListItem, Icon } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

export default function DashboardMealHeader({ item, products, navigation }) {
    const Separator = () => <View style={RowContainerStyled.separator} />;

    return (
      <Grid>
          <Row style={RowContainerStyled.container}>
              <Col>
                  <Row size={1}>
                      <Col size={0.2}>
                          <Text style={{ fontSize: 35, alignSelf: "right", textAlign: "right", paddingTop: 10 }}>
                              <Emoji name={item.emojiName} style={{ fontSize: 35 }} />
                          </Text>
                      </Col>
                      <Col size={0.6}>
                          <Text style={{
                              fontWeight: "bold",
                              fontSize: moderateScale(16, 0.3),
                              alignSelf: "center",
                              paddingBottom: 10,
                              paddingTop: 10

                          }}> {item.title}
                          </Text>

                          <FlatList
                            style={{ alignSelf: "center", flexWrap: "wrap", flexDirection: "row" }}
                            data={products}
                            keyExtractor={item => item.toString()}
                            renderItem={({ item }) => <View>
                                <ListItem containerStyle={{ flex: 1, padding: 4, height: 20 }}>
                                    <ListItem.Content style={{ alignSelf: "center" }}>
                                        <Text style={{}}>{`\u2022`} {item}</Text>
                                    </ListItem.Content>
                                </ListItem>
                            </View>}
                          />
                      </Col>
                      <Col size={0.2} style={RowContainerStyled.colOfDetailButton}>
                          <View style={{ justifyContent: "flex-end" }}>
                              <FontAwesome.Button iconRight style={RowContainerStyled.buttonToDetail}
                                                  name="info"
                                                  backgroundColor="white"
                                                  onPress={() =>
                                                    navigation.navigate("AddMeal", { mealParam: item.kindOfMeal })}>
                              </FontAwesome.Button>
                          </View>
                      </Col>
                  </Row>
              </Col>
          </Row>
          <Separator />
      </Grid>
    );
}

const RowContainerStyled = StyleSheet.create({
    container: {
        minHeight: 50,
        maxHeight: moderateScale(250)

    },
    mealFlatCol: {}, buttonToDetail: {
        backgroundColor: "#22d29b",
        color: "#ffffff",
        textAlign: "center",
        alignSelf: "flex-end",
        paddingLeft: moderateScale(15)
    },
    colOfDetailButton: {
        width: 50,
        paddingTop: moderateScale(20, 0.2),
        paddingRight: moderateScale(10, 0.2)

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});


