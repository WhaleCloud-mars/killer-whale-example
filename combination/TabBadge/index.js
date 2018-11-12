import { Tabs, Badge } from "antd-mobile-rn";
import React from "react";
import { View, Text } from "react-native";

const tabs = [
  { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
];
export default class TabBadge extends React.Component {
  render() {
    return (
      <Tabs
        tabs={tabs}
        initialPage={0}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 150,
            backgroundColor: "#fff"
          }}
        >
          <Text>页面一</Text>
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 150,
            backgroundColor: "#fff"
          }}
        >
          <Text>页面二</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 150,
            backgroundColor: "#fff"
          }}
        >
          <Text> 页面三</Text>
        </View>
      </Tabs>
    );
  }
}
