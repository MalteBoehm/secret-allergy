import React, { useContext } from "react";
import { Grid, Row, Col } from "react-native-easy-grid";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../../styles/globalstyles";
import { ListItem } from "react-native-elements";
import { updateSideEffectsInMeal } from "../../service/LiveSearchService";
import AuthContext from "../../context/AuthContext";
import DashboardContext from "../../context/DashboardContext";
import styled from "styled-components/native";

export default function ReviewMealScreenHeader({ currentMeal, allergens, meal }) {
    const [_id] = meal;
    const { userData, token } = useContext(AuthContext);
    const userId = userData.sub;

    const { sideEffectsList, setSideEffectsList } = useContext(DashboardContext);

    const handleCreateSideEffect = () => {
        const sideEffectOfUserId = userId;
        const mealDaytime = _id.mealDaytime;
        const listOfProductsThatWereConsumed = _id.products;
        const date = _id.date;
        const sideEffectOfMealId = _id.mealId;
        const allergensList = _id.allergens;
        const sideEffectByIcdAndStrength = sideEffectsList;
        updateSideEffectsInMeal(sideEffectOfUserId, mealDaytime, listOfProductsThatWereConsumed, date, sideEffectOfMealId, allergensList, sideEffectByIcdAndStrength, token);
        setSideEffectsList([]);
    };


    const mealType = () => {
        if (currentMeal.filter(meal => meal.mealDaytime === "breakfast")) {
            return "Frühstück";
        }
        if (currentMeal.filter(meal => meal.mealDaytime === "meal")) {
            return "Mittagessen";
        }
        if (currentMeal.filter(meal => meal.mealDaytime === "dinner")) {
            return "Abendessen";
        }
        if (currentMeal.filter(meal => meal.mealDaytime === "snacks")) {
            return "Snacks";
        }
    };

    return (
      <Grid>
          <HeaderContainerStyled size={1}>
              <View>
                  <Button title={"Beschwerden Hinzufügen"} onPress={() => handleCreateSideEffect()} />
              </View>
          </HeaderContainerStyled>

          <TileContainerStyled>
              <TitleStyled>
                  Beschwerden durch das {mealType()}
              </TitleStyled>
          </TileContainerStyled>
          <Row size={3} style={ReviewMealScreenHeaderStyled.headerWithTitle}>
              <Col size={1} style={ReviewMealScreenHeaderStyled.productAllergenCols}>
                  <Text style={ReviewMealScreenHeaderStyled.productAllergenColsTitle}>Verwendete Produkte</Text>
                  <FlatListStyled
                    data={currentMeal}
                    keyExtractor={item => item.toString()}
                    contentContainerStyle={{ height: "100%", width: "100%" }}
                    renderItem={({ item }) => <View>
                        <ListItem containerStyle={{ flex: 1, padding: 4, height: 20 }}>
                            <ListItem.Content>
                                <Text style={{}}>{`\u2022`} {item}</Text>
                            </ListItem.Content>
                        </ListItem>
                    </View>}
                  />
              </Col>
              <Col size={1} style={ReviewMealScreenHeaderStyled.productAllergenCols}>
                  <Text style={ReviewMealScreenHeaderStyled.productAllergenColsTitle}>
                      Enthaltene Allergene
                  </Text>
                  <FlatListStyled
                    data={allergens}
                    keyExtractor={item => item.toString()}
                    contentContainerStyle={{ height: "100%", width: "100%" }}
                    renderItem={({ item }) => <View>
                        <ListItem containerStyle={{ flex: 1, padding: 4, height: 20 }}>
                            <ListItem.Content>
                                <Text style={{}}>{`\u2022`} {item}</Text>
                            </ListItem.Content>
                        </ListItem>
                    </View>}
                  />
              </Col>
          </Row>
      </Grid>);
}

const HeaderContainerStyled = styled(Row)`
  alignSelf: flex-end;
  justifyContent: center;
`;

const TileContainerStyled = styled(Row)`
  marginTop: 10;
`;

const TitleStyled = styled.Text`
  paddingLeft: 10;
  fontSize: 24;
`;

const FlatListStyled = styled(FlatList)`
  alignSelf: center;
  flexWrap: wrap;
  flexDirection: row;
  height: 90%;
  width: 100%;
`;


const ReviewMealScreenHeaderStyled = StyleSheet.create({
    container: {
        width: "100%"
    },
    headerWithTitle: {
        paddingTop: 5,
        textAlign: "center"
    },
    productAllergenCols: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        paddingBottom: 10
    },
    productAllergenColsTitle: {
        fontSize: moderateScale(16)
    }
});
