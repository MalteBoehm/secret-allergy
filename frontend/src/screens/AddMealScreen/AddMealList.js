import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-native-easy-grid";
import { ListItem, Avatar, CheckBox } from "react-native-elements";
import {
    View,
    FlatList
} from "react-native";
import { LiveSearchContext } from "../../context/LiveSearchContext";
import AddMealSuche from "./AddMealSuche";


export default function AddMealList() {
    const { liveSearchData, addMealListOfProducts,  setAddMealListOfProducts} = useContext(LiveSearchContext);

    const keyExtractor = (item, index) => index.toString();
    const renderItem = ({ item }) => {
        let isChecked = false;



        const handleChecked = () => {
            if (!addMealListOfProducts.includes(item)) {
                setAddMealListOfProducts(addMealListOfProducts => [...addMealListOfProducts, item]);
                isChecked = true;
                console.log(isChecked);
            } if(addMealListOfProducts.includes(item)) {
                const indexOfItem = addMealListOfProducts.indexOf(item);
                addMealListOfProducts.splice(indexOfItem);
                isChecked = false;
                console.log('Aus der Liste')
            }
        };

        return (
          <ListItem style={{ color: "black" }} bottomDivider component={CheckBox}>
              <Avatar source={{ uri: item.image_front_thumb_url }} />
              <ListItem.Content>
                  <ListItem.Title>{item.product_name}</ListItem.Title>
                  <ListItem.Subtitle>{item.brands}</ListItem.Subtitle>
              </ListItem.Content>
              <CheckBox
                right
                title="Hinzugefügt"
                checkedIcon="check-square-o"
                uncheckedIcon="square-o"
                checked={true}
                onPress={handleChecked}
              />
          </ListItem>
        );
    };

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
    );
}


const renderSeparator = () => {
    return (
      <View
        style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
        }}
      />
    );
};





