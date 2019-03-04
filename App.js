import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register'


// export default class App extends Component {
//   render() {
//     return (
//       // <SafeAreaView style={styles.container}>
//         <AppContainer />
//       // </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//   }
// });

const AppNavigator = createStackNavigator(
  {
    Login,
    Home,
    Register
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);