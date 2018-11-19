import React from 'react';
import { View,Text } from 'react-native';
import {StepperItem}   from "combination";


// 发现一个问题，现在蓝牙选择的设备跟后台没有扯上关系，比如我选择一次活动a,无法知道对应教师设备id是多少，老师可以随便选择蓝牙进行连接，
// 返回的数据肯定是对应的蓝牙下绑定的学生设备 

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