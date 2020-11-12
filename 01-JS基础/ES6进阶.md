符合 Promise/A+ 规范的promise
Generator 和 async await 相关

# ES6 进阶

### 1.  let 和 const
#### 1.1 let
- 不允许重复声明
- 不存在变量提升
- 有块级作用域
- 声明后可以改变
#### 1.2 const
- 不允许重复声明
- 不存在变量提升
- 有块级作用域
- 声明后不可以改变(实质是指向的内存地址不能改变)
```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only

const str = '123'
str = '0' // TypeError: Assignment to constant variable.
```
- 因此想冻结一个对象 要使用 Object.freeze({});
```js
// 常规模式时，下面一行不起作用
// 严格模式时，该行会报错
'use strict'
const foo = Object.freeze({})
foo.prop = 123  // TypeError: Cannot add property prop, object is not extensible
```
- 除了将对象本身冻结，对象的属性也应该冻结, 下面是一个将对象彻底冻结的函数。(递归)
```js
var constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] )
    }
  })
}
```


#### 1.3 关于作用域的理解
```js
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc

for (var i = 0; i<3; i++) {
    var i =5
    console.log(i)
}
// 5 只会执行一次

```

#### 1.4 暂时性死区
- 原因: 因为有了块级作用域 而且没有了变量提升
- 案例:
```js
var tep = 123
if (true) {
    tep = 222
    let tep
} // Uncaught ReferenceError: Cannot access 'tep' before initialization
```
```js
// typeof不再是一个百分之百安全的操作
typeof x; // ReferenceError 
let x;
```
```js
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错 先使用y 但是y还没有声明

function bar0(x = 2, y = x) {
  return [x, y];
}

bar(); // [2,2]
```
#### 1.5 ES6 声明变量的6中方式(ES5 只有 var 和 function)
- var 
- function
- let
- const
- import
- class

#### 1.6 顶层对象的理解
- 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。
```js
window.a = 1;
a // 1

a = 2;
window.a // 2
```
- 上面代码中，顶层对象的属性赋值与全局变量的赋值，是同一件事。

顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。

ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
```js
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```

### 2 解构赋值
#### 2.1 赋值不成功 会等于 undefined
#### 2.2 使用默认值: 只有当一个数组成员严格等于undefined，默认值才会生效 null 不可以。
```
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined 还是暂时性死区

var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5
```
#### 2.3 对象的解构要 注意 模式和变量
```js
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "world"
// ------注意，上边p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。
let obj = {
    p: [
        'Hello',
        { y: 'world' }
    ]
}
let { p, p: [x, { y }]} = obj
x // 'Hello'
y // 'World'
p // ['Hello', {y: 'World'}]
```
#### 2.4 用途
- 变换变量的值
```js
let x = 1
let y = 2
[x, y] = [y, x]
```
- 从函数返回多个值
```js
function example () {
        return [1, 2, 3]
    }
    let [a,b,c] = example()
// -------------------------
function example0 () {
    return {
        foo: 1,
        bar: 2
    }
}
let {foo, bar} = example0()

```

### 3. 对 String 的拓展
-  JSON.stringify() 的改造 编码的改进
- 模板字符串

### 4. 扩展运算符
```js
const arr = [1, 34, 44, 88, 200, 123]

// 取最大值
Math.max(12, 49) // 49
Math.max.apply(null, arr) // 200
Math.max(...arr) // 200
```

### 5. 箭头函数 
- function 函数也是一个对象 但是箭头函数不是对象 它其实就是一个函数的语法糖
- 函数内部没有 arguments 因为没有自己作用域连  
- this 指向比较清晰 没有自己的 this 他的this 是他的上层
- 不能使用 new 关键字来实例化对象 就是 箭头函数不能做构造函数

### 6. Symbol 数据类型
- 原始数据类型 它表示独一无二的值 js的第七种数据类型(null undefined Boolean String Number Object)
- 用途就是定义对象的私有属性 for循环遍历不到
```js
// 声明
const name0 = Symbol('name')
const name1 = Symbol('name')
console.log(name0 === name1) // false
// 对象中使用

let obj = {
    [name0]: '令狐冲'
}
obj[name0] = '任盈盈'
// 获取 Symbol 声明的属性 
Object.getOwnPropertySymbols(obj) // [Symbol(name)]  数组
Reflect.ownKeys(obj)  // [Symbol(name)]  数组
  
```

### 7. set
- 表示无重复的有序列表
let abc = new Set()
// 添加  
abc.push(1)
// 重复的忽略 添加不进去
abc.push(1)
abc.push(2)
abc.push('2')
abc.push([1, 2, 3])
// 校验
abc.has(1) // true
// 删除
abc.delete(1) true

### 8. class
- 传统面向对象
```js
funtction Person (name, age) {
    this.name = name
    this.age = age
}
Person.info = 'aaa' // 这个info 就是静态属性  new 出来的 p1 访问不到
Person.prototype.say = function () {
    console.log('这是Person的实例方法')
}
Person.show = function () {
    console.log('这个是静态方法')
}
// new 做了三件事
    - 创建一个空对象
    - 我们将这个空对象的__proto__成员指向了 Person 函数对象prototype成员对象
    - 把之前的空对象的指针的引用 交给 p1
const p1 = new Person('小明', 18) 
console.log(p1)
```
- 用 class 创建
```js
class Person {
    // 每个类都有一个构造器 不显式的定义也有个隐形的
    // 作用: 每次new 的时候 就会执行 构造器中的代码
    constructor (name, age) {
        this.name = name  // 这个叫实例属性
        this.age = age
    }
    static info = 'aaaa' // 可以使用 static 关键字 定义静态属性  和 constructor 平级
    say () {
        console.log('这是Person的实例方法')
    }
    static show () {
        console.log('这个就是 静态方法')
    }
}
cosnt p1 = new Person('小明', 18)
console.log(p1.name)

// 总结一下: 
- 在 class 的 {} 中只能写 constructor 静态属性方法 实例属性方法
- 其实 class 只是语法糖
```
- 继承 extends
    - 语法 class 子类 extends 父类 {}
    - 为什么要在 constructor 中调用 super
        - 如果一个子类 通过 extends 关键字继承了父类 在子类中手动定义了 constructor 则必须首行调用 super()
    - super 是个什么东西
        - 它是一个函数 子类中的 super ()其实就是父类的 constructor 的一个引用 , 所以调一下就实现了继承 父的东西
    - super 中要传参
    ```js
    // 子类
    constructor(name, age, IDNumber) {
        super(name, age)
        this.IDNumber = IDNumber // 这个就子类自己的属性
        // ....
    }
    ```
- 9. 模块
    - 9.1 export default 和 export 区别
         
        1. export与export default均可用于导出常量、函数、文件、模块等

        2. 在一个文件或模块中，export可以有多个，export default仅有一个

        4. 在一个模块中，可以同时使用export default 和export 向外暴露成员

        5. 使用export向外暴露的成员，只能使用{  }的形式来import，这种形式，叫做【按需导出】,不需要，可以不在{ }中定义

        6. export default 向外暴露的成员，可以使用任意变量来接收

        7. 使用export导出的成员，必须严格按照导出时候的名称，来使用{ }按需接收

        8. 使用export导出的成员，如果想换个变量名称接收，可以使用as来起别名
```js
// test.js
let info = {
    name: 'zs',
    age: 20
}
export default info
 
export let title = '小星星'
 
export let content = '哈哈哈'
```
```js
// mian.js  在main.js中接收，test.js使用export default 和 export 向外暴露的成员
import person, {title, content as content1} from './test.js'
console.log(person)    // 其实就是test.js 中的 info 因为是默认导出 可以用任意名字接收
console.log(title)     // 其实就是test.js 中的 title
console.log(content1)  // 其实就是test.js 中的content 注意对应关系
```