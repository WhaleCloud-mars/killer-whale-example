import { Result } from "antd-mobile-rn";
import React, { Component } from "react";
import AlipayImg from '../../assets/alipay.png'


export default class Results extends React.Component {
  render() {
    return (
      <Result
    {...this.props}
      />
    );
  }
}
