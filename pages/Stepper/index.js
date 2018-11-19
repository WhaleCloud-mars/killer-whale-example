import React from 'react';
import { View,Text } from 'react-native';
import {StepperItem}   from "combination";


export default class StepperItems extends React.Component{

    render(){
        return(
            <StepperItem

        
            min={1}
            max={100}
            step={1}
            value={50}
            disabled={false}
            showNumber
     
            title="计步器值"
            textStyle={ {
              fontSize: 15,
              color: 'black'
            }}
            style={{
                width: 100,
                height:100
            }}
           
              >
            
            </StepperItem>
        )
    }
}