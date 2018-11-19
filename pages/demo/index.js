import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Demo extends Component {

    static navigationOptions = {
        title: 'Whale-App'
    }

    state = {
        dataSource: [
            {title:'test',routeName:'Test'},
            {title:'Carousel',routeName:'Carousel'},
            {title:'RadioItem',routeName:'RadioItem'},
            {title:'CheckItems',routeName:'CheckItems'},
            {title:'SwitchItem',routeName:'SwitchItem'},
            {title:'NoticeBar',routeName:'NoticeBar'},
            {title:'DatePickers',routeName:'DatePickers'},
            {title:'InputItem',routeName:'InputItem'},
            {title:'List',routeName:'List'},
            {title:'Results',routeName:'Results'},
            {title:'HomeBar',routeName:'HomeBar'},
            {title:'FormItem',routeName:'FormItem'},
            {title:'QuickEntry',routeName:'QuickEntry'},
            {title:'Slider',routeName:'Slider'},
            {title:'Stepper',routeName:'Stepper'},
            {title:'ItemTypeOne',routeName:'ItemTypeOne'},
            
            
        
            
        ]
    }

    onCellPress = (item) => {
        const { navigation: { navigate } } = this.props;
        const { title, routeName } = item;
        navigate(routeName, { title });
    }

    renderItem = ({ item, index }) => {
        const { title } = item;
        return (
            <TouchableOpacity style={{ paddingHorizontal: 15, paddingVertical: 10 }} onPress={() => this.onCellPress(item)}>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => 'r-' + index}
                />
            </View>
        )
    }
}