import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,   
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';



class Login extends Component {

    constructor () {
        super()
        this.state = {
          selectedIndex: null
        }
        this.updateIndex = this.updateIndex.bind(this)
      }

      updateIndex (selectedIndex) {
        this.setState(selectedIndex ? () => this.props.navigation.navigate("Register") : () => this.props.navigation.navigate("Home"))
      }

      

    render() {
        const { selectedIndex } = this.state
        const buttons = ['Login', 'Register']
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <ImageBackground borderRadius={20} style={styles.bgImg} source={require('../assets/logo.png')}></ImageBackground>
                    <TextInput keyboardType="email-address" placeholder='Email' style={styles.loginForm}></TextInput>
                    <TextInput keyboardType="default" secureTextEntry placeholder='Password' style={styles.loginForm}></TextInput>
                    <ButtonGroup buttons={buttons} raised={true} containerStyle={{height: 40}} containerStyle={{borderRadius: 40}} 
                        containerStyle={{marginTop: 20}}selectedIndex={selectedIndex} onPress={this.updateIndex}  />
                </View>
            </SafeAreaView>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})

export default Login;