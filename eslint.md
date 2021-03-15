# eslint规则（集成）
> 大多使用插件和扩展的默认推荐配置，除
prettier自己追加配置

## airbnb规范
airbnb是一个广泛应用的eslint推荐配置，这里我们用他默认配置  
规则详细见[链接](https://github.com/airbnb/javascript)  
值得说明的是airbnbh还会集成打开别的插件如eslint-plugin-react/import/jsx-a11y等  
参考[npm包说明](https://www.npmjs.com/package/eslint-config-airbnb)

## typescript规则集
使用plugin:@typescript-eslint/recommended推荐规则集  
详细见[链接](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin#supported-rules)
里打✅ 的默认选项

## prettier规则集
prettier比较特殊，其实只要用了"prettier"这个包美化代码有些配置默认就是打开的，详细见[官网-配置](https://prettier.io/docs/en/options.html)文档里"defalut"的值  
在default的默认上我们再定义[.prettierr.js](.prettierrc.js)文件追加定义:  

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

注意我们使用的插件作用：
|  npm包   | 插件名  |  作用 |
|  ----  | ----  | ---- |
| [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)  | plugins: 'prettier'' | 将 prettier集成到eslint作为error检测 |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)  | extends: 'prettier' | 使规范中typescript的样式失效，防止与prettier冲突 |

🏖(eslint+prettier一定配置IDE：检测+自动修正)：  
[webstorm和VScode的prettier](https://zhuanlan.zhihu.com/p/81764012)  
[VScode的eslint和prettier](https://segmentfault.com/a/1190000009077086)  

## stylelint规范
我们的less规范：
1. 统一使用flex布局
2. 命名采用body-items规范
3. class名不能大写
4. 统一className，拒绝style样式
5. 尽量使用通用变量减少重复
6. 优化选择器写法

同时引入stylelint，来强制规范3和4 

🏖（stylelint也需要配置IDE：检测+自动修正）  
[webstorm的stylelint](https://blog.csdn.net/MAIMIHO/article/details/110226225)  
[vsCode的stylelint](https://www.cnblogs.com/jiaoshou/p/12220999.html)

## 规范检查
我们定义了以上多种繁复的规则，我们肯定要进行检查，两种：
1. git commit时触发lint-staged，本地检查eslint和
prettier（见package.json）
2. 合并代码PR时，触发github action，大家在review前就看得到代码是满足规范

基本的代码规范检查通过后，再来商讨代码是否逻辑正确符合标准
