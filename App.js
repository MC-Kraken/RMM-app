import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import Login from './screens/Login';
import Home from './screens/Home';
import Settings from './screens/Settings';
import EditAccount from './screens/EditAccount';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import Classes from './screens/Classes';
import Account from './screens/Account';
import Register from './screens/Register';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyWeb from './links/MyWeb';
import Sept from './links/Sept';
import Aug from './links/Aug';
import Weld from './links/Weld';
import Pie from './links/Pie';
import Oct from './links/Oct';


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
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(249, 15, 28)',
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
    Aug, 
    Oct
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
      activeTintColor: 'rgb(249, 15, 28)'
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