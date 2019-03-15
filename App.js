import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import Login from './screens/Login';
import Home from './screens/Home';
import Settings from './screens/Settings';
import EditAccount from './screens/EditAccount';
import ChangePassword from './screens/ChangePassword';
import { Avatar } from 'react-native-elements';
import Classes from './screens/Classes';
import Account from './screens/Account';
import Register from './screens/Register';
import Pricing from './screens/Pricing';
import ChargeWebView from './screens/ChargeWebView';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyWeb from './links/MyWeb';
import Sept from './links/Sept';
import Aug from './links/Aug';
import Weld from './links/Weld';
import Pie from './links/Pie';
import Oct from './links/Oct';


const HomeStack = createStackNavigator(
  {
    Home
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

const AccountStack = createStackNavigator(
  {
    Account,
    EditAccount,
    ChangePassword,
    Pricing,
    ChargeWebView
  },
  {
    defaultNavigationOptions: () => {
      return {
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

const ClassesStack = createStackNavigator(
  {
    Classes,
    MyWeb,
    Pie,
    Weld,
    Sept,
    Aug,
    Oct
  },
  {
    defaultNavigationOptions: () => {
      return {
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

const SettingsStack = createStackNavigator(
  {
    Settings
  },
  {
    defaultNavigationOptions: () => {
      return {
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
const PricingStack = createStackNavigator(
  {
    Pricing,
    ChargeWebView
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
    Home: HomeStack,
    Classes: ClassesStack,
    Account: AccountStack,
    Settings: SettingsStack
  },
  {
    contentOptions: {
      inactiveTintColor: 'black',
      activeTintColor: 'rgb(249, 15, 28)'
    }
  }
)

DrawerNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle,
  };
};

const SwitchNavigator = createSwitchNavigator(
  {

    Login,
    Home: {
      screen: DrawerNavigator
    },
    Register,
  },
  {
    initialRouteName: "Login"
  },
);

export default createAppContainer(SwitchNavigator);