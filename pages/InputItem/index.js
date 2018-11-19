import React, { Component } from "react";
import { View, Text } from "react-native";
import { InputItem } from "combination";


export default class InputItems extends React.Component {
    render() {
        return (
            <View>

                <InputItem
                    type="text"
                    clear
                    error
                    extra="元"
                    placeholder="有标签"
                    title="标签"
                    showtype='1'
                    labelNumber={2}
                    titlestyle={{
                        fontSize: 15,
                        color: 'black',
                    }}
                ></InputItem>

            

            
            </View >

        )
    }
}