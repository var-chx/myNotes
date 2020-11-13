// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let num3: string | number
num3 = 123
num3 = '123'
// num3 = true 不能将类型“true”分配给类型“string | number”


// 访问联合类型的属性或方法
const getLength = (something: string | number): number => {
    // return something.length // 类型“string | number”上不存在属性“length”。类型“number”上不存在属性“length”。
    return 1
}

//上例中，length 不是 string 和 number 的共有属性，所以会报错。
// 访问 string 和 number 的共有属性是没问题的：

const getString = (something: string | number): string => {
    return something.toString()
}