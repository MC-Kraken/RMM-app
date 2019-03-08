import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';

class EditAccount extends Component {
    static navigationOptions = {
        title: 'Edit Account',
    };

    render() {
        return (
            <View style={styles.container}>
                <Avatar
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    showEditButton
                    rounded
                    size={150}
                    containerStyle={{ marginTop: 20, marginLeft: 20 }}
                />
                <Text style={ styles.name }>Pete Wiley</Text>
                <Text style={ styles.status }>Maker Pro</Text>
                <TextInput
                    underlineColorAndroid='red'
                    keyboardType="default"
                    placeholder='Change name'
                    autoCapitalize="words"
                    style={styles.form}>
                </TextInput>
                <TextInput
                    underlineColorAndroid='red'
                    returnKeyType="next"
                    keyboardType="email-address"
                    placeholder='Change email'
                    autoCapitalize="words"
                    style={styles.form}>
                </TextInput>
                <Button 
                onPress={() => this.props.navigation.navigate('EditAccount')}
                containerStyle={{ marginTop: 40 }}
                buttonStyle={{ backgroundColor: "black" }}
                title="Change Password"
                />
                <Button 
                onPress={() => this.props.navigation.navigate('Account')}
                containerStyle={{ marginTop: 40 }}
                buttonStyle={{ backgroundColor: "#e80707" }}
                title="Done"
                />
            </View>
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

export default EditAccount;
