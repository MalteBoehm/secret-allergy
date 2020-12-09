import React, { useContext, useState } from "react";
import { Grid, Row, Col } from "react-native-easy-grid";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button, CheckBox, Input, ListItem } from "react-native-elements";
import Slider from "@react-native-community/slider";
import DashboardContext from "../../context/DashboardContext";

export default function ReviewMealScreenModal() {

    const { hasSideEffectIsSelected, setHasSideEffectIsSelected } = useContext(DashboardContext);
    const toggleChecked = () => setHasSideEffectIsSelected(value => !value);

    const { sideEffectsList, setSideEffectsList } = useContext(DashboardContext);
    const [singleSideEffect, setSingleSideEffect] = useState("");
    const [ratingOfSideEffect, setRatingOfSideEffect] = useState(0);


    const handleCreateSideEffectInList = () => {
        if (sideEffectsList !== sideEffectsList[sideEffectsList.length - 1] && ratingOfSideEffect !== 0 && singleSideEffect.length > 2) {
            const singleSideEffectWithRating = {
                sideEffect: singleSideEffect,
                ratingOfSideEffects: ratingOfSideEffect
            };
            setSideEffectsList(sideEffectsList => [...sideEffectsList, singleSideEffectWithRating]);
            setSingleSideEffect("");
            setRatingOfSideEffect(0);
        }
    };

    return (
      <Grid>
          <Row size={0.3} style={styles.checkboxHeading}>
              <Text style={styles.checkboxHeading}>Gab es Beschwerden durch die Mahlzeit?</Text>
          </Row>
          <Row size={1}>
              <View style={styles.container}>
                  <View style={styles.checkboxContainer}>
                      <CheckBox
                        center
                        title="Hattest du Beschwerden?"
                        checked={hasSideEffectIsSelected}
                        onPress={toggleChecked}
                      />
                  </View>
              </View>
          </Row>
          <Row size={4}>
              <Col size={3}>
                  {!hasSideEffectIsSelected ?
                    <Text>Falls du keine Beschwerden hattest klicke oben rechts auf "Beschwerden hinzufügen" damit du
                        keine lücken im Tagebuch hast!</Text> :
                    <View>
                        <Input
                          placeholder="Eine Beschwerde hinzufügen"
                          onChangeText={text => setSingleSideEffect(text)}
                          maxLength={40}
                        />
                        <Slider
                          style={{ width: "90%", height: 40 }}
                          minimumValue={0}
                          maximumValue={10}
                          step={1}
                          value={ratingOfSideEffect}
                          minimumTrackTintColor="#ba0404"
                          maximumTrackTintColor="#04ba04"
                          onValueChange={rating => setRatingOfSideEffect(rating)}
                        />
                        <Text>{ratingOfSideEffect}</Text>
                    </View>

                  }
                  <FlatList
                    style={{
                        alignSelf: "center",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        height: "90%",
                        width: "100%"
                    }}
                    keyExtractor={item => item.sideEffect.toString()}
                    data={sideEffectsList}
                    contentContainerStyle={{ height: "100%", width: "100%" }}
                    renderItem={({ item }) => {
                        return (
                          <View>
                              <ListItem containerStyle={{ flex: 1, padding: 4, height: 80 }}>
                                  <ListItem.Content style={{ alignSelf: "center" }}>
                                      <Text style={{}}>{`\u2022`} {item.sideEffect} als Beschwerde, auf einer Skala von
                                          1 bis 10
                                          bei: {item.ratingOfSideEffects}</Text>
                                  </ListItem.Content>
                              </ListItem>
                          </View>);
                    }} />
              </Col>
              <Col size={1}>
                  {!hasSideEffectIsSelected ?
                    <Text> </Text>
                    :
                    <View>
                        <Button title={"Zur Liste hinzufügen"} onPress={handleCreateSideEffectInList} />
                    </View>}
              </Col>
          </Row>
      </Grid>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    checkboxHeading: {
        alignSelf: "center",
        fontWeight: "bold"
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20
    },
    checkbox: {
        alignSelf: "center"
    },
    label: {
        margin: 8
    }
});
