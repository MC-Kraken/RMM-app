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
import { createDrawerNavigator } from 'react-navigation';


class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: 'white',
        headerRight: (
            <Button
                title="Log Out"
                buttonStyle={{ backgroundColor: 'white', width: 80, marginRight: 20, height: 30 }}
                titleStyle={{ color: 'red' }}
                type="outline"
            />
        ),
    };
    render() {
        return (
            <View>
                <Text>Home Page</Text>
                <Button
                    title="Open"
                    onPush={ () => this.props.navigation.openDrawer(Drawer) }
                />
            </View>
        )
    }
}

export default Home;
