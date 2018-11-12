import React, { Component } from "react";
import { View, Text } from "react-native";
import {Button} from "antd-mobile-rn";

export default class Demo extends Component {
  static navigationOptions = {
    title: "test"
  };

  state = {};

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
         <Button {...{"type":"ghost","children":"确定"}} style={{}} />
        
      </View>
    );
  }
}
