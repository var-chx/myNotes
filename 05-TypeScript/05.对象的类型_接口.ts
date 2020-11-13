// 在 TS 中 使用接口(interfaces)来定义对象的类型
// 什么是接口
interface Person {
    name: string
    age: number
}
// 赋值的时候，变量的形状必须和接口的形状保持一致。
let tom: Person = {
    name: '小明',
    age: 18,
    // gender: '男'  // 不可定义  因为接口中没有定义
}
console.log(tom)

// 可选属性
// 有时我们希望不要完全匹配一个形状 可是使用可选属性
interface Person0 {
    name: string
    age?: any
}
let tony: Person0 = {
    name: '托尼'
}
let jack: Person0 = {
    name: '杰克',
    age: 18
}

// 任意属性
interface Person1 {
    name: string
    age: number
    [ propName: string ]: any
}
let lily: Person1 = {
    name: '丽丽',
    age: 18,
    gender: '女'
}

// 注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person2 {
    name: string
    age: number
    gender: boolean
    [propName: string]: string | number | boolean
}
let lucy = {
    name: '路西',
    age: 19,
    gender: true,
    abc: 123
}