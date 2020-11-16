import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {moderateScale} from "../styles/globalstyles";

export default function DashboardHeader(){

    return(
            <Row style={dashboardStyle.container} size={1}>
                <DashboardText style={{paddingTop:20, color:'white'}}>
                    Dashboard
                </DashboardText>

                <Row style={dashboardStyle.cols}>
                    <Col>
                        <DashboardText>
                            Col1
                        </DashboardText>
                    </Col>
                    <Col>
                        <DashboardText>
                            Col2
                        </DashboardText>
                    </Col>
                    <Col>
                        <DashboardText>
                            Col3
                        </DashboardText>
                    </Col>
                </Row>
            </Row>
    )
}



const DashboardText = styled.Text`
            fontSize: ${moderateScale(16,0.4)};
            color:azure;
            align-content: center;
 `

const dashboardStyle = StyleSheet.create({
        container: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: 'blue'
        },
        cols: {
            justifyContent: 'center',
            flexDirection: 'row'
        }
    }
)
