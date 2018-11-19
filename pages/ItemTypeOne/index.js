import React, { Component } from "react";
import { View, Text } from "react-native";
import { ItemTypeOne} from "combination";

export default class ItemTypeOnes extends React.Component{


    render(){
        return(
            <View style={{backgroundColor:'white'}}>
            <ItemTypeOne

            title='2018-08-城市固定本地畅打18元套餐'
            tagTitle='查看详情'
            rightText='立即处理'
            dataItem= {[{ title: '3张手机卡' }, { title: '200M宽带免费' }, { title: '20K高清ITV' }]}
            priceName= '预存款'
            price= '200'
            secondaryStyle={ {
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5
            }}
            imgStyle={ {
              width: 20,
              height: 20,
              margin: 5
            }}
            tagStyle={ {
              borderWidth: 1,
              borderColor: '#FFC76F',
              borderRadius: 5,
              margin: 5,
            }}
            tagTitleStyle={{
              color: '#FFC76F',
              padding: 3,
              fontSize: 12,
              height: 20
            }}
            centertag={ {
              borderWidth: 1,
              borderColor: '#02C558',
              borderRadius: 10,
              margin: 3
            }}
            centertagTitleStyle={ {
              color: '#02C558',
              padding: 3,
              fontSize: 8,
              height: 20
            }}
            priceNameStyle={ {
              fontSize: 10,
              marginLeft: 10
            }}
            priceStyle={{
              fontSize: 10,
              color: 'red',
              margin: 5
            }}
            rightStyle={{
              position: 'absolute',
              right: 0,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: '#02C558'
            }}
            rightTextStyle={ {
              color: 'white',
              fontSize: 10,
              padding: 5
            }}
            
            ></ItemTypeOne>
            </View>
        )
    }
}

