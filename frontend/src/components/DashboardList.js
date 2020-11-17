import {Grid, Row, Col} from "react-native-easy-grid";
import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {moderateScale} from '../styles/globalstyles';
import Emoji from 'react-native-emoji';


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
            <MealBoxStyled>
                <Grid>
                    <Row>
                        <Col size={1}><Text><Emoji name="coffee" style={{fontSize: 40}} /></Text></Col>
                        <Col size={4}><Text style={{fontWeight: "bold", fontSize: moderateScale(14, 0.3)}}>Frühstück Hinzufügen</Text></Col>
                        <Col size={1}><MealBoxButtonStyled title={'+'} onPress={ () => alert('This once will go to a Add Meal Screen')} /></Col>
                    </Row>
                    <Row>
                        <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>{currentBreakfast.name}</Text></Col>
                        <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>Nebenwirkung:</Text></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text>
                                {currentBreakfast.allergens?.toString().replace(",", ", ")}
                            </Text>
                     </Col>
                        <Col>
                            <Text>
                                Scale
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </MealBoxStyled>
    )
}

const MealBox = () => {

    const [currentMeal, setCurrentMeal] = useState({
            name: "Pizza Salami",
            ingredients: ["Egg", "Milk", "Cheddar Cheese"],
            allergens: ["Gluten","Lactose", "Histamin"],
            sideEffects: {hasSideEffect: true,
                whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
                sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
        }
    );
    return (
        <MealBoxStyled>
            <Grid>
                <Row>
                    <Col size={1}><Text><Emoji name="pizza" style={{fontSize: 40}} /></Text></Col>
                    <Col size={4}><Text style={{fontWeight: "bold", fontSize: moderateScale(14, 0.3)}}>Mittagessen Hinzufügen</Text></Col>
                    <Col size={1}><MealBoxButtonStyled title={'+'} onPress={() => alert('This once will go to a Add Meal Screen')} /></Col>
                </Row>
                <Row>
                    <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>{currentMeal.name}</Text></Col>
                    <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>Nebenwirkung:</Text></Col>
                </Row>
                <Row>
                    <Col>
                        <Text>
                            {currentMeal.allergens?.toString().replace(",", ", ")}
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            Scale
                        </Text>
                    </Col>
                </Row>
            </Grid>
        </MealBoxStyled>
    )
}

const DinnerBox = () => {

    const [currentDinner, setCurrentDinner] = useState({
            name: "Spinat mit Fischstäbchen",
            ingredients: ["Seelachsfilet", "Panade", "Spinat", "Milch"],
            allergens: ["Gluten","Lactose"],
            sideEffects: {hasSideEffect: true,
                whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
                sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
        }
    );
    return (
        <MealBoxStyled>
            <Grid>
                <Row>
                    <Col size={1}><Text><Emoji name=":wine_glass:" style={{fontSize: 40}} /></Text></Col>
                    <Col size={4}><Text style={{fontWeight: "bold", fontSize: moderateScale(14, 0.3)}}>Abendessen Hinzufügen</Text></Col>
                    <Col size={1}><MealBoxButtonStyled title={'+'} onPress={() => alert('This once will go to a Add Meal Screen')} /></Col>
                </Row>
                <Row>
                    <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>{currentDinner.name}</Text></Col>
                    <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>Nebenwirkung:</Text></Col>
                </Row>
                <Row>
                    <Col>
                        <Text>
                            {currentDinner.allergens?.toString().replace(",", ", ")}
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            Scale
                        </Text>
                    </Col>
                </Row>
            </Grid>
        </MealBoxStyled>
    )
}

const SnackBox = () => {

    const [currentSnack, setCurrentSnack] = useState({
            name: "Apfel",
            ingredients: ["Apfel"],
            allergens: ["Fructose"],
            sideEffects: {hasSideEffect: true,
                whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
                sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
        }
    );
    return (
        <MealBoxStyled>
            <Grid>
                <Row>
                    <Col size={1}><Text><Emoji name="apple" style={{fontSize: 40}} /></Text></Col>
                    <Col size={4}><Text style={{fontWeight: "bold", fontSize: moderateScale(14, 0.3)}}>Snack hinzufügen</Text></Col>
                    <Col size={1}><MealBoxButtonStyled title={'+'} onPress={() => alert('This once will go to a Add Meal Screen')} /></Col>
                </Row>
                <Row>
                    <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3), wordBreak: "break-all"}}>{currentSnack.name}</Text></Col>
                    <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>Nebenwirkung:</Text></Col>
                </Row>
                <Row>
                    <Col>
                        <Text>
                            {currentSnack.allergens?.toString().replace(",", ", ")}
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            Scale
                        </Text>
                    </Col>
                </Row>
            </Grid>
        </MealBoxStyled>
    )
}



export default function DashboardList(){
        return(
                <Row size={2}>
                        <ScrollView>
                            <Grid style={GridListStyled.container}>
                                <Row>
                                    <BreakfastBox/>
                                </Row>
                                <Row>
                                    <MealBox/>
                                </Row>
                                <Row>
                                    <DinnerBox/>
                                </Row>
                                <Row>
                                    <SnackBox/>
                                </Row>
                            </Grid>
                        </ScrollView>
                </Row>

        );
}


const GridListStyled = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#8a92a35c'
    }
})


const MealBoxStyled = styled.View`
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

const MealBoxButtonStyled = styled.Button`
    background-color: white;

`


// todo Farbscale




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
