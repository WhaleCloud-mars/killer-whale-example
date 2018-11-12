import React, { Component } from "react";
import { View, Text } from "react-native";
import { Carousel } from "combination";


export default class Carousels extends React.Component {
    render() {
      return(
        <View>
        <Carousel
         
            selectedIndex={0}
            vertical={false}
            autoplay
            autoplayInterval={3000}
            infinite
            dots={false}
        ></Carousel>
        </View>
      )
    }
}