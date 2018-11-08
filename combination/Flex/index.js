import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const alias = {
  around: "space-around",
  between: "space-between",
  end: "flex-end",
  start: "flex-start",
  center: "center"
};
class None extends React.Component {
  render() {
    const styles = {
      height: 50,
      width: "100%"
    };

    return (
      <View style={styles}>
        <Text>None</Text>
      </View>
    );
  }
}
export default class Button extends React.Component {
  static propTypes = {
    direction: PropTypes.oneOf([
      "row",
      "column",
      "row-reverse",
      "column-reverse"
    ]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    alignItems: PropTypes.oneOf([
      "start",
      "end",
      "center",
      "stretch",
      "baseline"
    ]),
    align: PropTypes.oneOf(["start", "end", "center", "between", "around"])
  };

  static defaultProps = {
    direction: "row",
    wrap: "nowrap",
    alignItems: "center",
    align: "around"
  };

  render() {
    const { direction, wrap, alignItems, align, children } = this.props;
    const styles = {
      flex: 1,
      flexDirection: direction,
      flexWrap: wrap,
      alignItems: alias[alignItems] || alignItems,
      justifyContent: alias[align] || align,
      padding: children ? null : 30,
      border: "1px solid"
    };
    console.log(children);

    return <View style={styles}>{children}</View>;
  }
}
