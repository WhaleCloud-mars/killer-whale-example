import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class BottomLabel extends Component {
  
  render () {
    let { bottomLabelValue, bottomLabelValueStyle} = this.props;
    let tmpBorderColor = {
      borderColor: '#CCCCCC',
    }
    if (bottomLabelValueStyle) {
      if (bottomLabelValueStyle.color) {
        tmpBorderColor.borderColor = bottomLabelValueStyle.color;
      }
    }
    return (
      <View style={[styles.defaultStyle, tmpBorderColor]}>
        <Text  onPress={this.props.onClick}  style={[styles.defaultValueStyle, bottomLabelValueStyle]}>{bottomLabelValue}</Text>
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