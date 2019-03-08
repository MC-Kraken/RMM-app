import React, {Component} from 'react';
import {WebView} from 'react-native';

class Sept extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.eventbrite.com/e/intro-to-soldering-september-2018-tickets-49973472000'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default Sept