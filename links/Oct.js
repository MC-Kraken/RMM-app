import React, {Component} from 'react';
import {WebView} from 'react-native';

class Oct extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.eventbrite.com/e/intro-to-welding-plasma-cutting-october-2018-tickets-49973536192'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default Oct;