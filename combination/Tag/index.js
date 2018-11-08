import { Tag } from "antd-mobile-rn";
import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default class Tags extends React.Component {
  static propTypes = {
    content: PropTypes.string
  };
  render() {
    return (
      <Tag
        small={this.props.samll}
        disabled={this.props.disabled}
        closable={this.props.closable}
        selected={this.props.selected}
      >
        <Text>{this.props.content}</Text>
      </Tag>
    );
  }
}
