import AsyncStorage from '@react-native-async-storage/async-storage';


export const loadTokenFromLocalStorage  = async () => {
    try {
        const value = await AsyncStorage.getItem('ACCESS_TOKEN');
        if(value !== null) {
          return value;
        }
    } catch(e) {
        console.log('Error loading token from local storage')
    }
}


export const saveTokenToLocalStorage = async (token) => {
    try {
        await AsyncStorage.setItem('ACCESS_TOKEN', token)
    } catch (e) {
        console.log('Error saving token to local storage')
    }
}


export const loadUserDataFromLocalStorage = async () => {
    try {
        let jsonValue = await AsyncStorage.getItem("USER_DATA")
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log('Error loading user data from local storage')
    }
}


export const saveUserDataToLocalStorage = async (userData) => {
    try {
        const jsonValue = JSON.stringify(userData)
        await AsyncStorage.setItem('USER_DATA', jsonValue)
    } catch (e) {
        console.log('Error saving user data to local storage')
    }
}


export const deleteTokenFromLocalStorage = async () => {
    try {
        await AsyncStorage.removeItem("ACCESS_TOKEN")
    } catch(e) {
        console.log('Error deleting token from local storage')
    }
}
