/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './screens/Splash';
import Login from './screens/Login'
import SwitchNavigator from './App'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: 'Splash'
        }
    setTimeout(() => this.setState({currentScreen: 'Login'}), 2000)
  
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <SwitchNavigator />
        return mainScreen
    }
  }

AppRegistry.registerComponent(appName, () => Main);
