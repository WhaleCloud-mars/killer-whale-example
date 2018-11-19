import React from 'react';
import { View, Text } from 'react-native';
import { List,Line } from "combination";


export default class Lists extends React.Component {

    render() {
        return (
            <View>
                <List
                    wrap
                    title="这是自动换行item,这是自动换行item,这是自动换行item"
                ></List>
                <Line    showType='lg'></Line>
                <List
                disabled={false}
                extra="箭头方向"
                arrow= "horizontal"
                title= "标题"
                ></List>
            </View>
        )
    }
}