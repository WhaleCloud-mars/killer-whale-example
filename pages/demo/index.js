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
            {title:'ActivityIndicator',routeName:'ActivityIndicator'},
            {title:'CheckItems',routeName:'CheckItems'},
            {title:'DatePickers',routeName:'DatePickers'},
            {title:'InputItem',routeName:'InputItem'}
            
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