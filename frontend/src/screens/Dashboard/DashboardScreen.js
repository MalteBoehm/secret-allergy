import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Col, Row, Grid } from "react-native-easy-grid";
import {moderateScale} from '../../styles/globalstyles';
import { LinearGradient } from 'expo-linear-gradient';


export default function DashboardScreen(){
    return (
            <Grid>
                <Row size={1} style={dashboardStyle.container} >
                    <DashboardText style={{paddingTop:20, color:'white'}}>
                        Dashboard
                    </DashboardText>




                    <Row>
                        <Col size={1}>
                            <DashboardText>
                                Col1
                            </DashboardText>
                        </Col>
                        <Col size={1}>
                            <DashboardText>
                                Col2
                            </DashboardText>
                        </Col>
                        <Col size={1}>
                            <DashboardText>
                                Col3
                            </DashboardText>
                        </Col>
                    </Row>
                </Row>
                <Row size={2}>
                    <Text>
                        ABC
                    </Text>
                </Row>
            </Grid>
    );
}



const DashboardText = styled.Text`
    fontSize: ${moderateScale(22,0.4)};
    color:azure;
    align-content: center;
 `

const dashboardStyle = StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: 'blue'
        }
    }
)

