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

-  

