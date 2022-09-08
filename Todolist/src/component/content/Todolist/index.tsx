/*
 * @Author: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @Date: 2022-08-30 21:47:11
 * @LastEditors: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @LastEditTime: 2022-09-08 00:17:04
 * @FilePath: \React学习\demo\src\Header\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { Component } from "react";
import { List } from "choerodon-ui";
import Todoitem from "../Todoitem";
import "./index.css";

// Todolist的事件类型
import { TodoItem } from "../../../todos";
// props类型
type Props = {
  todos: TodoItem[];
  updateTodo(id: number, done: any): void;
  deleteTodo(id: number): void;
};

export default class Todolist extends Component<Props> {
  render() {
    // 获取App组件传来的props
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <List
        itemLayout="horizontal"
        dataSource={todos}
        className="todo-main"
        renderItem={(todo: any) => (
          <Todoitem
            key={todo.id}
            {...todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          ></Todoitem>
        )}
      />
    );
  }
}
