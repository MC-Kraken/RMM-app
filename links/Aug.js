import React, {Component} from 'react';
import {WebView} from 'react-native';

class Aug extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.eventbrite.com/e/intro-to-soldering-august-2018-tickets-49201760791'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default Aug