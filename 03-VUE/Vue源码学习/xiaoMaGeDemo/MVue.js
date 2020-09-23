class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        // 获取文档碎片对象 放入内存中会减少页面的回流和重绘
        
    }
    isElementNode (node) {
        return node.nodeType === 1 // 如果是1 就说明是 元素节点
    }
}

class MVue {
    constructor(options) {
        this.$el = options.el
        this.$data = options.data
        this.$options = options
        if (this.$el) {
            // 现实一个数据观察者
            // 实现一个指令解析器
            new Compile(this.$el, this)
        }
    }
}