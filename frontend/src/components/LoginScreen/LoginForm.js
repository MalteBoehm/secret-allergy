import React from 'react';
import {View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginForm(){

    return(
        <View>
            <Input
                placeholder='Username'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            <Input
                placeholder='Password'
                errorStyle={{ color: 'red' }}
                errorMessage='password is wrong'
                secureTextEntry={true}
                onChangeText={value =>
                    alert('Password')}
            />

        </View>
    )
}
