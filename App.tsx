import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, GestureResponderEvent } from 'react-native';
import Heading from './components/layout/header';
import Input, {InputProp} from './components/UI/TextInput';
import Button from './components/UI/Button';

interface ToDoType {
  title : string,
  todoIndex : number,
  complete : boolean
}

interface AppStateInterface {
  inputValue : string,
  todo : ToDoType[],
  type : string
}

export default class App extends Component {
  todoIndex = 0;

  stateHolder : AppStateInterface = {
    inputValue : '',
    todo : [],
    type : 'All'
  };

  constructor(props:any) {
    super(props);
    this.state = this.stateHolder;
  }

  inputChange(inputValue : string) {
    this.stateHolder.inputValue =  inputValue;
    this.setState(this.stateHolder);

    this.submitTodo = this.submitTodo.bind(this);
  }

  submitTodo(event : GestureResponderEvent) {
    if (this.stateHolder.inputValue.match(/^\s*$/)) {
      return 
    }

    const todo = {
      title : this.stateHolder.inputValue,
      todoIndex : this.todoIndex,
      complete : false
    }

    this.todoIndex++;

    this.stateHolder.todo = [...this.stateHolder.todo, todo]

    this.setState(this.stateHolder, () => {
      console.log("State ", this.state);
    });

  }

  render() {
    const inputText = this.stateHolder.inputValue;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading></Heading>
          <Input inputValue={inputText} inputChange={(text : string) => this.inputChange(text) }  /> 
          <Button submitToDo={(event : GestureResponderEvent) => this.submitTodo(event)} />
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
