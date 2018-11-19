import React from 'react';
import { View,Text } from 'react-native';
import {Slider}   from "combination";

export default class Sliders extends React.Component{

    render(){
        return(
            <Slider
            min={0}
            max={100}
            step={1}
            value={50}
            disabled={false}
    
           
            >
            
            </Slider>
        )
    }
}