
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create(global.styles);


class DailyPlan extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Todays Plan</Text>
        <Text>Run 5 miuntes</Text>
      </View>
    );
  }
}

export default DailyPlan;
