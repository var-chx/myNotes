## 一、安装运行环境
### 让 vs code 自动将ts 转为 js
+ 运行 tsc --init 创建 tscconfig.json 文件
+ 修改 tscconfig.json 文件 设置 outDir: './js/'
+ 设置 vs code 监视任务 终端 --> 运行任务 --> tsc 监视

## 二、核心语法
### 变量的声明
+ 数据类型
    - 原有数据类型
        * string 
        * number 
        * boolean 
        * Array 
        * null 
        * underfined 
        * Symbol 
        * Object
    - 新增数据类型
        * tuple: 元组
        * enum: 枚举
        * any: 任意
        * never 
        * void
+ 语法 
    - 字符串类型
        ```
        let aName: string = '1234'
        ```
    - 数值类型
        ```
        let aAge: number = 18
        ```
    - 布尔类型
        ```
        let isSingleDog = true
        ```
    - undefinde 和 null
        ```
        let undef: undefined = undefined
        let nul: null = null
        ```
    - Array
        * 方式一: let 数组名: 类型[] = [] 
        ```
        // eg

        let arrHeros: string[] = ['安其拉', '大乔'] 
        ```
        * 方式二: let 数组名: Array<类型> = [] &emsp; 
        ```
        // eg

        let arrHeros: Array<string> = ['安其拉', '大乔'] // 叫做 泛型数值
        ```
    - 元组
        * 概念: 规定了元素数量和类型的"数组"
        * let 元组名: [类型一, 类型二, 类型三] = [值一, 值二, 值三]
        ```
        // 创建
        let tup: [string, number, boolean] = ['讨厌~~', 18, true]
        // 重新赋值
        tup = ['讨厌', 19, false]
        // 访问
        console.log(tup[0])
        console.log(tup[1])
        console.log(tup[2])
        console.log(tup.length)
        ```
    - 枚举
        ```
        // 定义
        enum Gender{
            Boy = 1,
            Girl = 2,
            Unknown = 3
        }
        // 访问
        console.log(Gender.Boy) // 1
        console.log(Gender.Gril) // 2

        enum Gender1 {
            Boy,
            Girl,
            Unknown
        }
        // 不指定 默认 就是 0 1 2

        // 使用枚举
        let usrSex: Gender = Gender.Boy

        ```
    - any 类型
        * 概念: any 代表任意类型 一般在获取 dom 时使用 或者是第三方库时 不确定返回的类型
        ```
        let divNode = document.getElementById('textN')
        ```
    
    - void 类型
        * 概念: void 代表没有 一般用在无返回值的函数 ts中函数一定要指定返回值的类型
        ```
        function sayHi(): string {
            return '哈哈'
        }

        function sayNo(): void {
            console.log('hahah')
        }
        ```
    - never 类型
        * 概念: never代表不存在的类型 常用于抛出异常或无限循环的函数返回类型
        ```
        function test(): never {
            while(true) {
                // 
            }
        }

        function test(): never {
            throw new Error('我错了')
        }
        ```
        * 补充: 用的不多 never 类型 是 ts 中的底部类型 所有类型都是 never类型的父类 所以 never可以赋值给任意 的变量
        ```
        let x: never = test()
        let y: string = test()
        ```
### TypeScript 函数
+ 函数必须要定义返回值类型 如果没有返回值 定义为 void
```
    function sayHi(cityName: string):void {
        console.log(cityName)
    }
```
+ 实参和形参的 类型 数量 要一致 可选参数后加 ?
```
    function sayHi(cityName: string, age: number, six?: Gender): void {
        //
    }
```
+ 函数默认值 有默认值就不需要 ? 标示可选参数了  因为js中 带默认值的 本身就是可选参数
```
    function sayHi(cityName: string = 'beijing', age: number = 12): void {
        //
    }
    // 调用
    * 不传递参数:      函数名()                   全部采用默认值
    * 传递一个参数:    函数名(实参1)              函数名(实参1, 默认值)
    * 只传递第二个参数: 函数名(undefined, 实参2)   函数名(默认值, 实参2)  
```
+ 函数中的剩余参数  传参个数不确定
```
    function add(x: number, y: number, ...arr:number[]): void {
        let resNum: number = x + y
        for (let ele of arr) {
            resNum += ele
        }
        console.log(resNum)

    }
    // 特定
    * 剩余参数 只能 定义一个
    * 剩余参数 只能 定义为数组
    * 剩余参数 只能 定义在 形参列表最后
```
### 类
+ 封装
```
    class City {
        // 成员 变量
        cNmae: string
        cLevel: number
        // 构造函数 主要接受参数
        constructor(name: string, level: number) {
            this.cName = name
            this.cLevel = level
        }
        // 成员方法
        about() {
            console.log(`换用来到${cName}, 此地危险系数为${cLevel}`)
        }
    }
```
+ 创建对象
```
let c1 = new City('P城', 5)

```
+ 调用
```
c1.about
c1.cName
```

## 三、数据类封装

### LocalStroage 操作
+ 概念: LoacalStroage 用于在浏览器端 持久化保存 键值对 数据
+ 特点:
    - 大小限制: 5M (chrome) 更大的数据  使用 indexDB | webSql
    - 受同源访问的限制 不允许跨域访问  
    - 在浏览器的隐私模式下 也是无法使用
    - 因为只在本地存储 不会发送数据 网络爬虫无法获取
    - 只能存放字符串
+ 基本语法
    - 存放键值对数据 localStorage.setItem('key', 'value')
    - 根据 key 查询 value localStorage.getItem('key') 没有查到 返回 null
    - 根据 key 删除 键值对 localSrorage.removeItem('key')
    - 清空所有的键值对 localStorage.clear()
+ localStorage 读写 对象
    ```
    let strJson: string = JSON.stringfly(对象)
    localStorage.setItem('key', strJson)

    let strJson: string | null = localStorage.getItem('key')
    let obj = JSON.parse(strJson as string)
    ```


## 四、Vue 中使用 TS
+ 搭建 vue + ts 脚手架
+ 项目结构分析

