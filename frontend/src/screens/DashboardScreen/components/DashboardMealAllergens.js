import React, { useContext } from "react";
import { Row, Col, Grid } from "react-native-easy-grid";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../../../styles/globalstyles";
import styled from "styled-components/native";
import { ListItem } from "react-native-elements";

export default function DashboardMealAllergens({ hasAllergens, allergens }) {
    const Separator = () => <View style={AllergensStyled.separator} />;

    return (
      <Grid style={{ justifyContent: "center" }}>
          <Row>
              <Col>
                  <Row style={{ justifyContent: "center" }}>
                      <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: moderateScale(12, 0.3)
                        }}>Allergene:
                      </Text>
                  </Row>
                  <Row style={{ alignSelf: "center" }}>

                      <FlatList contentContainerStyle={{ justifyContent: "spaceAround" }}
                                data={allergens}
                                keyExtractor={item => item.toString()}
                                renderItem={({ item }) =>
                                  <ListItem containerStyle={{ padding: 5 }}>
                                      <ListItem.Content>
                                          <Text>{`\u2022`} {item}</Text>
                                      </ListItem.Content>
                                  </ListItem>}
                                horizontal={true}
                      />

                  </Row>
              </Col>
          </Row>
          <Separator />
      </Grid>
    );
}

const AllergensStyled = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});

