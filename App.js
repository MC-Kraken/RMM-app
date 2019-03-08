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
import Settings from './screens/Settings';
import EditAccount from './screens/EditAccount';
import Splash from './screens/Splash';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import Classes from './screens/Classes'
import Account from './screens/Account'
import Register from './screens/Register'
import Icon from 'react-native-vector-icons/FontAwesome'
import MyWeb from './links/MyWeb'
import Sept from './links/Sept'
import Aug from './links/Aug'
import Weld from './links/Weld'
import Pie from './links/Pie'

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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let Icon = FontAwesome;
        let iconName;

        if (routeName === 'Classes') {
          iconName = 'lightbulb-o';
        }
        else if (routeName === 'Home') {
          iconName = 'home';
        }
        else if (routeName === 'Account') {
          iconName = 'user';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e80707',
      inactiveTintColor: 'gray',
    },
  },
  Home.navigationOptions= {
    title: "Home"
  }
)

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle,
  };
};

const StackNavigator = createStackNavigator(
  {
    TabNavigator,
    EditAccount,
    Settings,
    MyWeb,
    Pie,
    Weld,
    Sept,
    Aug
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft:
          <Icon
            name="bars"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} />,

        headerRight:
          <Avatar
            rounded
            containerStyle={{ marginRight: 10 }}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
          />
      };
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: StackNavigator
    },
    Classes,
    Account,
    Settings: {
      screen: StackNavigator
    }
  },
  {
    contentOptions: {
      inactiveTintColor: 'black',
      activeTintColor: '#e80707'
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