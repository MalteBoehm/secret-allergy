import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_DATA = 'USER_DATA';
const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const loadTokenFromLocalStorage  = async () => {
    try {
        const value = await AsyncStorage.getItem(ACCESS_TOKEN)
        if(value !== null) {
            // value previously stored
        }
    } catch(e) {
        // error reading value
    }
}


export const saveTokenToLocalStorage = async (token) => {
    try {
        const jsonValue = JSON.stringify(token)
        await AsyncStorage.setItem(ACCESS_TOKEN, jsonValue)
    } catch (e) {
        // saving error
    }
}


export const loadUserDataFromLocalStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(USER_DATA)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}


export const saveUserDataToLocalStorage = async (userData) => {
    try {
        const jsonValue = JSON.stringify(userData)
        await AsyncStorage.setItem(USER_DATA, jsonValue)
    } catch (e) {
        // saving error
    }
}


export const deleteTokenFromLocalStorage = async () => {
    try {
        await AsyncStorage.removeItem(ACCESS_TOKEN)
    } catch(e) {
        // remove error
    }
    console.log('Removed.')
}
