import React from "react";
import { Row, Col } from "react-native-easy-grid";
import { FlatList, Text } from "react-native";
import { moderateScale } from "../../../styles/globalstyles";
import styled from "styled-components/native";

export default function DashboardMealAllergens({ allergens }) {

    return (
      <Row style={{ paddingTop: 15 }}>
          <Col>
              <Row style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: moderateScale(12, 0.3),
                    }}>Allergene:
                  </Text>
              </Row>
              <Row>
                  <FlatList
                    data={allergens}
                    keyExtractor={item => item}
                    horizontal={true}
                    renderItem={({ item }) => <Text>{item}</Text>}
                  />
              </Row>
          </Col>
      </Row>
    );


}

const ImageStyled = styled.Image`
  width: ${moderateScale(45, 0.2)};
  height: ${moderateScale(45, 0.2)};
  align-self: flex-end;
`;
