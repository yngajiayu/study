/*
 * @Author: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @Date: 2022-09-06 23:42:47
 * @LastEditors: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @LastEditTime: 2022-09-08 00:16:43
 * @FilePath: \list\src\component\content\Todoheader\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

// 函数类型
type props = {
  addTodo(todoObj: object): void;
};

export default class Todoheader extends Component<props> {
  handleKeyUp = (event: { target: any; keyCode: any }) => {
    // 解构赋值获取target, keyCode
    const { target, keyCode } = event;
    // 按回车键新增todo事件
    if (keyCode !== 13) return;
    // 若输入为空则提示
    if (target.value.trim() === "") {
      alert("输入不能为空！");
      return;
    }
    // 新增的对象传给父组件App
    const todoObj: object = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    // 输入完成后清空输入框
    target.value = "";
  };
  render() {
    return (
      <div className="header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
