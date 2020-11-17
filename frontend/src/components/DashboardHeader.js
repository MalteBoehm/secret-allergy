import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {moderateScale, scale, verticalScale} from "../styles/globalstyles";

export default function DashboardHeader(){

    return(

            <Row size={1} style={DashboardStyle.container}>
                <Row>
                    <Text style={{paddingTop:20, color:'white'}}>
                    Dashboard
                </Text>
                </Row>

                <Row style={DashboardStyle.cols} >
                    <Col size={1}>
                        <View>
                            <Text style={DashboardStyle.textStyle}>
                                Col1
                            </Text>
                        </View>
                    </Col>
                    <Col size={1}>
                        <View>
                            <Text style={DashboardStyle.textStyle}>
                                Col2
                            </Text>
                        </View>
                    </Col>
                    <Col size={1}>
                        <View>
                            <Text style={DashboardStyle.textStyle}>
                                Col3
                            </Text>
                        </View>
                    </Col>
                </Row>
            </Row>

    )
}




const DashboardStyle = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#2179ff',

        },
        cols: {

            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#5073a7',
            justifyContent:'space-evenly',
        },
    textStyle:{
        fontSize: moderateScale(16,0.4),
        color:'#ffffff',
        alignContent: 'center',
    }
    }
)

