# React-classnames库

## 1.作用
- 1.1 由于react原生动态添加多个className会报错

```js
import style from './style.css'

<div className={style.class1 style.class2}</div>
```
- 1.2 想要得到最终渲染的效果是：
```js
<div class='class1 class2'></div>
```
- 1.3. 引入classnames库，安装：
```js
npm install classnames --save
```
## 4. 使用
```js
import classnames from 'classnames'

<div className=classnames({
    'class1': true,
    'class2': true
    )>
</div>
```
## 5. 其他用法
```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// 传入数组对象
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'

// 传入动态class
let buttonType = 'primary';
classNames({ [`btn-${buttonType}`]: true });
```

## 6. 对比
- 不使用 classname
```js
var Button = React.createClass({
  // ...
  render () {
    var btnClass = 'btn';
    if (this.state.isPressed) btnClass += ' btn-pressed';
    else if (this.state.isHovered) btnClass += ' btn-over';
    return <button className={btnClass}>{this.props.label}</button>;
  }
});
```
- 使用后
```js
var classNames = require('classnames');

var Button = React.createClass({
  // ...
  render () {
    var btnClass = classNames({
      btn: true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
});
```


