import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageText from './ImageText';
import DetailItem from './DetailItem';
import Label from './Label';
import BottomLabel from './BottomLabel';

export default class FormItem extends React.Component {
  static defaultProps = {

  };
  // static defaultContentProps = {
  //   {
  //     icon : {require('../Images/id_message_name.png')}
  //     title : '张三'
  //     label : '[主]'
  //     labelStyle : {{color: '#0683EE'}}
  //     value : '18109873459'
  //     valueStyle : {{color: '#666666'}}
  //   }
  // };
  render () {
    return (
      <View style={styles.Form}>
        <View style={styles.Tip}>
          <ImageText
            leftImage={require('../Images/order_num.png')}
            text='订单号：201802031011'
            tvStyle={{fontSize: 14, color: '#333333'}}
          />

          <ImageText
            rightImage={require('../Images/home_arrow_right.png')}
            text='2018-08-16 18:10:33'
            tvStyle={{fontSize: 12, color: '#666666'}}
          />
        </View>
        <View style={styles.mainContent}>
          <View style={styles.ContentLeft}>
            <DetailItem 
              icon = {require('../Images/id_message_name.png')}
              title = '张三'
              label = '[主]'
              labelStyle = {{color: '#0683EE'}}
              value = '18109873459'
              valueStyle = {{color: '#666666'}}
            />
            <DetailItem 
              icon = {require('../Images/id_message_name.png')}
              title = '服务类型:'
              value = '订购'
              valueStyle = {{color: '#666666'}}
            />
            <DetailItem 
              icon = {require('../Images/comparison_result.png')}
              title = '人证对比结果:'
              value = '不通过50%'
              valueStyle = {{color: '#2CC154'}}
            />
          </View>
          <View style={styles.ContentRight}>
            <Text style={styles.rightValue}>50元</Text>
            <Label 
              value = '待确认'
              valueStyle = {{color: '#F6AF3A', fontSize: 14}}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomFirst}>更多</Text>
          <BottomLabel 
            value = '查看协议'
            valueStyle = {{color: '#999999'}}
          />
          <BottomLabel 
            value = '查看影像'
            valueStyle = {{color: '#999999'}}
          />
          <BottomLabel 
            value = '补传影像'
            valueStyle = {{color: '#F6AF3A'}}
          />
          <BottomLabel 
            value = '收费确认'
            valueStyle = {{color: '#FF6060'}}
          />
          </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  Form: {
    backgroundColor:'#FFFFFF'
  },
  Tip: {
      height: 50,
      marginLeft: 14,
      marginRight: 14,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 14,
    marginRight: 14,
  },
  ContentLeft: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10
  },
  ContentRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  rightValue: {
    fontSize: 20,
    color: '#FF6060',
    marginTop: 10,
    marginBottom: 10
  },
  bottom: {
    height: 56,
    paddingLeft: 10,
    paddingRight: 14,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bottomFirst: {
    fontSize: 12,
    color: '#999999'
  }
});