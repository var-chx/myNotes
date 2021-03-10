# 数据可视化

## 目的
- 借助于图形化手段 清晰有效地传达和沟通信息
- 把数据从冰冷数字转换成图形, 揭示蕴涵在数据中的规律和道理

## 常见的可视化工具
- 报表类: excrl
- 商业智能BI: Microsoft BI \ Power-BI
- 编程类: echerts.js  D3.js

## Echarts.js 
### 介绍
- Echsrts 是使用 JS 实现的一个开源的可视化库 兼容性强 底层实现依赖 矢量图形库 ZRender 提供直观丰富的交互 可高度定制
- 只有我们想不到 没有 Echarts 做不到
- 社区很活跃
### 多种数据格式的支持
- key-value 形式
- 二维表
- TypeArrray 格式
### 流数据的支持 : 对于大数据量的渲染
- 动态渲染: 加载多少 渲染多少
- 增量渲染技术: differ

### Echarts 图标类型和使用场景
- bar: 描述分类数据 呈现的是每一个分类有多少
- line: 通常分析数据随时间的变化趋势
- scatter/effectScatter : 散点图 / 涟漪动画散点图 : 推断出不同维度数据的相关性 如 身高和体重的相关性(正相关) 还可以配合地图使用
- pie: 占比情况
- map: 宏观角度看出数据不同地理位置的差异
- radar 雷达图 多个维度数据对比标准数据的对比情况
- gauge 仪表盘 直观的显示出进度或实际情况

### 显示相关
#### 主题
- 内置主题 : light dark
```js
var chart = echarts.init(dom, 'dark')
```
- 自定义主题
  - 在主题编辑器中编辑主题
  - 下载主题 是一个js文件
  - var chart = echarts.init(dom, 'myTheme')
#### 调色盘的使用
- 主题调色盘: 在自定义主题的js文件中的 color:[]
- 全局调色盘: option 对象的  color: [] 
- 局部调色盘: 在 seriers 对象的 color: [] // 权重最高

#### 颜色渐变
- 线性渐变
- 径向渐变

#### 样式: itemStyle textStyle label
- 直接样式
- 高亮样式: emphasis: {}

#### 自适应
- 监听窗口
```js
window.onresize = () => {
  myCharts.resize()
}
// 或者换一种写法 函数的引用赋值
window.onrresize = mCharts.resize
```
#### 动画的使用
- 加载动画
```js
myCharts.showLoading()
myCharts.hideLoading()
```
- 增量动画
```js
// 初始化时 调用
myCharts.setOption(option)

// 当数据改变
只用设置 一部分 就可以重新设置
var option = {
  serise: [
    data: ..../
  ]
}
myCharts.setOption(option) // 就可以了

// 新旧 option 不是覆盖的关系  而是整合的关系
// 在设置的时候 只用考虑变化的部分就行了
```

- 动画开启
```js
option : {
  animation: true (默认就是 true)
}
```
- 动画时长
```js
animationDurtion: 5000 (毫秒)
```

- 缓动动画
```
animationEasing: 'liner'
```

- 动画阈值
```
animationThreshold: 7 // 单种形式的元素大于 7 就会关闭动画
```

### 交互API 
#### 全局的 echarts 对象(就是引起 echarts.js 后  window 上挂载的)
- init(dom, 主题)
- registerTheme (注册主题) // 在主题文件中使用
- registerMap 注册地图文件
- connect // 关联图表  下载时 会拼图

#### echartsInstance 对象 (init 之后返回的对象 (myEcharts))
- setOption
- resize
- on/ off
  - 绑定解绑事件处理函数
  - 鼠标事件
  - Echarts 事件
- dispatchAction 模拟用的的行为
- clear 
```
myEcharts.clear()  // 之后可以再次调用 setOption() 设置
```
- dispose // 销毁 不同于 clear
- dispose // 销毁 不同于 clear
- dispose // 销毁 不同于 clear
