import React, {Component} from 'react';
import {WebView} from 'react-native';

class Pie extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.eventbrite.com/e/pis-and-pies-tickets-58406990882'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default Pie