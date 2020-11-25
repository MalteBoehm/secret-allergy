import React from 'react';
import { StyleSheet, Text } from 'react-native'
import { Col, Row } from "react-native-easy-grid";
import {moderateScale} from "../styles/globalstyles";

export default function DashboardHeader(){

    return(

            <Row size={1} style={DashboardStyle.container}>
                <Row>
                    <Text style={{color:'white'}}>
                    Dashboard
                </Text>
                </Row>

                <Row  size={1} style={DashboardStyle.rowWithCols}>
                    <Col size={1} style={DashboardStyle.cols}>
                            <Text style={DashboardStyle.textStyle}>
                                Col1
                            </Text>
                    </Col>
                    <Col size={1} style={DashboardStyle.cols}>
                            <Text style={DashboardStyle.textStyle}>
                                Col2
                            </Text>
                    </Col>
                    <Col size={1}  style={DashboardStyle.cols}>
                            <Text style={DashboardStyle.textStyle}>
                                Col3
                            </Text>
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
            alignItems: 'center',

        },
        rowWithCols:{
            width: '100%',
            flexDirection: 'row',

        },
        cols: {
            backgroundColor: '#5073a7',
            justifyContent:'center',
            textAlign: 'center'
        },

    textStyle:{
        fontSize: moderateScale(16,0.4),
        color:'#ffffff',
        alignContent: 'center',
        textAlign: 'center'
    }
    }
)

