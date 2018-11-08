import { Tabs, Badge } from "antd-mobile-rn";
import React from "react";
import { View, Text } from "react-native";

const tabs = [
  {
    title: (
      <Badge text={"3"}>
        <Text>首页</Text>
      </Badge>
    )
  },
  {
    title: (
      <Badge text={"99"}>
        <Text>热点</Text>
      </Badge>
    )
  },
  {
    title: (
      <Badge dot>
        <Text>发现</Text>
      </Badge>
    )
  }
];
export default class TabBadge extends React.Component {
  render() {
    return (
      <Tabs
        tabs={tabs}
        initialPage={1}
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
