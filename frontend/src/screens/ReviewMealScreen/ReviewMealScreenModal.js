import React, { useState } from "react";
import { Grid, Row, Col } from "react-native-easy-grid";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button, CheckBox, Input, ListItem } from "react-native-elements";
import Slider from "@react-native-community/slider";

export default function ReviewMealScreenModal() {
    const [isSelected, setSelection] = useState(false);
    const toggleChecked = () => setSelection(value => !value);

    const [sideEffectsList, setSideEffectsList] = useState([]);
    const [singleSideEffect, setSingleSideEffect] = useState("");

    const hasSideffects = () => {
        if (isSelected) {
            return 1;
        } else {
            return 0;
        }
    };
    const [ratingOfSideEffect, setRatingOfSideEffect] = useState(0);

    function handleRemove(id) {
        const newList = sideEffectsList.filter((item) => item.id !== id);
        setSideEffectsList(newList);
    }
    const handleCreateSideEffectInList = ()=> {
        if (sideEffectsList !== sideEffectsList[sideEffectsList.length - 1] && ratingOfSideEffect !== 0) {
            const singleSideEffectWithRating = {
                sideEffect: singleSideEffect,
                rating: ratingOfSideEffect
            };
            setSideEffectsList(sideEffectsList => [...sideEffectsList, singleSideEffectWithRating]);
            setSingleSideEffect("");
            setRatingOfSideEffect(0);
        }
    }

    return (
      <Grid>
          <Row size={1}>
              <View style={styles.container}>
                  <View style={styles.checkboxContainer}>
                      <CheckBox
                        center
                        title="Hattest du Beschwerden?"
                        checked={isSelected}
                        onPress={toggleChecked}
                      />

                      <Text style={styles.label}>Gab es Beschwerden durch die Mahlzeit?</Text>
                  </View>
              </View>
          </Row>
          <Row size={4}>
              <Col size={3}>

                  {!isSelected ?
                    <Text>232 Fall du keine Beschwerden hattest klicke oben rechts auf "Beschwerden hinzufügen"</Text> :
                    <View>
                        <Input
                      placeholder="Eine Beschwerde hinzufügen"
                      onChangeText={text => setSingleSideEffect(text)}
                      maxLength={40}
                    />
                        <Slider
                          style={{ width: "50%", height: 40 }}
                          minimumValue={0}
                          maximumValue={10}
                          step={0.5}
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
                    keyExtractor={item => item.toString()}
                    data={sideEffectsList}
                    contentContainerStyle={{ height: "100%", width: "100%" }}
                    renderItem={({ item }) => {
                        return (
                          <View>
                              <ListItem containerStyle={{ flex: 1, padding: 4, height: 80 }}>
                                  <ListItem.Content style={{ alignSelf: "center" }}>
                                      <Text style={{}}>{`\u2022`} {item.sideEffect} als Beschwerde, auf einer Skala von 1 bis 10
                                          bei: {item.rating}</Text>
                                  </ListItem.Content>
                              </ListItem>
                          </View>);
                    }} />
              </Col>
              <Col size={1}>
                  {!isSelected ?
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
        alignItems: "center",
        justifyContent: "center"


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
