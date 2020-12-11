import React from "react";
import { Row, Col, Grid } from "react-native-easy-grid";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../../../styles/globalstyles";
import styled from "styled-components/native";
import { ListItem } from "react-native-elements";

export default function DashboardMealAllergens({ allergens }) {
    const Separator = () => <View style={AllergensStyled.separator} />;

    return (
      <Grid style={{ justifyContent: "center" }}>
          <Row>
              <Col>
                  <Row style={{ justifyContent: "center" }}>
                      <TitleAllergensStyled>Allergene:</TitleAllergensStyled></Row>
                  <Row style={{ alignSelf: "center" }}>
                      <FlatList contentContainerStyle={{ justifyContent: "spaceAround" }}
                                data={allergens}
                                ListItemStyled={0}
                                numColumns={3}
                                keyExtractor={item => item.toString()}
                                renderItem={({ item }) =>
                                  <ListItem containerStyle={{ padding: 5 }}>
                                      <ListItem.Content>
                                          <Text>{`\u2022`} {item}</Text>
                                      </ListItem.Content>
                                  </ListItem>}
                                horizontal={false} /></Row>
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

const TitleAllergensStyled = styled.Text`
  fontWeight: bold;
  font-family: "Lato";
  fontSize: ${moderateScale(14, 0.3)};
`;

