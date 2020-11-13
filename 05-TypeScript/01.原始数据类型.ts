const sayHello = (person: string) => {
    return `Hello ${person}`
}
const user:string = '123'
console.log(sayHello(user))
// boolean 类型
let bol0: object = new Boolean(1)
let bol1: boolean = true
let bol2: boolean = Boolean(1)
// 数字类型
let num0: number = 1
let num1: number = NaN
let num2: number = Infinity

// 字符串
let str0: string = '123'
let str1: string = `hello ${str0}${num0}`
// 空值 : Void
function alertNumber(): void {
    alert(1)
}
let unusabel: void = undefined

// Null 和 Undefined
let nn: null = null
let uu: undefined = undefined
// void 和(null, underfined) 区别
    // undefined 和 null 是所有类型的子类型。
    //也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
num0 = nn
num0 = uu
num0 = 234 // 改变后还可以改回来
// num0 = unusabel // 这样是不行的