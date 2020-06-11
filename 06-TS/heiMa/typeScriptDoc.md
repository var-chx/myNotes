## 安装运行环境
### 让 vs code 自动将ts 转为 js
+ 运行 tsc --init 创建 tscconfig.json 文件
+ 修改 tscconfig.json 文件 设置 outDir: './js/'
+ 设置 vs code 监视任务 终端 --> 运行任务 --> tsc 监视

### 变量的声明
+ 数据类型
    - 原有数据类型 <br/>
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

