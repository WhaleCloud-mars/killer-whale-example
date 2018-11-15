import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class BottomLabel extends Component {
  
  render () {
    let { value, valueStyle} = this.props;
    let tmpBorderColor = {
      borderColor: '#CCCCCC',
    }
    if (valueStyle) {
      if (valueStyle.color) {
        tmpBorderColor.borderColor = valueStyle.color;
      }
    }
    return (
      <View style={[styles.defaultStyle, tmpBorderColor]}>
        <Text style={[styles.defaultValueStyle, valueStyle]}>{value}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  defaultStyle: {
    width: 68,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginLeft: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultValueStyle: {
    fontSize: 12,
    color: '#999999'
  }
})