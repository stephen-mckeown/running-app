
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

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
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Plan')}
        />
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