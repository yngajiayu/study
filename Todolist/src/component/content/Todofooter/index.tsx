/*
 * @Author: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @Date: 2022-09-06 23:43:10
 * @LastEditors: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @LastEditTime: 2022-09-08 00:15:39
 * @FilePath: \list\src\component\content\Todofooter\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import "./index.css";

// Todolist的事件类型
import { TodoItem } from "../../../todos";
// props类型
type Props = {
  todos: TodoItem[];
  checkAllTodo(done: any): void;
  clearAll(): void;
};

export default class Todofooter extends Component<Props> {
  // 全选checkbox的回调
  handleCheckAll = (event: { target: { checked: any } }) => {
    this.props.checkAllTodo(event.target.checked);
  };
  //清除所有已完成的事件的回调
  handleClearAll = () => {
    this.props.clearAll();
  };
  render() {
    const { todos } = this.props;
    // 已完成事件,用reduce方法统计已完成的事件数，pre:函数上次的返回值，pre +(todo.done?1:0)：若todo对象的done值为true，则完成数加一。
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    //  事件总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>{doneCount}件已完成</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAll}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
