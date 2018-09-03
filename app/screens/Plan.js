
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
        { title: 'Week 1', data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday'] },
        { title: 'Week 2', data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday']},
        { title: 'Week 3', data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday', 'Sunday'] },
      ]
    })
  }

 // _keyExtractor = (item, index) => item.id;


  renderItem(item) {
    return (
      <View style={styles.rowSchedule}>
        <Text>{item}</Text>
    </View>
    );
  }


  renderSectionHeader (section) {
    return(
      <View>
     <Text style={styles.SectionHeaderStyle}> {section.title} </Text> 
      </View>
    )
    }




  render() {
    return (

      <View style={styles.containerSchedule}>
        <Text>Plan</Text>
     
        <SectionList
          sections={this.state.plan}
          renderItem={({ item }) => this.renderItem(item)}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={this._keyExtractor}

        />
    
      </View>
    );
  }
}

export default PlanScreen;

/*
 renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          */