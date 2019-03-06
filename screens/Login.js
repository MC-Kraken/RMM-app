import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
} from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';



class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
        this.emailInput = React.createRef();
    }

    render() {
        return (
            <ImageBackground
                style={styles.bgImg}
                source={require('../assets/login-page.jpg')}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.textTop}>Red Mountain</Text>
                    <Text style={styles.textBottom}>Makers</Text>
                    <TextInput
                        returnKeyType="next"
                        onSubmitEditing={() => { this.emailInput.current.focus(); }}
                        keyboardType="email-address"
                        placeholder='Email'
                        style={styles.form}>
                    </TextInput>
                    <TextInput
                        ref={this.emailInput}
                        keyboardType="default"
                        secureTextEntry
                        placeholder='Password'
                        style={styles.form}>
                    </TextInput>
                    {/* <ButtonGroup
                        buttons={buttons}
                        raised={true}
                        containerStyle={{ height: 40 }}
                        containerStyle={{ borderRadius: 40, borderColor: 'black' }}
                        containerStyle={{ marginTop: 40 }}
                        selectedIndex={selectedIndex}
                        onPress={this.updateIndex}
                    /> */}
                    <Button 
                        buttonStyle={{ width: 200, height: 40, marginTop: 20, backgroundColor: 'transparent', borderColor: 'white' }}
                        title="Login"
                        onPress={ () => this.props.navigation.navigate('Home') }
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