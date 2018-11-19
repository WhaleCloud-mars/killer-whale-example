import React, { Component } from "react";
import { View, Text } from "react-native";
import { Carousel } from "combination";


export default class Carousels extends React.Component {
    render() {
      return(
        <View>
        <Carousel
         
        dataItem={[{ url: 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png' }, { url: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png' }]}
        selectedIndex={0}
        autoplay
        infinite
        autoplayInterval={3000}
        dots
        vertical={false}
        imgStyle={{
          height: 150
        }}
        ></Carousel>
        </View>
      )
    }
}