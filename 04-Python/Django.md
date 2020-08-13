# Django

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
    - 在根目录创建 template 文件夹
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