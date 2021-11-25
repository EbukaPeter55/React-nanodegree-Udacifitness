import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {

 
    componentDidMount()
    {

        console.log("Before");
        debugger
        console.log("After");
    }


  render (){

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Open your app.js and start working</Text>
            <Text style={{ fontWeight: "bold" }}>Changes yo make will automatically reload</Text>
            <Text style={{ fontWeight: "bold" }}>
                Shake your phone to open the developer menu.
            </Text>
        </View>
    );
  }

}
