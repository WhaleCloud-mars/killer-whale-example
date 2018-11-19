import React, { Component } from "react";
import { View, Text } from "react-native";
import { NoticeBar } from "combination";


export default class NoticeBars extends React.Component{

    render(){
        return(
            <NoticeBar
            mode='closable'
            titles='这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，........'
            marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}
            
            ></NoticeBar>
        )
    }
}