from django.contrib import admin
from testName.models import BookInfo


# 自定义模型管理类
class BookInfoAdmin(admin.ModelAdmin):
    list_display = ['id', 'btitle', 'bpub_date']

# Register your models here.
admin.site.register(BookInfo, BookInfoAdmin)
