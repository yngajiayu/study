### 项目相关

```
1. 项目的技术栈为：React，TypeScript,C7N

2. 页面布局：页面总体布局参考的C7N组件库里的顶部-侧边布局，分为Header,Sider,Content,Footer

3. 组件拆分情况:
侧边导航栏：Sider
主要内容区组件：
Todoheader(新增todo事件框)
Todolist（todo事件列表）
Todoitem（todo事件）
Todofooter(todolist事件统计和操作)
由于Header和Footer我设计的较为简单，所以它们不把它两作为单独组件。
```



### 项目启动

```
1. 安装项目依赖

2. 特别注意：
   问题：Sider组件的index.tsx文件中给Menu组件定义样式时会报错。
   原因：项目用的React 18版本，在这个版本中 children 属性已经在函数组件中被移除，如果需要使用children 属性，则需要我们手动声明。
   解决方法：在Sider组件的index.tsx文件中找到Menu,按住Ctrl键同时右键点击Menu进入到node_modules定义Menu的地方找到interface MenuProps,然后手动添加 children?: React.ReactNode 用于声明children属性。
 
3. 项目依赖安装完成以及给Menu组件添加好children 属性后，执行yarn start 命令即可启动项目，建议用Edge浏览器打开效果最佳。（我用的Edge浏览器去预览和调整样式）

### 
