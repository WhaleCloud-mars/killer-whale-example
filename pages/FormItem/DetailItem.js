import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default class DetailItem extends Component {
  static defaultProps = {
    tvStyle: '',
    icon: null,
    imageTextStyle: {},
    title: '',
    label: '',
    value: '',
    valueStyle: {},
  }
  render () {
    let { icon, iconStyle, title, label, labelStyle, detailItemValue, detailItemValueStyle } = this.props;
    return (
      <View style={[styles.lineStyle]}>
        {
          !icon ?
            <View></View>
            :
            <Image style={[styles.defualtImageStyle, iconStyle]} source={icon}/>
        }
        <Text style={styles.tltleStyle}>{title}</Text>
        {
          !label ?
            <View></View>
            :
            <Text style={labelStyle}>{label}</Text>
        }
        <Text style={detailItemValueStyle}>{detailItemValue}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  lineStyle: {
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageTextStyle: {
      height: 17,
  },
  defualtImageStyle: {
    marginRight: 5
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  tvDefaultStyle: {
      fontSize: 14,
      marginLeft: 5,
      marginRight: 5
  },
  tltleStyle: {
    marginRight: 14
  }
})