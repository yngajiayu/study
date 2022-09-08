/*
 * @Author: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @Date: 2022-09-07 10:52:39
 * @LastEditors: 杨嘉宇 JIAYU.YANG@HAND-CHINA.COM
 * @LastEditTime: 2022-09-08 09:37:55
 * @FilePath: \list\src\component\Sider\sider.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import { Layout, Menu, Icon } from "choerodon-ui";
import "./index.css";

//doneStatus类型： 三种类型：all（全部事件）,finished(已完成事件)，unfinished(未完成事件)
type Props = {
  doneStatus(type: string): void;
};

export default class Sider extends Component<Props> {
  render() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    const { doneStatus } = this.props;
    return (
      <Sider className="sider">
        <Menu
          mode="inline"
          defaultSelectedKeys={["all"]}
          defaultOpenKeys={["list"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu
            key="list"
            title={
              <span>
                <Icon type="agile_schedule" />
                查看事件
              </span>
            }
          >
            <Menu.Item key="all" onClick={() => doneStatus("all")}>
              全部事件
            </Menu.Item>
            <Menu.Item key="unfinished" onClick={() => doneStatus("unfinished")}>
              未完成事件
            </Menu.Item>
            <Menu.Item key="finished" onClick={() => doneStatus("finished")}>
              已完成事件
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
