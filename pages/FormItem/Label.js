import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Label extends Component {
  static defaultProps = {
    value: '', 
    valueStyle: '', 
    backGroundColor: ''
  }
  render () {
    let { value, valueStyle, backgroundColor} = this.props;
    return (
      <View style={[styles.defaultStyle, backgroundColor]}>
        <Text style={valueStyle}>{value}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(253, 239, 216, 1)',
  }
})