# Django

## MVC 的理解
- MVC(Model View Controller) 是模型(model)－视图(view)－控制器(controller)
- model 主要处理与数据库交互的东西
- view 用于封装结果 内嵌了模板引擎 实现数据的动态展示
- controller 主要用于 接受 get post 请求 处理业务逻辑 与 model 和 view 交互 返回结果

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
- 启动项目
```
python3 manage.py runserver 127.0.0.1:8080
```

## Django 程序目录
```
|____mysite        
| |____asgi.py
| |______init__.py
| |______pycache__
| | |____views.cpython-37.pyc
| | |____settings.cpython-37.pyc
| | |____wsgi.cpython-37.pyc
| | |____urls.cpython-37.pyc
| | |______init__.cpython-37.pyc
| |____settings.py  # Django 配置文件
| |____urls.py      # 路由系统 函数和url的关系
| |____views.py
| |____wsgi.py      # 用于定义Django用 socket wsgiref uwsgi
|____db.sqlite3
|____manage.py
|____.idea
```

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

## 视图函数
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