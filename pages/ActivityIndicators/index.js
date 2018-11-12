import React, { Component } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "combination";


export default class ActivityIndicators extends React.Component{

    render(){
        return(
            <View>
              <ActivityIndicator

              animating
              size={'small'}
              toast={ false}
              text='加载中'
              color='gray'

              >
              
              </ActivityIndicator>
              
            </View>
        )
    }
}

