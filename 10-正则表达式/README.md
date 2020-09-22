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
- * 匹配0次或者多次
- ? 匹配0次或者1次

### 分组匹配
```
/(http|https):\/{2}w{3}.[a-z]+.(com|cn)/g

https://www.baidu.com
http://www.google.com
http://www.mi.cn
https://www.ape.com

分组后 用tools 可以获取
$1
https
http
http
https

$2
com
com
cn
com 
```

