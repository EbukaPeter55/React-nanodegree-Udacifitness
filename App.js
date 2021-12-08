import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import { View } from 'react-native';
import AddEntry from "./components/AddEntry";
import { createStore } from 'redux';
import reducer from './reducers/index'
import { Provider } from 'react-redux';


export default class App extends Component {



  render (){

    return (
      <Provider store={createStore(reducer)}>
        <View>
        <AddEntry/>
        </View>
      </Provider>
    );
  }

}
