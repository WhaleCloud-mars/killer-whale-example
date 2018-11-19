import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageText from './ImageText';
import DetailItem from './DetailItem';
import Label from './Label';
import BottomLabel from './BottomLabel';

export default class FormItem extends React.Component {
  static defaultProps = {

  };
  render () {
    return (
      <View style={styles.Form}>
        <View style={styles.Tip}>
          <ImageText 
            leftImage = {defaultContentProps.tipLeft.leftImage}
            text = {defaultContentProps.tipLeft.text}
            tvStyle = {defaultContentProps.tipLeft.tvStyle}
          />
          {/* <ImageText
            leftImage={require('../Images/order_num.png')}
            text='订单号：201802031011'
            tvStyle={{fontSize: 14, color: '#333333'}}
          /> */}
          <ImageText 
            rightImage = {defaultContentProps.tipRight.leftImage}
            text = {defaultContentProps.tipRight.text}
            tvStyle = {defaultContentProps.tipRight.tvStyle}
          />
          {/* <ImageText
            rightImage={require('../Images/home_arrow_right.png')}
            text='2018-08-16 18:10:33'
            tvStyle={{fontSize: 12, color: '#666666'}}
          /> */}
        </View>
        <View style={styles.mainContent}>
          <View style={styles.ContentLeft}>
            {
              defaultContentProps.detailData.map(data => {
                return (
                  <DetailItem 
                    icon = {data.icon}
                    iconStyle = {data.iconStyle}
                    title = {data.title}
                    label = {data.label}
                    labelStyle = {data.labelStyle}
                    detailItemValue = {data.detailItemValue}
                    detailItemValueStyle = {data.detailItemValueStyle}
                    key = {data.id}
                  />
                );
              })
            }
            {/* <DetailItem 
              icon = {require('../Images/id_message_name.png')}
              title = '张三'
              label = '[主]'
              labelStyle = {{color: '#0683EE'}}
              detailItemValue = '18109873459'
              detailItemValueStyle = {{color: '#666666'}}
            />
            <DetailItem 
              icon = {require('../Images/id_message_name.png')}
              title = '服务类型:'
              detailItemValue = '订购'
              detailItemValueStyle = {{color: '#666666'}}
            />
            <DetailItem 
              icon = {require('../Images/comparison_result.png')}
              title = '人证对比结果:'
              detailItemValue = '不通过50%'
              detailItemValueStyle = {{color: '#2CC154'}}
            /> */}
          </View>
          <View style={styles.ContentRight}>
            <Text style={styles.rightValue}>{defaultContentProps.rightContent.rightValue}</Text>
            <Label 
              labelValue = {defaultContentProps.rightContent.label.labelValue}
              labelValueStyle = {defaultContentProps.rightContent.label.labelValueStyle}
            />
            {/* <Text style={styles.rightValue}>50元</Text>
            <Label 
              labelValue = '待确认'
              labelValueStyle = {{color: '#F6AF3A', fontSize: 14}}
            /> */}
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomFirst}>更多</Text>
          {
            defaultContentProps.bottomContent.map(data => {
              return(
                <BottomLabel 
                  onClick={()=>{console.warn(data.bottomLabelValue)}}
                  bottomLabelValue = {data.bottomLabelValue}
                  bottomLabelValueStyle = {data.bottomLabelValueStyle}
                  key = {data.id}
                />
              )
            })
          }
          {/* <BottomLabel 
            bottomLabelValue = '查看协议'
            bottomLabelValueStyle = {{color: '#999999'}}
          />
          <BottomLabel 
            bottomLabelValue = '查看影像'
            bottomLabelValueStyle = {{color: '#999999'}}
          />
          <BottomLabel 
            bottomLabelValue = '补传影像'
            bottomLabelValueStyle = {{color: '#F6AF3A'}}
          />
          <BottomLabel 
            bottomLabelValue = '收费确认'
            bottomLabelValueStyle = {{color: '#FF6060'}}
          /> */}
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

const defaultContentProps = {
  
  tipLeft : {
    leftImage : require('../Images/order_num.png'),
    text : '订单号：201802031011',
    tvStyle : {fontSize: 14, color: '#333333'}
  },
  tipRight : {
    leftImage : require('../Images/home_arrow_right.png'),
    text : '2018-08-16 18:10:33',
    tvStyle : {fontSize: 12, color: '#666666'}
  },
  detailData : [
    {
      icon : require('../Images/id_message_name.png'),
      title : '张三',
      label : '[主]',
      labelStyle : {color: '#0683EE'},
      detailItemValue : '18109873459',
      detailItemValueStyle : {color: '#666666'},
      id : 1
    },
    {
      icon : require('../Images/id_message_name.png'),
      title : '服务类型:',
      detailItemValue : '订购',
      detailItemValueStyle : {color: '#666666'},
      id : 2
    },
    {
      icon : require('../Images/comparison_result.png'),
      title : '人证对比结果:',
      detailItemValue : '不通过50%',
      detailItemValueStyle : {color: '#2CC154'},
      id : 3
    }
  ],
  rightContent : {
    rightValue : '50元',
    label : {
      labelValue : '待确认',
      labelValueStyle : {color: '#F6AF3A', fontSize: 14}
    }
  },
  bottomContent : [
    {
      bottomLabelValue : '查看协议',
      bottomLabelValueStyle : {color: '#999999'},
      id : 1
    },
    {
      bottomLabelValue : '查看影像',
      bottomLabelValueStyle : {color: '#999999'},
      id : 2
    },
    {
      bottomLabelValue : '补传影像',
      bottomLabelValueStyle : {color: '#F6AF3A'},
      id : 3
    },
    {
      bottomLabelValue : '收费确认',
      bottomLabelValueStyle : {color: '#FF6060'},
      id : 4
    }
  ]
};
