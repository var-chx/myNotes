// 添加订阅者 定义通知的方法
class Dep{
    constructor() {
        this.subs = []
    }
    // 添加订阅者 也就是收集 watcher
    addSub(watcher){
        this.subs.push(watcher);
    }
    // 通知变化
    notify(){
        // 观察者中有个update方法 来更新视图
        this.subs.forEach(w=>w.update());
    }
}

// 添加 watcher 

class Watcher{
    constructor(vm,expr,cb) {
        // 观察新值和旧值的变化,如果有变化 更新视图
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        // 先把旧值存起来  
        this.oldVal = this.getOldVal();
    }
    getOldVal(){
        Dep.target = this;
        let oldVal = compileUtil.getVal(this.expr,this.vm);
        Dep.target = null;
        return oldVal;
    }
    update(){
        // 更新操作 数据变化后 Dep会发生通知 告诉观察者更新视图
        let newVal = compileUtil.getVal(this.expr, this.vm);
        if(newVal !== this.oldVal){
            this.cb(newVal);
        }
    }
}

// 创建一个数据监听者  劫持并监听所有数据的变化
class Observer{
    constructor(data) {
        this.observe(data);
    }
    observe(data){
        // 如果当前data是一个对象才劫持并监听
        if(data && typeof data === 'object'){
            // 遍历对象的属性做监听
            Object.keys(data).forEach(key=>{
                this.defineReactive(data,key,data[key]);
            })
            
        }
    }
    defineReactive(obj,key,value){
        // 循环递归 对所有层的数据进行观察
        this.observe(value);//这样obj也能被观察了
        const dep = new Dep();
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set:(newVal)=>{
                if (newVal !== value){
                    // 如果外界直接修改对象 则对新修改的值重新观察
                    this.observe(newVal);
                    value = newVal;
                    // 通知变化
                    dep.notify();
                }
            }
        })
    }
}
