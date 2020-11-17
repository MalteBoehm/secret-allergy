import {Grid, Row, Col} from "react-native-easy-grid";
import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import FloatingAddButton from "../navigation/FloatingAddButton";
import {moderateScale} from '../styles/globalstyles';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Emoji from '../styles/emojistyles';



const BreakfastBox = () => {

    const [currentBreakfast, setCurrentBreakfast] = useState({
        name: "Omelet",
        ingredients: ["Egg", "Milk", "Cheddar Cheese"],
        allergens: ["Eggs","Lactose"],
        sideEffects: {hasSideEffect: true,
            whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
            sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
    }
    );


    return (
            <StyledMealBox>
                <Grid>
                    <Row>
                        <Col size={1}><Emoji symbol="☕" label="coffee"/></Col>
                        <Col size={4}><Text style={{fontWeight: "bold", fontSize: moderateScale(16, 0.3)}}>FRÜHSTÜCK Hinzufügen</Text></Col>
                        <Col size={1}><StyledMealBoxAddButton title={'+'} onPress={() => alert('This once will go to a Add Meal Screen')} /></Col>
                    </Row>
                    <Row>
                        <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(14, 0.3)}}>{currentBreakfast.name}</Text></Col>
                        <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(14, 0.3)}}>Nebenwirkung:</Text></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text>
                                {
                                    currentBreakfast.allergens.toString().replace(",", ", ")
                                }
                            </Text>
                     </Col>
                        <Col>
                            <Text>
                                Scale
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </StyledMealBox>
    )
}






export default function DashboardList(){
        return(
                <Row size={2}>
                        <ScrollView>
                            <Grid style={StyledGridList.container}>
                                <Row>
                                    <BreakfastBox/>
                                </Row>
                                <Row>
                                    <Text> Mittag</Text>
                                </Row>
                                <Row>
                                    <Text> Abend</Text>
                                </Row>
                                <Row>
                                    <Text> Snack</Text>
                                </Row>
                            </Grid>
                        </ScrollView>
                </Row>

        );
}


const StyledGridList = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#8a92a35c'
    }
})


const StyledMealBox = styled.View`
    width:100%;
    min-height: ${moderateScale(125, 0.3)};
    backgroundColor: white;

    marginLeft: ${moderateScale(5, 0.2)};
    margin-right: ${moderateScale(5, 0.2)};
    paddingLeft: ${moderateScale(7, 0.2)};
    paddingRight: ${moderateScale(7, 0.2)};
    padding-top: ${moderateScale(7, 0.2)};
    padding-bottom: ${moderateScale(7, 0.2)};

    border-color: #a5a5a5;
    borderWidth: 1px;
`

const StyledMealBoxAddButton = styled.Button`
    background-color: white;

`




// todo Icons für Mahlzeiten raussuchen
// const imagesForMeals = [
//     {
//         text: "Frühstück",
//         image: sourceImage(require),
//     },
//     {
//         text: "Mittag",
//         image: sourceImage(require),
//     },
// ];
