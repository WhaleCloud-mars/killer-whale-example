import React, { Component } from "react";
import { View, Text } from "react-native";
import { RadioItem } from "combination";


export default class RadioItems extends React.Component{

    render(){
        return(
            <RadioItem
            checked
            disabled={false}
            showImg
            title='单项选择标签'
            >
            
            </RadioItem>
        )
    }
}