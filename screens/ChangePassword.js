import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ChangePassword extends Component {
    static navigationOptions = {
        title: 'Change Password',
    };

    constructor(props) {
        super(props);
        this.newInput = React.createRef();
        this.confirmInput = React.createRef();
    }

    render() {
        return (
            // <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Avatar
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                        }}
                        rounded
                        size={150}
                        containerStyle={{ marginTop: 20, marginLeft: 20 }}
                    />
                    <Text style={styles.name}>Pete Wiley</Text>
                    <Text style={styles.status}>Maker Pro</Text>
                        <TextInput
                            onSubmitEditing={() => { this.newInput.current.focus() }}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            keyboardType="default"
                            placeholder='Old Password'
                            style={styles.form}
                            returnKeyType="next"
                            secureTextEntry>
                        </TextInput>
                        <TextInput
                            onSubmitEditing={() => { this.confirmInput.current.focus() }}
                            ref={this.newInput}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            keyboardType="default"
                            placeholder='New Password'
                            style={styles.form}
                            returnKeyType="next"
                            secureTextEntry>
                        </TextInput>
                        <TextInput
                            ref={this.confirmInput}
                            onSubmitEditing={() => { this.newInput.current.focus(); }}
                            underlineColorAndroid='rgb(249, 15, 28)'
                            keyboardType="default"
                            placeholder='Confirm New Password'
                            style={styles.form}
                            secureTextEntry>
                        </TextInput>
                    <Button
                        onPress={() => this.props.navigation.navigate('EditAccount')}
                        containerStyle={{ marginTop: 60, width: 200, borderColor: 'rgb(249, 15, 28)', borderWidth: 2 }}
                        buttonStyle={{ backgroundColor: "white" }}
                        title="Done"
                        titleStyle={{ color: 'rgb(249, 15, 28)' }}
                    />
                </View>
            </KeyboardAwareScrollView>
            // </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        marginLeft: 10,
        color: 'black'
    },
    status: {
        fontSize: 30,
        marginLeft: 10,
        fontStyle: 'italic'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    form: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        width: 200
    }
})

export default ChangePassword;
