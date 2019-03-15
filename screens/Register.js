import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: false,
            email: "",
            Fname: "",
            Lname: "",
            password: "",
            password2: "",
            errors: []
        }
        this.lnameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.confirmInput = React.createRef();
    }

    userRegister = async () => {
        try {
            let response = await fetch("https://cryptic-crag.herokuapp.com/api/register", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    firstName: this.state.Fname,
                    lastName: this.state.Lname,
                    password: this.state.password,
                    password2: this.state.password2
                }),
            });
            let res = await response.json();
            if (res.errors) {
                this.setState({ errors: res.errors });
            } else {
                // let accessToken = res.token;
                // this.storeToken(accessToken);
                this.props.navigation.navigate('Login');
            }
        } catch (errors) {
            console.log('catch err');
            console.log(errors);
        }
    }

    render() {
        return (
            <ScrollView style={{ width: '100%' }}>
                <SafeAreaView style={styles.container}>
                    <ImageBackground style={styles.bgImg} source={require('../assets/logo.png')}></ImageBackground>
                    <Errors errors={this.state.errors} />
                    <KeyboardAvoidingView>
                        <TextInput
                            onChangeText={(Fname) => this.setState({ Fname })}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            onSubmitEditing={() => { this.lnameInput.current.focus() }}
                            returnKeyType="next"
                            keyboardType="default"
                            placeholder='First Name'
                            style={styles.form}>
                        </TextInput>
                        <TextInput
                            onChangeText={(Lname) => this.setState({ Lname })}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            onSubmitEditing={() => { this.emailInput.current.focus() }}
                            returnKeyType="next"
                            keyboardType="default"
                            placeholder='Last Name'
                            style={styles.form}
                            ref={this.lnameInput}>
                        </TextInput>
                        <TextInput
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            ref={this.emailInput}
                            onSubmitEditing={() => { this.passwordInput.current.focus() }}
                            returnKeyType="next"
                            keyboardType="email-address"
                            placeholder='Email'
                            style={styles.form}>
                        </TextInput>
                        <TextInput
                            onChangeText={(password) => this.setState({ password })}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            ref={this.passwordInput}
                            onSubmitEditing={() => { this.confirmInput.current.focus() }}
                            returnKeyType="next"
                            keyboardType="default"
                            placeholder='Password'
                            style={styles.form}
                            secureTextEntry>
                        </TextInput>
                        <TextInput
                            onChangeText={(password2) => this.setState({ password2 })}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            ref={this.confirmInput}
                            keyboardType="default"
                            placeholder='Confirm Password'
                            style={styles.form}
                            secureTextEntry>
                        </TextInput>
                    </KeyboardAvoidingView>
                    <View>
                        <CheckBox
                            onPress={() => this.setState({ checked: !this.state.checked })}
                            center
                            title='Agree to terms of service'
                            checkedIcon='check-square'
                            uncheckedIcon='square'
                            checked={this.state.checked}
                            checkedColor='green'
                            containerStyle={{ borderColor: 'white', backgroundColor: 'white', marginTop: 10 }}
                        />
                        <Button
                            onPress={this.userRegister}
                            containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                            buttonStyle={{ backgroundColor: 'rgb(249, 15, 28)', width: 100, marginTop: 10, marginBottom: 20 }}
                            titleStyle={{ color: 'white', marginLeft: 7 }}
                            title="Register"
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
            </ScrollView>
        )
    }
}

const Errors = (props) => {
    return (
        <View>
            {props.errors.map((error, i) => <Text key={i} style={{ marginTop: 10, textAlign: 'center', color: 'rgb(249, 15, 28)' }}> {error.msg} </Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    bgImg: {
        width: 200,
        height: 200,
        marginTop: 25,
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