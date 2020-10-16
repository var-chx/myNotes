# Django

## MVC 的理解
- MVC(Model View Controller) 是模型(model)－视图(view)－控制器(controller)
- model 主要处理与数据库交互的东西
- view 用于封装结果 内嵌了模板引擎 实现数据的动态展示
- controller 主要用于 接受 get post 请求 处理业务逻辑 与 model 和 view 交互 返回结果
## MVT 
- 但是 Django 遵循的是M(一样) V(处理数据和 C 相同) T (template 展示页面)

## 创建项目
- 安装 Django : 
```
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple Django

// -i https://pypi.tuna.tsinghua.edu.cn/simple 是指定清华镜像源
```
- 创建项目
```
django-admin startproject mysite
```

- 创建应用
```
python3 manage.py startapp testName
```
- 应用的注册
```
// 使得应用和项目建立联系
修改 settins.py 中 INSTALLED_APPS

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'testDemo'  # 注册应用
]

```
- 启动项目
```
python3 manage.py runserver 127.0.0.1:8080
```

## Django 程序目录
```
|____mysite        
| |____asgi.py
| |______init__.py  // 说明是一个python的包
| |______pycache__
| | |____views.cpython-37.pyc
| | |____settings.cpython-37.pyc
| | |____wsgi.cpython-37.pyc
| | |____urls.cpython-37.pyc
| | |______init__.cpython-37.pyc
| |____settings.py  # Django 配置文件 比如使用什么数据库
| |____urls.py      # 路由系统 函数和url的关系
| |____views.py
| |____wsgi.py      # 用于定义Django用 socket wsgiref uwsgi 就是 web服务器和 Django 交互的入口
|____db.sqlite3
|____manage.py // 项目的管理文件  管理整个 Django 项目
|____.idea
```

## ORM 框架

### Object: 对象 - 类
### Mapping: 映射 使得对象中 类 和 Relations 相关联 就不需要写 sql 语句了
### Relations: 关系 关系数据库中的表
- 设计和表对应的类  模型类
```
// 在应用的 models.py 中

from django.db import models

# Create your models here.

class BookInfo(models.Model):
    btitle = models.CharField(max_length=20)
    bpub_date = models.DateField()

```
- 制作迁移文件
```
python3 manage.py makemigrations

```
- 执行迁移文件
```
python3 manage.py migrate

```
- 命令行 写 shell 脚本  修改数据库中的表
```
python3 manage.py shell

from testName.models import BookInfo
// 然后就可以操作BookInfo了

注意: 关联属性赋值  必须是一个跟它关联的对象 h.hbook = b


```

## 后台管理
- 语言和时区本地化 修改 settings.py 文件
```
# LANGUAGE_CODE = 'en-us'

LANGUAGE_CODE = 'zh-hans'

# TIME_ZONE = 'UTC'
TIME_ZONE = 'Asia/shanghai'
```
- 创建管理员
```
python3 manage.py createsuperuser

```
- 注册模型类
    - 在 应用下的 admin.py 中注册
    - 想要显示各个字段  需要 自定义模型管理类
    list_display = ['id', 'btitle']


# 配置
- 模板路径
    ```
    - 在根目录创建 template 文件
    - settings.py TEMPLATES 'DIRS': [os.path.join(BASE_DIR, 'templates')],
    ```
- 静态文件路径      
```
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static')
),

```

- 额外配置 注释 settings.py 的一行
```
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

## 路由关系
- url -> 函数

## 视图函数 wiews.py
```
def index(request): 

    # 关于获取的请求信息
    request.method # POST GET
    val = request.POST.get('title') # 获取前端的 title
    val = request.GET.get('title') # 获取前端的 title

    # 关于返回值 
    # 注意使用前 先 引入 'from django.shortcuts import render, redirect, HttpResponse'
    return redirect ('URL) # 重定向
    return render(request, '模板路径', {}) # 可以使用模板
    return HttpResponse

```

## 模板语法 略... 

## Django 中使用 mysql 数据库

- 修改 settings.py
```
DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
    }
}

```
### 关于查询
- get函数
```
返回一条且只能是一条数据
BookInfo.objects.get(id=1)
```
- all 函数
```
返回所有数据
```
- filter 函数
```
返回满足条件的数据
例：查询书名中包含‘传’的图书。 BookInfo.objects.filter(btitle__contains=‘传’)
同理的开头结尾用__startwith,__endwith
```
- order_by 函数
```
对查询结果进行排序
```
- F 对象
```
用于类属性 之间的比较
使用前先导入
from django.db.models import F
使用场景:
1. 查询图书阅读量大于评论量的信息
2. 插叙图示阅读量大于2倍评论量的信息
```
- Q 对象
```
用于查询时条件的 逻辑关系 not , and , or。可以对Q对象进行 ~ & | 的操作。
使用前先导入
from django.db.models import Q
使用场景:
1. 查询id大于3 且 阅读量大于 30 的信息
BookInfo.objects.filter(id__gt = 3, bread__=30)

```
- 聚合函数 aggregate
```
sum count avg max min
可以查询 某个阅读量的总和
使用场景
1. 统计所有图书的数目
from django.db.models import Count
BookInfo.objects.all().aggregate(Count('id'))
返回值是一个字典 {id__conut: 5}
```
### 查询集
- all, filter, exclude, order_by调用这些函数会产生一个查询集，QuerySet类对象可以继续调用上面的所有函数。
- 特性
    1. 惰性查询：只有在实际使用查询集中的数据的时候才会发生对数据库的真正查询。
    2. 缓存：当使用的是同一个查询集时，第一次使用的时候会发生实际数据库的查询，然后把结果缓存起来，之后再使用这个查询集时，使用的是缓存中的结果。
- 取出查询集的第一条数据
```
b[0]	如果b[0]不存在，会抛出IndexError异常
b[0:1].get()	如果b[0:1].get()不存在，会抛出DoesNotExist异常。

```
- exists: 判断一个查询集中是否有数据。True False

### 模型类之间的关系
【参考】https://docs.djangoproject.com/zh-hans/3.0/topics/db/examples/
- 一对多
例: 图书类-英雄类
models.ForeignKey() 定义在多的类中
```py
```








## 参考
1. [Django笔记](https://www.cnblogs.com/chenxi188/category/1630372.html)