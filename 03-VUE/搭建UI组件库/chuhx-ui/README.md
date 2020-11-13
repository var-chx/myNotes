# chuhx-ui

## 在 main 中引入 
```js
import Chuhx from 'chuhx-ui'
import 'chuhx-ui/dist/chuhx-ui.css'
Vue.use(Chuhx)
```

## 使用 

```js
<div class="row">
    <hx-button >按钮</hx-button>
    <hx-button type="primary">按钮</hx-button>
    <hx-button type="success">按钮</hx-button>
    <hx-button type="info">按钮</hx-button>
    <hx-button type="danger">按钮</hx-button>
    <hx-button type="warning">按钮</hx-button>
</div>
<div class="row">
    <hx-button plain>按钮</hx-button>
    <hx-button plain type="primary">按钮</hx-button>
    <hx-button plain type="success">按钮</hx-button>
    <hx-button plain type="info">按钮</hx-button>
    <hx-button plain type="danger">按钮</hx-button>
    <hx-button plain type="warning">按钮</hx-button>
</div>
<div class="row">
    <hx-button round plain>按钮</hx-button>
    <hx-button round plain type="primary">按钮</hx-button>
    <hx-button round plain type="success">按钮</hx-button>
    <hx-button round plain type="info">按钮</hx-button>
    <hx-button round plain type="danger">按钮</hx-button>
    <hx-button round plain type="warning">按钮</hx-button>
</div>
<div class="row">
    <hx-button circle plain>按</hx-button>
    <hx-button circle plain type="primary">按</hx-button>
    <hx-button circle plain type="success">按</hx-button>
    <hx-button circle plain type="info">按</hx-button>
    <hx-button circle plain type="danger">按</hx-button>
    <hx-button circle plain type="warning">按</hx-button>
</div>

```