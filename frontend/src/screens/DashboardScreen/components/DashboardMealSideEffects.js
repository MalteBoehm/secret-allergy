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
                                                     currentMeal,
                                                 }) {


    return (
      <Grid>
          <Row style={{ alignSelf: "center" }}>
              <TitleSideEffectsStyled>Beschwerden:</TitleSideEffectsStyled>
          </Row>
          <Row>
              <Col size={1} />
              <Col size={6} style={{ alignItems: "center" }}>
                  <Row>
                      <FlatListStyled
                        data={sideEffectsArray}
                        keyExtractor={item => item.toString()}
                        renderItem={({ item }) => {
                            return (
                              <ListItemStyled containerStyle={{ padding: 5, alignContent: "baseline", width: 500 }}>
                                  <ListItem.Content>
                                      <StyledItem>
                                          <Row size={1}>
                                              <ColsOfItemsStyled
                                              >
                                                  <Text style={{
                                                      alignSelf: "center",
                                                      overflowWrap: "normal",
                                                  }}>{item.sideEffect}</Text>
                                              </ColsOfItemsStyled>
                                              <ColsOfItemsStyled><StyledItemWithRating
                                                rating={item.ratingOfSideEffects} /></ColsOfItemsStyled></Row>
                                      </StyledItem>

                                  </ListItem.Content>
                              </ListItemStyled>);

                        }}
                        horizontal={true} />
                  </Row>
              </Col>

              <Col size={1} style={{ alignSelf: "right" }}>
                  <View style={{ justifyContent: "flex-end" }}>
                      <FontAwesome.Button iconRight
                                          style={RowContainerStyled.buttonToDetail}
                                          name="arrow-right"
                                          backgroundColor="white"
                                          onPress={() =>
                                            navigation.navigate("ReviewMeal", {
                                                currentMeal: products,
                                                allergens: allergens,
                                                meal: currentMeal,
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

const TitleSideEffectsStyled = styled.Text`
  fontWeight: bold;
  font-family: "Lato";
  fontSize: ${moderateScale(14, 0.3)};
`;

const ColsOfItemsStyled = styled(Col)`
  align-self: center;
  align-items: flex-end;
`;
const ListItemStyled = styled(ListItem)`
  width: fit-content;
  margin-top: ${moderateScale(2)};
`;
const StyledItemWithRating = styled(DashboardBarSideEffectsRating)`
  align-self: center;
  width: fit-content;
  margin-top: ${moderateScale(2)};
`;

const FlatListStyled = styled(FlatList)`
  justify-self: center;
`;

const RowContainerStyled = StyleSheet.create({
    container: {
        minHeight: 40,
        maxHeight: moderateScale(250),

    }, buttonToDetail: {
        backgroundColor: "#ffffff",
        color: "#ffffff",
        textAlign: "right",
        alignSelf: "flex-end",
    },
});
