import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,   
} from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
      return (
        <Text>Home Page</Text>
      )
    }
}

export default Home;
