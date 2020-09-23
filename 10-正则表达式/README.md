# 正则表达式

### 概念
- 正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑

### 目的
- 给定的字符串是否符合正则表达式的过滤逻辑（称作“匹配”）：
- 可以通过正则表达式，从字符串中获取我们想要的特定部分。

### 正则表达式在前端的应用场景
- 表单验证
- 验证手机号
- 验证邮箱
- 验证车牌号
- 其中的一些符号 可实现对字符串的高效操作

### js中正则的创建
- 字面量形式
```js
  var expression = /pattern/flags
  // eg.
  var str = 'acc'
  var p = /acc/g
  p.test(str) // true, false

```
- 构造函数法
```js
var p1 = new RegExp('alex', 'g')
```
### [正则验证网站](https://regexr.com/)

### 元字符
- 匹配所有字符
```
/./ 
```
- 匹配数字和字母
```
\w 匹配数字和字母
\W 取非
```
- 匹配数字
```
\d 匹配数字
\D 取非
```
- 匹配空白字符
```
\s 匹配空白字符
\S 取非
```
- [] 匹配区间的任意字符
```
1. [a-zA-Z0-9]     // 匹配大小写字母和数字
2. [\u4e00-\u9fa5] // 匹配所有中文 
3. [^a-zA-Z0-9]    // ^用在[ ] 中就是取非的意思
```
- 重复匹配 + (匹配一次或者多次)
```
\mj+\g

mj
mjjj


\[mM][jJ]+\g
mj
mjj
MJ
MJJ
MjJJJ
```
- *匹配0次或者多次
- ? 匹配0次或者1次
- () 分组匹配
- ?: 不捕获(在分组中使用)

### 分组匹配
```
/(http|https):\/{2}w{3}.[a-z]+.(com|cn)/g

https://www.baidu.com
http://www.google.com
http://www.mi.cn
https://www.ape.com

分组后 用tools 可以获取
RegExp.$1
https
http
http
https

RegExp.$2
com
com
cn
com 

// 不捕获 (?:http|https) 
RegExp.$1
com
com
cn
com 

// 代码中的应用

```
### 正向预查(数字后要跟着'元' 但是'元'不包括)
```
/\d+(?=元)/g

200元   // 匹配200
2000元  // 匹配2000
200刀   // 不匹配
2000磅  // 不匹配

// 否定(数字后不能跟'元', 且这个'元'不包括)
/\d+(?!元)/g

200元   // 匹配20
2000元  // 匹配200
200刀   // 匹配200
2000磅  // 匹配2000
```
### 反向预查 ('元'开头 但是'元'不包括)
```
/(?<=元)\d/g

元200   // 匹配200
元2000  // 匹配2000
刀200   // 不匹配
磅2000  // 不匹配

// 否定 = 换成 !
```

### 重复类
```
/\d{4, 8}/g
// 最多8 最少4

/\d{4}/g
// 匹配4个
```
### 正则实例对象的一些方法
- .test() 返回一个 boolean

- .exec() 返回匹配的结果 返回一个数组

### 字符串的方法
- match()
对字符串进行正则匹配 返回匹配的结果
```js
var str = 'hello world'
undefined
str.match(/l/)
=>> ["l", index: 2, input: "hello world", groups: undefined]
str.match(/l/g)
=>>["l", "l", "l"]
str.match(/a/g)
=>>null
```
- search()
返回第一个满足条件的匹配结果在整个字符串中的位置 , 如果没有任何匹配, 返回 -1
```js
var str = 'hello world'
undefined
str.search(/l/)
=>> 2
str.match(/l/g)
=>>2
str.match(/a/)
=>>-1
```

- replace()
可以替换匹配的值, 它接受两个参数,第一个事正则表达式(表示搜索模式), 第二个是匹配的内容(可以是一个回调: 有无数个参数 第一个参数是匹配的串, 之后的是分组的内容 $1, $2, $3 ....)
```js
'2019.10.05'.replace(/\./g, '-')
=>> '2019-10-05'

let data = {
    name: '小明',
    message: '消息'
}
let str = "<p>{{name}}-{{message}}</p>"
let exp = /\{\{(.+?)\}\}/g
let result = str.replace(exp, (a, $1) => {
    console.log(a)  // {{name}}
    console.log($1) // name
    return data[$1] // 返回值就是要替换的
})
console.log(str)    // <p>{{name}}-{{message}}</p>
console.log(result) // <p>小明-消息</p>

```



