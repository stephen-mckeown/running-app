
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
} from 'react-native';

const styles = StyleSheet.create(global.styles);


class PlanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plan: [],
    }
  }


  componentDidMount() {
    this.setState({
      plan: [
        { title: 'Title1', data: ['item1', 'item2'] },
        { title: 'Title2', data: ['item3', 'item4'] },
        { title: 'Title3', data: ['item5', 'item6'] },
      ]
    })
  }




  render() {
    return (
      <View style={styles.container}>
        <Text>Plan</Text>
        <SectionList
          renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          sections={this.state.plan}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

export default PlanScreen;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });