import React, { useContext } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import { moderateScale } from "../../styles/globalstyles";
import { LinearGradient } from "expo-linear-gradient";
import DashboardContext from "../../context/DashboardContext";
import styled from "styled-components/native";


export default function DashboardHeader() {

    const { getMealsTotal, getAllergensTotal, getTotalSideEffects } = useContext(DashboardContext);

    return (
      <Row size={0.5}>
          <GradientHeaderStyled
            colors={["rgb(0,121,91)", "transparent"]}>
              <Row size={0.4}>
                  <TileStyle>Secret Allergy</TileStyle>
                  <Image  style={{marginTop:7, marginLeft: 8, width: 35, height: 35}} source={require('../../../assets/favicon.png')} />
              </Row>
              <StatsRowStyled size={0.6}>
                  <StatsColsStyled size={1}>
                      <StatsNumbersStyled>
                          {getAllergensTotal()}
                      </StatsNumbersStyled>
                      <StatsTextStyled>
                          Allergene
                      </StatsTextStyled>
                  </StatsColsStyled>
                  <StatsColsStyled size={1}>
                      <StatsNumbersStyled>
                          {getMealsTotal()}
                      </StatsNumbersStyled>
                      <StatsTextStyled>
                          Mahlzeiten
                      </StatsTextStyled>
                  </StatsColsStyled>
                  <StatsColsStyled size={1}>
                      <StatsNumbersStyled>
                          {getTotalSideEffects()}
                      </StatsNumbersStyled>
                      <StatsTextStyled>
                          Beschwerden
                      </StatsTextStyled>
                  </StatsColsStyled>
              </StatsRowStyled>
          </GradientHeaderStyled>
      </Row>
    );
}

const GradientHeaderStyled = styled(LinearGradient)`
  display: flex;
  flexDirection: column;
  backgroundColor: #2bbf9c;
  alignItems: center;
  justifyContent: center;
  height: 100%;
  width: 100%;
`;

const TileStyle = styled.Text`
  textAlign: center;
  font-family: "Monotype Corsiva , fantasy";
  fontSize: 28;
  font-weight: 400;
  font-style:  normal;
  justifyContent: center;
  color: white;
  paddingTop: ${moderateScale(18, 0.5)};
`;

const StatsRowStyled = styled(Row)`
  width: 100%;
  flexDirection: row;
`;

const StatsColsStyled = styled(Col)`
  justifyContent: center;
  textAlign: center;
`;

const StatsTextStyled = styled.Text`
  fontSize: ${moderateScale(15, 0.4)};
  color: #ffffff;
  alignContent: center;
  textAlign: center;
`;

const StatsNumbersStyled = styled.Text`
  fontSize: ${moderateScale(20, 0.4)};
  color: #ffffff;
  alignContent: center;
  textAlign: center;
`;
