# 每日记录

+ SourceTree刷新远程仓库分支列表
```
git remote update origin -p
```
# CSS 知识相关
## hover 悬浮效果
    top: -4px;
    box-shadow: 0 15px 30px #e5e5e5;
    transition: translate3d(0,-2px,0);

# js 知识相关

## Eslint 使用
- vs code 安装 eslint 插件
- seting.js 设置
```
"eslint.autoFixOnSave": true,
"eslint.packageManager": "yarn",
"eslint.validate": [
  "javascript",  //  用eslint的规则检测js文件
  {
    "language": "vue",   // 检测vue文件
    "autoFix": true   //  为vue文件开启保存自动修复的功能
  },
  {
    "language": "html",
    "autoFix": true
  },
],
limengyao  19901002li
```
- 项目根目录加上 .eslintrc.js 文件
-  .eslintignore.js 通过加上这个文件，配置一些不想进行 eslint 检测的目录，用法跟 .gitignore 类似

