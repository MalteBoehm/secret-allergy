import React from "react";
import { StyleSheet } from "react-native";
import { Row, Col, Grid } from "react-native-easy-grid";
import { moderateScale } from "../../../../styles/globalstyles";

export default function YellowBarRating() {

    return (
      <Grid style={RatingStyled.container}>
          <Row>
              <Col size={1} style={RatingStyled.greenBar} />
              <Col size={1} style={RatingStyled.lightGreenBar}/>
              <Col size={1} style={RatingStyled.yellowBar}/>
              <Col size={1} style={RatingStyled.orangeBar}/>
              <Col size={1} style={RatingStyled.redBar}/>
              <Col size={1} style={RatingStyled.container}/>
          </Row>
      </Grid>
    );

}

const RatingStyled = StyleSheet.create({
    container: {
        height: moderateScale(20),
        width: moderateScale(50),
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
        height: moderateScale(10),
        alignSelf: "flex-end"
    },
    yellowBar: {
        backgroundColor: "#efe40c",
        height: moderateScale(15),
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
