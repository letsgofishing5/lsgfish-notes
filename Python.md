## Python下载安装

[环境 下载地址](https://www.python.org/)

[IDE下载地址](https://www.jetbrains.com/pycharm/download/#section=windows)

## Hello World

### hello py

```python
print('hello py')
#这是单行注释
'''
这是多行注释 
'''
a = input("请输入想要输入的类容")
print(type(a))#类型打印
print('输入一个int类型数字%d'%a)
print('输入一个str类型数字%s'%a)
```

##### 输入

```python
a = input("请输入想要输入的类容")
```

#####  输出

```python
print(a)
```

##### 运算符

a=5,b=2

| 运算符 | 描述                         | 实例             |
| ------ | ---------------------------- | ---------------- |
| +      | 加                           | a+b=7            |
| -      | 减                           | a-b=3            |
| *      | 乘                           | a*b=10           |
| /      | 除                           | a/b=2.5          |
| %      | 取模                         | a%b=1            |
| **     | 幂，2**3=2x2x2               | a**b=125         |
| //     | 取整除，向下取接近除数的整数 | 9//2=4；-9//2=-5 |

###  判断语句

```python
if "条件":#非0或者非空字符串为True，0或者none为 False
    print("True")
else :
    print("False")
    
if "条件":
    print("True")
elif "条件2" :
    print("False")
else :
    print("Other")
#Python以缩进来表示代码块范围

```

##### 引入外部库 

```python
import random  #引入随机库
x= random.randint(0,2) #随机生成【0-2】三个数字

```

###  for循环

Python的循环有两种，一种是for...in循环，可以依次把list或tuple中的元素迭代出来

```python
for i in range(5):
    print(i)
#打印0-5的数字
    
for i in range(1,10,3):
    print(i)
#打印1-10的数字，以三为间隔打印
```

