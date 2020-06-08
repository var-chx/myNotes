# Git使用规范及分支管理

## 常用Git命令
1. 查看分支：git branch

2. 创建分支：git branch <name>

3. 切换分支：git checkout <name>

4. 创建+切换分支：git checkout -b <name>

5. 合并某分支到当前分支：git merge <name>  

6. 删除分支：git branch -d <name> 注意:删除当前分支 需要切换到其他分支   如果要删除的分支没有和当前的分支合并 会提示的 删除失败  真要删除 用 -D

## 分支管理

### gitHub https://github.com/orgs/starcloud-ai
### gitLab http://git.in-clustar.ai/
## 主要分支

### master 
+ master是线上稳定的代码分支，一般不能直接在上面修改 一直存在 对应我们的线上环境

### develop 
+ 常规开发分支, 一直存在 对应我们开发环境

## 辅助分支

### feature
+ 功能开发分支, 从develop分支而来, 然后合并入develop, 进行测试.
+ 测试过程中直到功能上线 都在此分支进行 
+ 
### hotfix
+ 修改bug 要从develop 分支checkout出 bug分支名称与jira 条目保持一致 如 [OPS-6666] bug验证通过后删除

## 如何使用各种分支

### 开发新功能 - feature
+ 从develop 分支 分出 自己的 feature分支 名称与jira 条目保持一致 如 [OPS-9999]
```
$git checkout develop
$git pull
$git checkout -b OPS-9999
$git push origin OPS-9999:OPS-9999
```
+ 开发完毕后合并回 develop分支 部署开发环境 开始测试
```
使用 New Merge Requests 方式 通知协同开发人员 review LGTM 后 合并代码 部署开发环境
```
+ 修改开发环境的bug 也在此分支进行

### 修改线上 bug
+ 一般线上出现的 bug 在 develop 也会存在 可以从 master 分支 切出来 bug分支 名称和与jira条目保持一致 如 [OPS-6666] 修改 后 在 develop 环境验证通过后 把此分支合并到master 完成 线上 bug 的修复

## 建议使用规范

### 分支上开发的commit建议合并为一个commit, 这样易读, 方便主分支管理.
### 辅助分支及时删除
### 冲突提交
+ 修改完冲突, 我们会进行commit提交冲突修改. 不要使用git commit -m, 请直接使用git commit, git会识别你这是一个冲突提交.


## 参考
+ [Git 工作流程](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
+ [Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)


    