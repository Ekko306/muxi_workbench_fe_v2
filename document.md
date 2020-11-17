# 开发规范文档
- [项目主要依赖：](#-------)
- [项目目录规范](#------)
- [service](#service)
- [eslint规范](#eslint--)
- [prettier规范](#prettier--)
- [typescript规范](#typescript--)
- [less规范](#less--)
- [git规范](#git--)
- [疑问要商讨？](#------)
  * [木犀门户连接](#------)
  * [yarn test](#yarn-test)
  * [reportWebVitals](#reportwebvitals)
  * [requestly??](#requestly--)
- [问题记录与进度？](#--------)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## 项目主要依赖：

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
            |-- fetch.tsx
</pre>
</details>
重点开发带有水果标识🥥文件/文件夹

## service
可以用类class规范？？
没想好

## eslint规范
当前规范：
1. 禁止使用var
2. 优先使用 interface 而不是 type
肯定会补充，询问学长

## prettier规范
配置webstorm/vscode插件来格式化
<details>
<summary>prettier规范</summary>
<pre>
    1.一行最多 100 字符
    2.使用 4 个空格缩进
    3.不使用缩进符，而使用空格
    4.行尾需要有分号
    5.使用单引号
    6.对象的 key 仅在必要时用引号
    7.jsx 不使用单引号，而使用双引号
    8.末尾不需要逗号
    9.大括号内的首尾需要空格
    10.jsx 标签的反尖括号需要换行
    11.箭头函数，只有一个参数的时候，也需要括号
    12.每个文件格式化的范围是文件的全部内容
    13.不需要写文件开头的 @prettier
    14.不需要自动在文件开头插入 @prettier
    15.使用默认的折行标准
    16.根据显示样式决定 html 要不要折行
    17.换行符使用 lf
</pre>
</details>

(eslint+prettier一定配置IDE)：
[链接1](https://zhuanlan.zhihu.com/p/81764012)
[链接2](https://segmentfault.com/a/1190000009077086)

## typescript规范
统一[官网]((https://www.typesc2riptlang.org/))规范
保证每次代码不会存在警告与报错
具体规范：
1.使用interface
2.类型检查...

## less规范
1. 统一使用flex布局(附学习连)
2. 命名采用body-items规范
3. class名不能答写
4. 统一className，拒绝style样式
5. 尽量使用通用变量减少重复
6. 优化选择器写法

## git规范
[廖雪峰git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
(学习成本vs我们项目许剧情？)

## 疑问商讨？

### requestly??
需学习

### 木犀门户连接
不懂需学习

### travis
自动部署？

### docker
容器？

### server
服务端配置？

### yarn test
暂未删除，学习/删除？

### reportWebVitals
暂未删除，学习/删除？

## 项目记录与进度？
项目记录（想法池与困难与讨论）：
http://work.muxixyz.com/project/7/doc/889
进度记录：
http://work.muxixyz.com/project/7/doc/890

