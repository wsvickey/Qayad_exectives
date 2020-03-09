/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  AsyncStorage
} from 'react-native';

class Page1 extends Component {
  state = {
    'auth': ''
 }
 componentDidMount = () => AsyncStorage.getItem('Auth').then((value) => this.setState({ 'auth': value }))
  

  render () {
    return (
      <View style={{padding: 50}}>
        <Text>
         {this.state.auth}
        </Text>
      </View>
    );
  }
}

export default Page1;