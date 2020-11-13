// 任意值
// 任意值（Any）用来表示允许赋值为任意类型。
let myfavoriterNumber: any = 'seven'
myfavoriterNumber.name = 123
console.log(myfavoriterNumber.name)
myfavoriterNumber.sayHello() // 合法但是没有意义

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something
something = 'abd'
something = 123