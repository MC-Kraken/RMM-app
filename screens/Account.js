import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    AsyncStorage
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';

const ACCESS_TOKEN = 'access_token';
const USER_FNAME = 'user_fname';
const USER_LNAME = 'user_lname';

class Account extends Component {
    static navigationOptions = {
        title: 'Account',
    };

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            access_token: ""
        };
    }

    componentWillMount() {
        this.getToken();
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        try {
            let fname = await AsyncStorage.getItem(USER_FNAME);
            let lname = await AsyncStorage.getItem(USER_LNAME);
            console.log(fname + lname)
            if (!fname || !lname) {
                console.log('No user found');
            } else {
                this.setState({ fname, lname });
            }
        } catch (error) {
            console.log('Something went wrong');
        }
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

    render() {
        return (
            <SafeAreaView>
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
                    <Text style={styles.name}>{`${this.state.fname} ${this.state.lname}`}</Text>
                    <Text style={styles.status}>Maker Pro</Text>
                    <Text style={styles.email}>Email: email goes here</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('EditAccount')}
                        containerStyle={{ marginTop: 200, height: 10 }}
                        buttonStyle={{ backgroundColor: "rgb(249, 15, 28)" }}
                        title="Edit Account"
                    />
                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        color: 'black'
    },
    status: {
        fontSize: 30,
        fontStyle: 'italic'
    },
    email: {
        margin: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
})

export default Account;
