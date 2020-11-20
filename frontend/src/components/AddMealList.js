import React, {useEffect, useState} from 'react';
import {Grid, Row, Col} from "react-native-easy-grid";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';



export default function AddMealList() {

    const [createdMeal, setCreatedMeal] = useState({

    })

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const API_ENDPOINT = 'https://randomuser.me/api/?seed=1&page=1&results=20';
    useEffect(() => {
        setIsLoading(true);

        fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(results => {
                setData(results);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            });
    }, []);
    if (isLoading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{  justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18}}>
                    Error fetching data... Check your network connection!
                </Text>
            </View>
        );
    }

    return (
        <Row size={3}>
                <View style={styles.container}>
                    <Text style={styles.text}>Favorite Contacts</Text>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.first}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>

                                <View style={styles.metaInfo}>
                                    <Text style={styles.title}>{`${item.name.first} ${
                                        item.name.last
                                    }`}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
        </Row>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    coverImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    metaInfo: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        width: 200,
        padding: 10
    }
});
