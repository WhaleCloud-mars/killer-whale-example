import React, { Component } from "react";
import { View, Text } from "react-native";
import { SwitchItem } from "combination";


export default class SwitchItems extends React.Component {


    render() {
        return (
            <SwitchItem
                checked
                disabled={false}
                title="标签">

            </SwitchItem>
        )
    }
}