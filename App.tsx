import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from './components/layout/header';


export default class App extends Component {

  constructor() {
    super({});
    this.state = {
      inputValue : '',
      todo : [],
      type : 'All'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading></Heading>  
        </ScrollView> 
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content : {
    flex : 1,
    paddingTop:60
  }

});
