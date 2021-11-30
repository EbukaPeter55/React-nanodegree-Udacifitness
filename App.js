import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import { View } from 'react-native';
import AddEntry from "./components/AddEntry";

export default class App extends Component {



  render (){

    return (
        <View>
        <AddEntry/>
        </View>
    );
  }

}
