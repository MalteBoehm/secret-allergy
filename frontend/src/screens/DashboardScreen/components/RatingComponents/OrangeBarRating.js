import React from "react";
import { StyleSheet } from "react-native";
import { Row, Col, Grid } from "react-native-easy-grid";
import { moderateScale } from "../../../../styles/globalstyles";

export default function OrangeBarRating() {

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
        height: moderateScale(30),
        width: moderateScale(50),
        display: "flex",
        flexDirection: "column"
    },
    greenBar: {
        backgroundColor: "#4fef0c",
        borderRightWidth:1,
        borderRightColor: '#9d9d9a',
        height: moderateScale(5),
        alignSelf: "flex-end"
    },
    lightGreenBar: {
        backgroundColor: "#93e970",
        borderRightWidth:1,
        borderRightColor: '#9d9d9a',
        height: moderateScale(10),
        alignSelf: "flex-end"
    },
    yellowBar: {
        backgroundColor: "#efe40c",
        borderRightWidth:1,
        borderRightColor: '#9d9d9a',
        height: moderateScale(15),
        alignSelf: "flex-end"
    },
    orangeBar: {
        backgroundColor: "#ef890c",
        borderRightWidth:1,
        borderRightColor: '#9d9d9a',
        height: moderateScale(20),
        alignSelf: "flex-end"
    },
    redBar: {
        backgroundColor: "#C3C3C3",
        height: moderateScale(25),
        alignSelf: "flex-end"
    }
});
