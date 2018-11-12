import {CheckboxItem} from "combination";
import React, { Component } from "react";
import { View } from "react-native";


export default class CheckItems extends React.Component{

    render(){
        return(
            <CheckboxItem
            defaultChecked={false}
            checked
            disabled={false}
            title='单项选择'
            ></CheckboxItem>
        )
    }
}