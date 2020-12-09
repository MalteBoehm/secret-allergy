import React from "react";
import { StyleSheet } from "react-native";
import { Row, Col, Grid } from "react-native-easy-grid";
import { moderateScale } from "../../../../styles/globalstyles";

export default function GreenBarRating() {

    return (
      <Grid style={RatingStyled.container}>
          <Row>
              <Col size={1} style={RatingStyled.greenBar}>

              </Col>
              <Col size={1} style={RatingStyled.lightGreenBar}>

              </Col>
              <Col size={1} style={RatingStyled.yellowBar}>

              </Col>
              <Col size={1} style={RatingStyled.orangeBar}>

              </Col>
              <Col size={1} style={RatingStyled.redBar}>

              </Col>
              <Col size={1} style={RatingStyled.container}>

              </Col>
          </Row>
      </Grid>
    );

}

const RatingStyled = StyleSheet.create({
    container: {
        height: moderateScale(30),
        width: moderateScale(60),
        display: "flex",
        flexDirection: "column"
    },
    greenBar: {
        backgroundColor: "#4fef0c",
        height: moderateScale(5),
        alignSelf: "flex-end"
    },
    lightGreenBar: {
        backgroundColor: "#93e970",
        height: moderateScale(0),
        alignSelf: "flex-end"
    },
    yellowBar: {
        backgroundColor: "#efe40c",
        height: moderateScale(0),
        alignSelf: "flex-end"
    },
    orangeBar: {
        backgroundColor: "#ef890c",
        height: moderateScale(0),
        alignSelf: "flex-end"
    },
    redBar: {
        backgroundColor: "#ef2e0c",
        height: moderateScale(0),
        alignSelf: "flex-end"
    }
});
