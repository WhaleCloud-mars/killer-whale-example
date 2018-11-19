import React, { Component } from "react";
import { View, Text } from "react-native";
import { HomeBar } from "combination";

export default class HomeBars extends React.Component{

    render(){

        return(
            <HomeBar
            textOne='身份扫描'
            textTwo= '更多'
            textCenter='定位客户'
            mainStyle={ {
              backgroundColor: '#02C558',
            }}
            imgStyle={{
              width: 25,
              height: 25,
              margin: 5
            }}
            textCenterStyle={ {
              color: 'gray',
              fontSize: 10
            }}
            textStyle={ {
              color: 'white',
              fontSize: 15
            }}
            
            ></HomeBar>
        )
    }
}