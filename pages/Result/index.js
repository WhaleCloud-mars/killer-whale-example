import React, { Component } from 'react'
import { View } from 'react-native';
import { Result } from 'combination'


export default class Results extends React.Component {


    render() {
        return (
            <View>

                <Result
                imgUrl={{
                    uri:
                      'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png',
                  }}
                    title="验证成功"
                    message="所提交内容已成功完成验证"
                    buttonText="完成"
                    buttonType="primary"
                ></Result>
            </View>
        )
    }

}