import React from "react";
import { Row, Col, Grid } from "react-native-easy-grid";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { moderateScale } from "../../../styles/globalstyles";
import { FontAwesome } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import DashboardBarSideEffectsRating from "./DashboardBarSideEffectsRating";
import styled from "styled-components/native";


export default function DashboardMealSideEffects({
                                                     products,
                                                     allergens,
                                                     sideEffectsArray,
                                                     navigation,
                                                     currentMeal
                                                 }) {


    return (
      <Grid>
          <Row style={{ alignSelf: "center" }}>
              <Text style={{
                  fontWeight: "bold",
                  fontSize: moderateScale(12, 0.3)
              }}>Beschwerden:</Text>
          </Row>
          <Row>
              <Col size={0.33} />
              <Col size={0.4}>
                  <Row>
                      <FlatList
                        data={sideEffectsArray}
                        keyExtractor={item => item.toString()}
                        renderItem={({ item }) => {
                            return (
                              <ListItem containerStyle={{ padding: 5, alignContent: "baseline" }}>
                                  <ListItem.Content>
                                      <StyledItem>
                                          <Row>
                                              <ColsOfItemsStyled
                                                size={0.6}><Text>{item.sideEffect}</Text></ColsOfItemsStyled>
                                              <ColsOfItemsStyled size={0.4}><StyledItemWithRating
                                                rating={item.ratingOfSideEffects} /></ColsOfItemsStyled></Row>
                                      </StyledItem>

                                  </ListItem.Content>
                              </ListItem>);

                        }}
                        horizontal={true} />
                  </Row>
              </Col>

              <Col size={0.33} style={{ alignSelf: "right" }}>
                  <View style={{ justifyContent: "flex-end" }}>
                      <FontAwesome.Button iconRight
                                          style={RowContainerStyled.buttonToDetail}
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

const StyledItem = styled(Grid)`
  display: block;
  align-self: center;
`;

const ColsOfItemsStyled = styled(Col)`
  align-self: center;
`;

const StyledItemWithRating = styled(DashboardBarSideEffectsRating)`
  align-self: center;
`;

const RowContainerStyled = StyleSheet.create({
    container: {
        minHeight: 50,
        maxHeight: moderateScale(250)

    }, buttonToDetail: {
        backgroundColor: "#ffffff",
        color: "#ffffff",
        textAlign: "right",
        alignSelf: "flex-end"
    }
});
