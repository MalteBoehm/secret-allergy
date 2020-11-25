import React, {useContext, useEffect, useState} from 'react';
import {Grid, Row, Col} from "react-native-easy-grid";
import { ListItem, SearchBar,Avatar } from 'react-native-elements';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';
import LiveSearchContext from "../context/LiveSearchContext";
import AddMealSuche from "./AddMealSuche";




export default function AddMealList() {

    const {liveSearchData} = useContext(LiveSearchContext);
    const keyExtractor = (item, index) => index.toString()

    return (
        <Row size={7}>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={liveSearchData}
                    renderItem={renderItem}
                    ItemSeparatorComponent={renderSeparator}
                    ListHeaderComponent={AddMealSuche}
                />

        </Row>
    )
}


const renderItem = ({ item }) => (
    <ListItem bottomDivider>
        <Avatar source={{uri: item.image_front_thumb_url}} />
        <ListItem.Content>
            <ListItem.Title>{item.product_name}</ListItem.Title>
            <ListItem.Subtitle>{item.brands}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem>
)

const renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '14%',
            }}
        />
    );
};





