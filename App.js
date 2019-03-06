import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import Login from './screens/Login';
import Home from './screens/Home';
import Classes from './screens/Classes'
import Account from './screens/Account'
import Register from './screens/Register'
import Icon from 'react-native-vector-icons/FontAwesome'

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

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Classes,
    Account
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index]
        return {
          headerTitle: routeName
        }
    }
  }
)

const StackNavigator = createStackNavigator(
  {
    TabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <Icon name="bars" size={30} />
      }
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: StackNavigator
    }
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    Login,
    Home: {
      screen: DrawerNavigator
    },
    Register
  },
  {
    initialRouteName: "Login"
  },
);

export default createAppContainer(SwitchNavigator);