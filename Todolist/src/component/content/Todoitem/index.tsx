/*
 * @Author: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @Date: 2022-09-07 09:49:09
 * @LastEditors: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @LastEditTime: 2022-09-08 00:00:34
 * @FilePath: \list\src\component\content\Todoitem\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import "./index.css";

// props类型
type Props = {
  id: number;
  name: string;
  done: boolean;
  updateTodo(id: number, done: any): void;
  deleteTodo(id: number): void;
};

export default class Todoitem extends Component<Props> {
  // 鼠标是否进入li的状态
  state = { mouse: false };
  // 修改鼠标的状态
  handleMouse = (flag: any) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //  修改指定id的todo事件的勾选状态
  handleCheck = (id: number) => {
    return (event: { target: { checked: any } }) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  //  删除指定id的todo事件
  handleDelete = (id: number) => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          {"\u00A0\u00A0\u00A0"}
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
