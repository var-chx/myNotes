# Math 函数总结
- 向上取整
```js
Match.ceil(3.5) // 4
```

- 向下取整
```js
Math.floor(3.5) // 3
```

- 四舍五入
```js
Math.round(3.4) // 3
Math.round(3.5) // 4
```

- 0.0 ~ 1.0 直接的一个伪随机数 [0, 1)
```js
Math.random() // 0.41101483982999665
```

- 获取从 1 到 10 的随机整数 取 0 的概率很小
```js
Math.ceil(Math.random() * 10)
```

- 可均衡获取0到9的随机整数
```js
Math.floor(Math.random() * 10)
```

- 可均衡获取0或1的随机整数。(因为random()生成的是0-1的数，四舍五入后只有0或1)
```js
Math.round(Match.random())
```
# JSON 函数总结
 
 - 官方解释
    - 轻量级的文本数据交换格式
    - 独立于语言
- 通俗解释
    - 就是一种有规则的字符串
    - 就是 key / value 存储, 理论上 key 支持 String Number; value 几乎支持所有类型
- JSON.stringify(): 将对象转换为字符串
- JSON.parse() 和 eval() 将字符串转化为对象
    - 区别: 
        - JSON.parse() 不仅是解析json格式的字符串, 并且会对要解析的字符串进行格式检测, 格式错误则不进行解析, 
        - eaal() 则可以解析任何字符串, eval() 是不安全的(如果用恶意用户在json字符串中注入了向页面插入木马链接的脚本)

# location 总结

- window.location.href 转跳的url地址, 重定向
```js
window.location.href = "https://www.baidu.com"
```
- window.loaction.search 获取地址栏信息
```js
```
- window.location.hash 哈希值 
```js
```

# Date 对象总结
 ```js
// 获取当前时间
const d = new Date() // 2021-03-22 星期一 14:25:49

d.getSeconds() // 49

d.getMinutes() // 25

d.getHouse() // 14

d.getDay() // 1 
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
days[d.getDay()] // 0为星期日 所以可以这样使用

d.getDate()  // 22

d.getMonth() // 2 说明: 一月为 0 

d.getFullyear() // 2021

d.getTime() // 1970 年 1 月 1 日以来的毫秒数

// 获取指定时间的日期对象 
const time = new Date(2012,10,1)
const time = new Date(1335024000000)

 ```



