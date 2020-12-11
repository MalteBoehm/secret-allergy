import React from "react";
import { Grid, Row } from "react-native-easy-grid";
import styled from 'styled-components/native';
import ReviewMealScreenHeader from "./ReviewMealScreen/ReviewMealScreenHeader";
import ReviewMealScreenModal from "./ReviewMealScreen/ReviewMealScreenModal";
import {moderateScale} from "../styles/globalstyles";
import { FlatList } from "react-native";


export default function ReviewMealScreen({ navigation, route }) {
    const { allergens, meal, currentProducts} = route.params;
    return (
      <GridListStyled>
          <Row size={2}>
              <ReviewMealScreenHeader navigation={navigation}  currentProducts={currentProducts} allergens={allergens}
                                      meal={meal} /></Row>
          <Row size={3}>
              <ReviewMealScreenModal meal={meal} currentProducts={currentProducts} allergens={allergens} />
          </Row>
      </GridListStyled>
    );
}

const GridListStyled = styled(Grid)`
  display: flex;
  flexDirection: column;
  backgroundColor: #8a92a35c;
  justifyContent: spaceBetween;
  marginLeft: ${moderateScale(5, 0.2)};
  marginRight: ${moderateScale(5, 0.2)};
  paddingTop: ${moderateScale(1, 0.2)};
  paddingBottom: ${moderateScale(7, 0.2)};
`;
