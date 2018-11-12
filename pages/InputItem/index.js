import React, { Component } from "react";
import { View, Text } from "react-native";
import { InputItem, NoticeBar, RadioItem } from "combination";


export default class InputItems extends React.Component {
    render() {
        return (
            <View>

                <InputItem
                    type='text'
                    clear
                    error
                    extra='元'
                    placeholder='有标签'
                    title='标签'

                    showtype={2}
                    labelNumber={2}
                ></InputItem>

                <NoticeBar
                    mode='closable'
                    titles='这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，这是一个通知栏，........'
                    marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}
                ></NoticeBar>

                <RadioItem
                    checked
                    disabled={false}
                    showImg
                    title='单项选择标签'

                ></RadioItem>
                <RadioItem
                    checked
                    disabled={false}
                    showImg={false}
                    title='单项选择标签'

                ></RadioItem>
            </View>

        )
    }
}