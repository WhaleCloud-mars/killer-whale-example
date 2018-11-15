import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default class ImageText extends Component {
  static defaultProps = {
    imageTextStyle: {},
    leftImage: null,
    text: '',
    tvStyle: {},
    rightImage: null,
  }
  render() {
    let { imageTextStyle, leftImage, text, tvStyle, rightImage } = this.props;
    return (
        <View style={[styles.lineStyle, imageTextStyle]}>
            {
                !leftImage ?

                    <View></View>
                    :
                    <Image source={leftImage} />
            }

            <Text style={[styles.tvDefaultStyle, tvStyle]}>{text}</Text>

            {
                !rightImage ?
                    <View></View>
                    :
                    <Image source={rightImage} />
            }
        </View>
    );
  }
}
const styles = StyleSheet.create({
  lineStyle: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  tvDefaultStyle: {
      fontSize: 14,
      marginLeft: 5,
      marginRight: 5
  }
})