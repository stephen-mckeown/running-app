
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import API from '../components/API';

class LoginScreen extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     username: '',
  //   }
  // }

 

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }
}

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});