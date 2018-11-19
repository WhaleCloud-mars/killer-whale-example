import React from 'react';
import { View,Text } from 'react-native';
import {QuickEntry}   from "combination";


export default class QuickEntrys extends React.Component{

    render(){
        return(
            <View>
               <QuickEntry
               title="快速入口"
               data={[
                 {
                   icon:
                     "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
                   text: "手机安装"
                 },
                 {
                   icon:
                     "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
                   text: "手机安装"
                 },
                 {
                   icon:
                     "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
                   text: "手机安装"
                 },
                 {
                   icon:
                     "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
                   text: "手机安装"
                 }
               ]}
               columnNum={4}
               hasLine ={false}
               columnNum={4}
               showType={1}
               
               ></QuickEntry>
            
            </View>
        )
    }
}
