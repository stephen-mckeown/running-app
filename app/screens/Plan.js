
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class PlanScreen extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     username: '',
  //   }
  // }



  render() {
    return (
      <View style={styles.container}>
        <Text>Plan</Text>
      </View>
    );
  }
}

export default PlanScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});