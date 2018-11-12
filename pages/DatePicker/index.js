import React, { Component } from "react";
import { View, Text } from "react-native";
import { DatePicker } from "combination";


export default class DatePickers extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value: undefined,
        };
      }

    onChange = (value) => {
        this.setState({ value });
      }
    render(){
        return(
            <DatePicker
            value={this.state.value}
            mode='date'
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            format="YYYY-MM-DD"
            timeValue ="2018-09-09"
            onChange={this.onChange}
            ></DatePicker>
        )
    }
}