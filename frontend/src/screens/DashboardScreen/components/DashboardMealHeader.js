import React from "react";
import { Row, Col, Grid } from "react-native-easy-grid";
import styled from "styled-components/native";
import { FlatList, Text, StyleSheet, View } from "react-native";
import Emoji from "react-native-emoji";
import { moderateScale } from "../../../styles/globalstyles";
import { ListItem } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

export default function DashboardMealHeader({ item, products, navigation, currentMeal}) {
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
              <MealTitleStyled>
                {item.title}</MealTitleStyled>
              <FlatList
                style={{ alignSelf: "center",  flexWrap: "wrap", flexDirection: "row" }}
                data={currentMeal.map(meal => meal.products?.map(product => product)).flat()}
                keyExtractor={item => item._id}
                renderItem={({ item }) =>

                  <ListItemStyled key={item._id} containerStyle={{
                    flex: 1,
                    padding: 12,
                    borderRadius: 100,
                    backgroundColor: "#eaebea",
                    maxHeight: 10,
                  }}>
                    <ListItem.Content style={{ alignSelf: "center" }}>
                      <Text style={{}}>{item.product_name}</Text>
                    </ListItem.Content>
                  </ListItemStyled>
                }
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
const MealTitleStyled = styled.Text`
  font-weight: bold;
  font-size: ${moderateScale(18, 0.3)};
  align-self: center;
  padding-bottom: ${moderateScale(10, 0.3)};
  padding-top: ${moderateScale(10, 0.3)};
`;

const ListItemStyled = styled(ListItem)`
  width: fit-content;
  margin-top: ${moderateScale(2)};
`;

const RowContainerStyled = StyleSheet.create({
  container: {
    minHeight: 50,
    maxHeight: moderateScale(250),
  },
  mealFlatCol: {}, buttonToDetail: {
    backgroundColor: "#22d29b",
    color: "#ffffff",
    textAlign: "center",
    alignSelf: "flex-end",
    paddingLeft: moderateScale(15),
  },
  colOfDetailButton: {
    width: 50,
    paddingTop: moderateScale(20, 0.2),
    paddingRight: moderateScale(10, 0.2),

  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


