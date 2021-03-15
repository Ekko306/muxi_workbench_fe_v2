# 开发规范文档
- [项目主要依赖](#项目主要依赖)
- [项目目录规范](#项目目录规范)
- [service](#service)
- [eslint规范](#eslint规范)
- [less规范](#less规范)
- [git规范](#git规范)
- [疑问商讨](#疑问商讨)
  * [requestly](#requestly)
  * [木犀门户连接](#木犀门户连接)
  * [自动部署](#自动部署)
  * [server](#server)
  * [yarn test](#yarn-test)
  * [reportWebVitals](#reportwebvitals)
- [项目记录与进度](#项目记录与进度)

## 项目主要依赖

- react
- react-dom
- [react-router](https://reactrouter.com/web/guides/quick-start)
- [typescript](https://www.typescriptlang.org/)
- [less](http://lesscss.org/)
- <div style="color: gray !important">redux</div>
- <div style="color: gray !important">tinymce/ckeditor</div>
- eslint
- prettier


**安装依赖统一使用：yarn，保证yarn.lock一致性**

## 项目目录规范
<details>
<summary>项目目录</summary>
<pre>
|-- muxi_workbench_fe_v2
    |-- .eslintrc.js ----------------------------eslint配置文件
    |-- .gitignore ------------------------------取消git
    |-- .prettierrc.js --------------------------prettier配置文件
    |-- README.md -------------------------------github说明文件
    |-- document.md -----------------------------项目开发文档，开发必读🍎
    |-- package.json ----------------------------包管理json文件
    |-- tsconfig.json ---------------------------ts语法配置文件
    |-- yarn.lock -------------------------------yarn小版本号锁定文件
    |-- @types  ---------------------------------自定义ts声明文件
    |   |-- global.d.ts
    |   |-- react.d.ts
    |-- config ----------------------------------eject暴露webpack文件夹
    |   |-- env.js
    |   |-- getHttpsConfig.js
    |   |-- modules.js
    |   |-- paths.js
    |   |-- pnpTs.js
    |   |-- webpack.config.js
    |   |-- webpackDevServer.config.js
    |   |-- jest --------------------------------yarn test工具配置文件夹
    |       |-- cssTransform.js
    |       |-- fileTransform.js
    |-- public ----------------------------------静态文件夹
    |   |-- favicon.ico -------------------------manifest引用icon
    |   |-- index.html  -------------------------静态html入口
    |   |-- logo.png ----------------------------apple-touch-icon引用
    |   |-- manifest.json -----------------------web app图标配置（必要）
    |   |-- robots.txt  -------------------------搜索引擎抓取文件
    |-- scripts ---------------------------------npm自定义scripts
    |   |-- build.js
    |   |-- start.js
    |   |-- test.js
    |-- src -------------------------------------项目资源🍊
        |-- App.test.js -------------------------单页面test
        |-- index.less --------------------------入口样式
        |-- index.tsx ---------------------------入口文件
        |-- reportWebVitals.js ------------------“web vitals”性能检测
        |-- setupTests.js -----------------------yarn test配置
        |-- assets ------------------------------项目静态资源🍌
        |   |-- img
        |   |-- svg
        |       |-- logo.svg
        |-- components --------------------------项目组件🍇
        |   |-- header --------------------------组件规范格式🍉
        |       |-- index.less
        |       |-- index.tsx
        |       |-- readme.md
        |-- pages -------------------------------项目页面🍑
        |   |-- app -----------------------------页面规范格式🍍
        |       |-- index.less
        |       |-- index.tsx
        |-- services ----------------------------项目网络接口🥝
            |-- fetch.ts
</pre>
</details>
重点开发带有水果标识🥥文件/文件夹

## 团队合作规范
🧑‍💻见[cooperation.md](copperation.md)文档


## eslint规范
eslint规范 = eslint + react + typescript + prettier
四种规范集成  
具体见.eslintrc.js文件以及[eslint.md](eslint.md)说明文档


## less规范
1. 统一使用flex布局(附学习连)
2. 命名采用body-items规范
3. class名不能大写
4. 统一className，拒绝style样式
5. 尽量使用通用变量减少重复
6. 优化选择器写法

## git规范
[廖雪峰git教程](https://www.liaoxuefeng.com/wiki/896043488029600)</br>
(学习成本vs我们项目需求？)

## 疑问商讨

### service
fetch封装后使用文档 + redux store

### Requestly
[链接](https://zhuanlan.zhihu.com/p/85139482)

### 木犀门户连接
不懂需学习


### 自动部署
github action / docker

### server
服务端配置

### yarn test
暂未删除，学习/删除

### reportWebVitals
暂未删除，学习/删除

## 项目记录与进度
项目记录（想法池与困难与讨论）：  
http://work.muxixyz.com/project/7/doc/889  
进度记录：  
http://work.muxixyz.com/project/7/doc/890

