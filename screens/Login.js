import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text
} from 'react-native';

class Login extends Component {

    render() {
        return (


            <View>
                
                <ImageBackground borderRadius={20} style={styles.bgImg} source={require('../assets/logo.png')}></ImageBackground>
                
                <TextInput keyboardType="email-address" placeholder='Email' style={styles.loginForm}></TextInput>
                <TextInput keyboardType="default" secureTextEntry placeholder='Password' style={styles.loginForm}></TextInput>
                
                <Text style={styles.regLink}
                    onPress={() => Linking.openURL('./register')}>
                    Don't have an account?
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgImg: {
        width: 200,
        height: 200,
    },
    loginForm: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 20, 
    },
    regLink: {
        color: 'white', 
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 10
    }
})

export default Login;