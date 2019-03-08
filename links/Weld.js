import React, {Component} from 'react';
import {WebView} from 'react-native';

class Weld extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.eventbrite.com/e/intro-to-welding-plasma-cutting-tickets-49202841022'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default Weld