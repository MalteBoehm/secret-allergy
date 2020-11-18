import {Grid, Row, Col} from "react-native-easy-grid";
import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, Button} from 'react-native';
import styled from 'styled-components/native';
import {moderateScale} from '../styles/globalstyles';
import Emoji from 'react-native-emoji';



export default function DashboardList({navigation}){
    const listItemsToMap = [
        {
            id: 1,
            title: 'Frühstück Hinzufügen',
            emojiName: 'coffee'
        },{
            id: 2,
            title: 'Mittagessen Hinzufügen',
            emojiName: 'pizza'
        },{
            id: 3,
            title: 'Abendessen Hinzufügen',
            emojiName: 'wine_glass'
        },{
            id: 4,
            title: 'Snack Hinzufügen',
            emojiName: 'apple'
        }];


    const [currentBreakfast, setCurrentBreakfast] = useState({
        name: "Omelet",
        ingredients: ["Egg", "Milk", "Cheddar Cheese"],
        allergens: ["Eggs","Lactose"],
        sideEffects: {hasSideEffect: true,
            whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
            sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
    });


    const [currentMeal, setCurrentMeal] = useState({
            name: "Pizza Salami",
            ingredients: ["Egg", "Milk", "Cheddar Cheese"],
            allergens: ["Gluten","Lactose", "Histamin"],
            sideEffects: {hasSideEffect: true,
                whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
                sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
        }
    );


    const [currentDinner, setCurrentDinner] = useState({
            name: "Spinat mit Fischstäbchen",
            ingredients: ["Seelachsfilet", "Panade", "Spinat", "Milch"],
            allergens: ["Gluten","Lactose"],
            sideEffects: {hasSideEffect: true,
                whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
                sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
        }
    );


    const [currentSnack, setCurrentSnack] = useState({
            name: "Apfel",
            ingredients: ["Apfel"],
            allergens: ["Fructose"],
            sideEffects: {hasSideEffect: true,
                whichSideEffect: {feelingState:3, headache: 2, stomach: 3},
                sideEffectsNotes: "Ich habe mich unwohl gefühlt und dazu Kopfschmerzen bekommen. Auch mein Margen spielte verrückt."}
        }
    );

    function findAllergens(id){
        if(id === 1){
            return currentBreakfast.allergens?.toString().replace(",", ", ")
        } if(id === 2){
            return currentMeal.allergens?.toString().replace(",", ", ")
        } if(id === 3){
            return currentDinner.allergens?.toString().replace(",", ", ")
        } if(id === 4){
            return currentSnack.allergens?.toString().replace(",", ", ")
        }
    }


        return(
                <Row size={2}>
                        <ScrollView>
                            <Grid style={GridListStyled.container}>
                                {listItemsToMap.map(item => {
                                    return(
                                        <Row key={item.id}>
                                            <MealBoxStyled>
                                                <Grid>
                                                    <Row>
                                                        <Col size={1}><Text><Emoji name={item.emojiName} style={{fontSize: 40}}/></Text></Col>
                                                        <Col size={4}><Text style={{fontWeight: "bold", fontSize: moderateScale(14, 0.3)}}>{item.title}</Text></Col>
                                                        <Col size={1}>
                                                            <Button title={'+'} onPress={() =>
                                                                navigation.navigate('AddMeal')}/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>Allergene:</Text></Col>
                                                        <Col><Text style={{fontWeight: "bold", fontSize: moderateScale(12, 0.3)}}>Nebenwirkung:</Text></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Text>
                                                                {findAllergens(item.id)}
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
                                        </Row>
                                    );
                                })}
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
