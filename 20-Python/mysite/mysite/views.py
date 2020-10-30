# coding=utf-8

from django.http import HttpResponse
from django.shortcuts import render, redirect


def index_view(request):
    return HttpResponse("<h1>hello world</h1>")


def login_view(request):
    if request.method == "GET":
        import pymysql
        conn = pymysql.connect(host="127.0.0.1", port=3306, user="root", passwd="123456", db="test_db")
        cursor = conn.cursor()
        cursor.execute("select * from tb_empl")
        result = cursor.fetchall()
        return render(request, "login.html", {"msg": result})
    else:
        u = request.POST.get("user")
        p = request.POST.get("password")
        if u == "root" and p == "123":
            return redirect("/hello")
        else:
            return render(request, "login.html", {"msg": "登录错误"})