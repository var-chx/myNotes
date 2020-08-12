# coding=utf-8

from django.http import HttpResponse


def index_view(request):
    return HttpResponse("<h1>hello world</h1>")
