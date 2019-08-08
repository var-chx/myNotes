### 1. 浮动引起元素变成行内块元素-display:inline-block
```
<div style="width: 400px;height: 200px;">
    <span style="float:left;width: auto;height: 100%;">
        <i style="position: absolute;float: left; width: 100px;height: 50px;">
            hello
        </i>
    </span>
</div>
```
>效果：
>div正常宽高
>span{width:0;height:200px}
>i{width:100px;height:50px}
>
>所有元素经过浮动变为行内块元素 -- span不是块级元素，不支持宽高,浮动后支持宽高，height:100% 即是200px。i中绝对定位，脱离文档流，不占父级空间，所以span的width:0;
>上面解析：W3C中，float会使元素产生块级框，可以理解为inline-block;但是inline-block元素之间会默认产生空白符，而flaot之间没有。虽然float脱离了文档流，但是div仍然是span的父元素，因此height:100%;也就是继承了父元素div的高度200px。i设置了postion，脱离了文档流，并不影响父元素,所以span的width:0px;
### 2. 显示不全的文字 ... 表示
```
.ellipsis {
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
```
### 3. 关于水平对齐及垂直对齐的总结
#### 水平居中：
1. 父元素是块元素，子元素是行内元素。

　　对父元素使用text-again:center 来设定行内元素水平居中。

2. 父元素是块元素，子元素是块元素且宽度已经设定。

  解法1：给子元素添加margin：0 auto；

  解法2：当父元素和子元素宽度都已知的情况下，给父元素设定padding-left或padding-rigt，或者给子元素设定margin-left或margin-right，长度为（父元素宽度-子元素宽度）/2，给父元素和子元素设定为box-sizing:border-box;可方便计算，否则得加上父元素和子元素的边框宽度。

  解法3：子元素相对父元素的决定定位来解决 (子元素 left:50%,margin-left 为负 自身的一半)
  解法4：利用给父元素设置flex
```
  .father {
     display: flex;
     flex-direction: row;
     justify-content: center;
   }
```
#### 垂直居中 : 设定父元素是块级元素 且高度是已经确定的
1. 子元素是行内元素
  给父元素或者子元素 设定line-height且其高度等于父元素的高度
2. 子元素是块级元素且高度已经设定
  利用父元素的padding 或者 子元素的margin 
3. 子元素是块级元素且高度已经设定
```
  .father {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
```


