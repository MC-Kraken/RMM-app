import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';


class Register extends Component {
    static navigationOptions = {
        title: 'Register',
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>Create a Maker account</Text>
                    <TextInput keyboardType="default" placeholder='Name' autoCapitalize="words" style={styles.loginForm}></TextInput>
                    <TextInput keyboardType="email-address" placeholder='Email' style={styles.loginForm}></TextInput>
                    <TextInput keyboardType="default" placeholder='Password' style={styles.loginForm} secureTextEntry></TextInput>
                    <TextInput keyboardType="default" placeholder='Confirm Password' style={styles.loginForm} secureTextEntry></TextInput>
                    <View>
                        <Button containerStyle={{ alignItems: 'center', justifyContent: 'center' }} 
                                buttonStyle={{ backgroundColor: 'white', width: 100, marginTop: 20 }}
                                titleStyle= {{ color: '#708090' }}
                                title="Register"
                            //icon={
                            //     <Icon
                            //         name="arrow-right"
                            //         size={15}
                            //         color="white"
                            //     />
                            // }
                            
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    loginForm: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 20,
        width: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'  
    }
})

export default Register;