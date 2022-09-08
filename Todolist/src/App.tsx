/*
 * @Author: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @Date: 2022-09-01 21:28:10
 * @LastEditors: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @LastEditTime: 2022-09-07 23:53:44
 * @FilePath: \list\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
import { Component } from "react";
import { Layout } from "choerodon-ui";
import Sider from "./component/Sider";
import Todoheader from "./component/content/Todoheader";
import Todolist from "./component/content/Todolist";
import Todofooter from "./component/content/Todofooter";
import "./App.css";

export default class App extends Component {
  //  用state存储todo事件
  state = {
    // display
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "打游戏", done: false },
    ],
    // store
    storeTodos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "打游戏", done: false },
    ],
  };

  // 用于添加一个todo事件，接收的参数是一个todo对象
  addTodo = (todoObj: any) => {
    // 获取原来的数组
    const { todos } = this.state;
    // 追加一个新的todo对象
    const newTodos = [todoObj, ...todos];
    // 更新state
    this.setState({ todos: newTodos, storeTodos: newTodos });
  };

  //  updateTodo 用于更新一个对象
  updateTodo = (id: number, done: any) => {
    // 获取状态中的todos
    const { todos } = this.state;
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done };
      } else {
        return todoObj;
      }
    });
    // 更新state
    this.setState({ todos: newTodos, storeTodos: newTodos });
  };

  // 删除一个指定id的todo事件
  deleteTodo = (id: number) => {
    // 获取state
    const { todos } = this.state;
    //  过滤指定id的内容
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    // 更新state
    this.setState({ todos: newTodos, storeTodos: newTodos });
  };

  //  checkAllTodo 用于更新一个todo对象的done状态
  checkAllTodo = (done: any) => {
    // 获取状态中的todos
    const { todos } = this.state;
    // 加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    // 更新状态
    this.setState({ todos: newTodos, storeTodos: newTodos });
  };

  //  clearAll 用于清除done为true的事件
  clearAll = () => {
    // 获取状态中的todos
    const { todos } = this.state;
    // 加工数据
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false;
    });
    // 更新状态
    this.setState({ todos: newTodos, storeTodos: newTodos });
  };

  // 侧边导航栏查看事件回调
  doneStatus = (type: string) => {
    const { storeTodos } = this.state;
    const newTodos =
      type === "unfinished"
        ? storeTodos.filter((todo) => !todo.done)
        : type === "finished"
        ? storeTodos.filter((todo) => todo.done)
        : storeTodos;
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    const { Header, Content, Footer } = Layout;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Layout>
            {/* 头部区域 */}
            <Header className="header">
              <h1>Todolist事件列表</h1>
            </Header>
            <Layout>
              {/* 侧边导航栏 */}
              <Sider doneStatus={this.doneStatus} />

              {/* 主要内容区 */}
              <Content className="content">
                {/* 新增输入框 */}
                <Todoheader addTodo={this.addTodo} />
                {/* Todolist列表 */}
                <Todolist
                  todos={todos}
                  updateTodo={this.updateTodo}
                  deleteTodo={this.deleteTodo}
                />
                {/* 内容底部 */}
                <Todofooter
                  todos={todos}
                  checkAllTodo={this.checkAllTodo}
                  clearAll={this.clearAll}
                />
              </Content>
            </Layout>

            {/* 底部区域 */}
            <Footer className="footer">Choerodon UI</Footer>
          </Layout>
        </div>
      </div>
    );
  }
}
