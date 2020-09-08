## VUE 源码解读

### Vue 的使用步骤

- 编写页面模板
    - 直接在HTMl标签中写标签
    - 使用 template
    - 使用单文件
- 创建 Vue 的实例
    - 在 vue 的构造函数中提供了 data methods computed watcher props ...
- 讲 Vue 挂载到 页面上

### 数据驱动模型

- Vue 的执行流程
    - 获得模板 模板中有坑
    - 利用Vue 构造函数中提供的数据来填坑 
- Vue 所做的事情 就是 利用我们提供的数据 和 页面中提供的模板 生成了几个新的 node元素 替换了页面中放置模板的位置




