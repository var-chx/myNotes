# Mysql
## 术语
- 数据库: 数据库是一些关系表的集合
- 数据表: 表是数据的矩阵 在一个数据库中的表看起来像一个简单的电子表格
- 列: 一列(数据元素) 包含相同类型的数据 例如 邮政编码的数据
- 行: 一行 (= 元组, 或记录) 是一组相关的数据 例如一条用户订阅的数据
- 冗余: 存储两倍数据 降底了性能 但是提高了数据的安全性
- 主键: 主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据
- 外键: 外键用于关联两个表
- 复合件: 复合键（组合键）将多个列作为一个索引键，一般用于复合索引
- 索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
- 参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。

## docker 下 拉取镜像
```
docker pull mysql  # 拉取最新镜像
```
## 检查镜像是否拉取成功
```
docker images
```
## 一般来说数据库容器不需要建立目录映射
```
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql

    # –name：容器名，此处命名为mysql
    # -e：配置信息，此处配置mysql的root用户的登陆密码
    # -p：端口映射，此处映射 主机3306端口 到 容器的3306端口
```
## 链接mysql
```
docker exec -it mysql bash
mysql -uroot -p123456
```
## 退出 sql 命令行
```
quit; 或者使用 ctrl + c
```
## 常用命名
- 创建数据库 create database test_db
- 使用数据库 use test_db
- 创建表
```
> create table tb_empl
    -> (
    -> id int(11),
    -> name varchar(25),
    -> deptId int(11),
    -> salary float
    -> );
```
- 查看表 show tables
```
mysql> show tables;

+-------------------+
| Tables_in_test_db |
+-------------------+
| tb_empl           |
+-------------------+
```
- 查看表结构 dece tb_empl
```
mysql> desc tb_empl;

+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int         | YES  |     | NULL    |       |
| name   | varchar(25) | YES  |     | NULL    |       |
| deptId | int         | YES  |     | NULL    |       |
| salary | float       | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+

其中，各个字段的含义如下：
# Null：表示该列是否可以存储 NULL 值。
# Key：表示该列是否已编制索引。PRI 表示该列是表主键的一部分，UNI 表示该列是 UNIQUE 索引的一部分，MUL 表示在列中某个给定值允许出现多次。
# Default：表示该列是否有默认值，如果有，值是多少。
# Extra：表示可以获取的与给定列有关的附加信息，如 AUTO_INCREMENT 等。
```
## 使用 SHOW CREATE TABLE 查看表 tb_emp1 的详细信息
```
mysql> show create table tb_empl;

+---------+--------------------------------------------------------------+
| Table   | Create Table                                                 |
+---------+--------------------------------------------------------------+
| tb_empl | CREATE TABLE `tb_empl` (
  `id` int DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL,
  `deptId` int DEFAULT NULL,
  `salary` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+---------+--------------------------------------------------------------+
1 row in set (0.00 sec)
```

