import React from "react";
import { Grid, Row, Col } from "react-native-easy-grid";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../../styles/globalstyles";
import { ListItem } from "react-native-elements";


export default function ReviewMealScreenHeader({ currentMeal, allergens }) {

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
        if (currentMeal.filter(meal => meal.mealDaytime === "snack")) {
            return "Snacks";
        }
    };

    return (
      <Grid>
          <Row size={1} style={ReviewMealScreenHeaderStyled.headerWithButton}>
              <View style={ReviewMealScreenHeaderStyled.createSideEffectButton}>
                  <Button title={"Beschwerden Hinzufügen"} onPress={() => alert("1")}  />
              </View>

          </Row>
          <Row style={ReviewMealScreenHeaderStyled.titleContainer}>
              <Text style={ReviewMealScreenHeaderStyled.title}>
                  Beschwerden durch das {mealType()}
              </Text>
          </Row>
          <Row size={3} style={ReviewMealScreenHeaderStyled.headerWithTitle}>
              <Col size={1} style={ReviewMealScreenHeaderStyled.productAllergenCols}>
                  <Text style={ReviewMealScreenHeaderStyled.productAllergenColsTitle}>Verwendete Produkte</Text>
                  <FlatList
                    style={{
                        alignSelf: "center",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        height: "90%",
                        width: "100%"
                    }}
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
                  <FlatList
                    style={{
                        alignSelf: "center",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        height: "90%",
                        width: "100%"
                    }}
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
      </Grid>

    );
}

const ReviewMealScreenHeaderStyled = StyleSheet.create({
    container: {
        width: "100%"
    },
    createSideEffectButton: {
        justifyContent: "center",
    },
    titleContainer: {
        marginTop: 10
    }, title: {
        paddingLeft: 10,
        fontSize: 24
    },
    headerWithButton: {
        alignSelf: "flex-end"
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
