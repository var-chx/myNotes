// 类型断言
// 语法
interface Cat {
    name: string
    run(): void
}
interface Fish {
    name: string
    swin(): void
}
function isFish (animal: Cat | Fish ) {
    if ( typeof (animal as Fish).swin === 'function' ) {
        return true
    }
    (animal as Fish).swin()
    return false
}
console.log(isFish({name: '111', swin: function(){console.log(123)}}))

// console.log(isFish({name: '111', run: function(){console.log(123)}}))  // 编译是断言了 不会报错 但是运行时 没有 swin 就报错了

//
