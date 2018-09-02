import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './app/screens/Login';
import PlanScreen from './app/screens/Plan';


const RootStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Plan: { screen: PlanScreen },

});



export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
