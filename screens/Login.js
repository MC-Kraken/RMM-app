import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    AsyncStorage
} from 'react-native';
import { Button } from 'react-native-elements';


const ACCESS_TOKEN = 'access_token';
const USER_FNAME = 'user_fname';
const USER_LNAME = 'user_lname';
const USER_EMAIL = 'user_email';
const USER_ID = 'user_id';

class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: ""
          }
        this.emailInput = React.createRef();
    }

    storeUser = async (first, last, email, _id) => {
        try {
          await AsyncStorage.setItem(USER_FNAME, first);
          await AsyncStorage.setItem(USER_LNAME, last);
          await AsyncStorage.setItem(USER_EMAIL, email);
          await AsyncStorage.setItem(USER_ID, _id);
          console.log(`Prop was stored: ${first} ${last} | ${email} ${_id}`);
        } catch (error) {
          console.log(error);
        }
      };

    storeToken = async (token) => {
        try {
          await AsyncStorage.setItem(ACCESS_TOKEN, token);
          console.log('Token was stored');
        } catch (error) {
          console.log(error);
        }
      };
    
      userLogin = async () => {
        try {
          let response = await fetch("https://cryptic-crag.herokuapp.com/api/v1/login", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            }),
          });
          let res = await response.text();
          console.log(res);
          if (res == 'Unauthorized') {
            let error = 'Email or Password is incorrect';
            this.setState({ error });
          } else {
            this.setState({ error: '' });
            let response = JSON.parse(res);
            let USER = response.user
            this.storeToken(response.token);
            this.storeUser(USER.firstName, USER.lastName, USER.email, USER._id);
            this.props.navigation.navigate('Home');
          }
        } catch (errors) {
          console.log(errors);
        }
      }

    render() {
        return (
            <ImageBackground
                style={styles.bgImg}
                source={require('../assets/login-page.jpg')}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.textTop}>Red Mountain</Text>
                    <Text style={styles.textBottom}>Makers</Text>
                    <Text style={{ color: 'white' }}>{this.state.error}</Text>
                    <TextInput
                        onChangeText={(email) => this.setState({ email })}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.emailInput.current.focus(); }}
                        keyboardType="email-address"
                        placeholder='Email'
                        autoCapitalize= 'none'
                        style={styles.form}>
                    </TextInput>
                    <TextInput
                        onChangeText={(password) => this.setState({ password })}
                        ref={this.emailInput}
                        keyboardType="default"
                        secureTextEntry
                        placeholder='Password'
                        autoCapitalize= 'none'
                        style={styles.form}>
                    </TextInput>
                    <Button 
                        buttonStyle={{ width: 200, height: 40, marginTop: 20, backgroundColor: 'transparent', borderColor: 'white' }}
                        title="Login"
                        // onPress={ this.userLogin }
                        onPress= {() => this.props.navigation.navigate('Home')}
                        containerViewStyle={{ borderColor: 'white' }}
                        rounded={ true }
                        type="outline"
                        titleStyle={{ color: 'white' }}
                    />
                    <Button 
                        buttonStyle={{ width: 200, height: 40, marginTop: 20, backgroundColor: 'transparent', borderColor: 'white' }}
                        title="Register"
                        onPress={ () => this.props.navigation.navigate('Register') }
                        containerViewStyle={{ borderColor: 'white' }}
                        rounded={ true }
                        type="outline"
                        titleStyle={{ color: 'white' }}
                    />
                </SafeAreaView>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    textTop: {
        fontSize: 40,
        color: 'white',
        position: 'absolute',
        top: 5
    },
    textBottom: {
        fontSize: 40,
        color: 'white',
        position: 'absolute',
        top: 37.5
    },
    bgImg: {
        width: '100%',
        height: '100%'
    },
    form: {
        height: 40,
        backgroundColor: 'white',
        opacity: .8,
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
    },
})

export default Login;