import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'



class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }

        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.confirmInput = React.createRef();
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground style={styles.bgImg} source={require('../assets/logo.png')}></ImageBackground>
                <TextInput
                    underlineColorAndroid='red'
                    onSubmitEditing={() => { this.emailInput.current.focus(); }}
                    returnKeyType="next"
                    keyboardType="default"
                    placeholder='Name'
                    autoCapitalize="words"
                    style={styles.form}>
                </TextInput>
                <TextInput
                    underlineColorAndroid='red'
                    ref={this.emailInput}
                    onSubmitEditing={() => { this.passwordInput.current.focus(); }}
                    returnKeyType="next"
                    keyboardType="email-address"
                    placeholder='Email'
                    style={styles.form}>
                </TextInput>
                <TextInput
                    underlineColorAndroid='red'
                    ref={this.passwordInput}
                    onSubmitEditing={() => { this.confirmInput.current.focus(); }}
                    returnKeyType="next"
                    keyboardType="default"
                    placeholder='Password'
                    style={styles.form}
                    secureTextEntry>
                </TextInput>
                <TextInput
                    underlineColorAndroid='red'
                    ref={this.confirmInput}
                    keyboardType="default"
                    placeholder='Confirm Password'
                    style={styles.form}
                    secureTextEntry>
                </TextInput>
                <View>
                    <CheckBox
                        onPress={() => this.setState({ checked: !this.state.checked })}
                        center
                        title='Agree to terms of service'
                        checkedIcon='check-square'
                        uncheckedIcon='square'
                        checked={this.state.checked}
                        checkedColor='green'
                        containerStyle={{ borderColor: 'white', backgroundColor: 'white', marginTop: 20 }}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                        buttonStyle={{ backgroundColor: '#e80707', width: 100, marginTop: 10 }}
                        titleStyle={{ color: 'white', marginLeft: 7 }}
                        title="Register"
                        type="outline"
                        icon={
                            <Icon
                                name="user-plus"
                                size={15}
                                color="white"
                            />
                        }
                    />
                </View>
            </SafeAreaView>
        
        )
    }
}

const styles = StyleSheet.create({
    bgImg: {
        width: 200,
        height: 200,
        marginTop: 25
    },
    form: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        width: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})

export default Register;