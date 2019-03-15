import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    AsyncStorage,
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const ACCESS_TOKEN = 'access_token';

class EditAccount extends Component {
    static navigationOptions = {
        title: 'Edit Account',
    };
    
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        _id: "",
        accessToken: "",
        editFName: "",
        editLName: "",
        editEmail: "",
      }
    }

    componentWillMount() {
      this.getToken();
      const {navigation} = this.props;
      const _id = navigation.getParam('_id', 'no id');
      const firstName = navigation.getParam('firstName', 'no first name');
      const lastName = navigation.getParam('lastName', 'no last name');
      const email = navigation.getParam('email', 'no email');
      this.setState({_id, firstName, lastName, email});
    }

    getToken = async () => {
        try {
            let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
            if (!accessToken) {
                console.log('No token found');
                this.props.navigation.navigate('Login');
            } else {
                this.setState({ accessToken });
            }
        } catch (error) {
            console.log('Something went wrong');
            this.props.navigation.navigate('Login');
        }
    }

    updateUser = async () => {
        const Email = this.state.editEmail ? this.state.editEmail : this.state.email;
        const FirstName = this.state.editFName ? this.state.editFName : this.state.firstName;
        const LastName = this.state.editLName ? this.state.editLName : this.state.lastName;
        try {
            let response = await fetch(`https://cryptic-crag.herokuapp.com/api/v2/update/${this.state._id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': this.state.accessToken
                },
                body: JSON.stringify({
                    email: Email,
                    firstName: FirstName,
                    lastName: LastName
                }),
            });
            let res = await response.text();
            if (res.errors) {
                console.log(res.errors)
                // this.setState({ errors: res.errors });
            } else {
                console.log(res);
                this.props.navigation.navigate('Account');
            }
        } catch (errors) {
            console.log('catch err');
            console.log(errors);
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <SafeAreaView style={styles.container}>
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
                    <Text style={styles.name}>{`${this.state.firstName} ${this.state.lastName}`}</Text>
                    <Text style={styles.status}>Maker Pro</Text>
                    <Text style={styles.email}>{this.state.email}</Text>
                    <TextInput
                        onChangeText={editFName => this.setState({ editFName })}
                        underlineColorAndroid='rgb(249, 15, 28)'
                        keyboardType="default"
                        placeholder='Update First Name'
                        style={styles.form}>
                    </TextInput>
                    <TextInput
                        onChangeText={editLName => this.setState({ editLName })}
                        underlineColorAndroid='rgb(249, 15, 28)'
                        keyboardType="default"
                        placeholder='Update Last Name'
                        style={styles.form}>
                    </TextInput>
                    <TextInput
                        onChangeText={editEmail => this.setState({ editEmail })}
                        underlineColorAndroid='rgb(249, 15, 28)'
                        keyboardType="email-address"
                        placeholder='Update Email'
                        autoCapitalize="none"
                        style={styles.form}>
                    </TextInput>
                    <Button
                        onPress={this.updateUser}
                        containerStyle={{ marginTop: 40, width: 200, borderColor: 'rgb(249, 15, 28)', borderWidth: 2 }}
                        buttonStyle={{ backgroundColor: "white" }}
                        title="Submit"
                        titleStyle={{ color: 'rgb(249, 15, 28)' }}
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('ChangePassword')}
                        containerStyle={{ marginTop: 10, width: 200, borderColor: 'rgb(249, 15, 28)', borderWidth: 2 }}
                        buttonStyle={{ backgroundColor: "white" }}
                        title="Change Password"
                        titleStyle={{ color: 'rgb(249, 15, 28)' }}
                    />
                </SafeAreaView>
            </KeyboardAwareScrollView>
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
