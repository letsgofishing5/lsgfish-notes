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

### while循环

```python
count = 10
while count<5:
    print(count,"小于5")
    count += 1
else:
    print(count,"大于或者等于5")
```

### break、continue、pass语句

1. break语句可以跳出 for和while的循环体
2. continue语句跳过当前循环，直接进行下一轮循环
3. pass是空语句，一般用做占位语句，不做任何事情

### 字符串

#### 单引号

```python
z = '\'单引号'
print(z)
```

####  双引号

```python
x = "双引号"
print(x)
```

#### 三引号

```python
y = """
		三引号
		"""
print(y)
```

#### 方法

##### 截取

```python
str = 'hello python'
print(str)
print(str[0:5])#[起始位置:结束位置:进步值]
print(str[0:8:2])
print(str[:5])#0~5
print(str[5:])#5~最后
```

##### 取消转义

```python
print(r"hello \n python")#以r开头，引号类的所有类容都会获取，不会进行转义处理
```

##### 字符串重复打印

```python
print("hello "*3)#hello hello hello
```

### 列表

列表可以完成大多数集合类的数据结构实现。

列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。

列表是写在方括号门之间、用逗号分隔开的元素列表。列表索引值以О为开始值，-1为从末尾的开始位置

列表可以使用+操作符进行拼接，使用*表示重复。

```python
nameList = ["张三","李四","王二麻"]
print(nameList[0])

testList = [1,"haha"]#列表 可以存储混合类型
print(type(testList[0]))#查看类型
print(type(testList[1]))
```

#### 常用方法

##### 追加append

```python
a = [1,2]
a.append(3)
```

##### 逐一追加extend

```python
a = [1,2]
b = [3,4]
a.append(b)#[1,2,[3,4]]
a.extend(b)#[1.2,3,4]
```

##### 插入insert

```python
a = [1,2,3]
a.insert(1,3)#1是插入下标的位置，3是插入的元素
print(a)
```

##### 删除del、pop、remove

```python
a = [1,2,3,4]
del a[2]#删除下标为2的元素
print(a)

b = [1,2,3,4,5]
b.pop()#删除末尾的一个元素

c = ["张三","李四","王五"]
c.remove("张三")#删除指定内容的元素
print(c)
```

##### 修改

指定下标重新赋值

```python
a = [1,2,3,4,5]
a[1] = 10
print(a)
```

##### 查找【in，not in】

```python
findName = input("请输入你要寻找的姓名：")
nameList  = ["张三","李四"]
if findName in nameList:
    print("找到了相同的名字")
else:
    print("没有找到")
```

##### 查找返回下标 index

```python
a = [1,2,3,4,5,6,7,8]
print(a.index(1,2,4))#第一个位置是查找的元素，第二、三个是查询的范围，左闭右开，找不到会报错
```

##### 查询列表中出现的次数

```python
a = [1,2,3,4,5,6,7,8]
print(a.count(1))#返回1这个元素在列表中出现的次数
```

##### 排序

```python
a = [2,7,4,3,6,2,3]
a.sort()#升序
a.sort(reserve=True)#降序排列
```

### 元组 tuple

```python
tup = (1,)#声明一个元组
print(type(tup))

tup = (1,2,3,4,5,6)
print(tup[0])
```

##### 增

```python
tup1 = (1,)
tup2 = (2,)
tup = tup1+tup2
print(tup)
```

##### 删除

```python
tup1 = (1,2,3,4)
del tup1 #直接删除了tup1，整个元组
```

#### 字典 dict

1. 字典是无序的对象集合，使用键-值( key-value )存储，具有极快的查找速度。
2. 键(key)必须使用不可变类型。
3. 同一个字典中，键(key)必须是唯一的。

```python
info = {"name":"张三丰","age":123}
print(info["age"])
print(info.get("name"))#如果键不存在，返回None
print(info.get("name","默认值"))#如果键不存在，返回：默认值
```

##### 增

```python
info = {"name":"张三丰"}
info["age"]=23
```

##### 删

```python
del info["name"] #删除键值对

info.clear() #清空
```

##### 查

```python
info.keys() #获取所有key
info.values() #获取所有的value 
info.items() #获取所有项，每一键值对都是一个元组
```

#### 数据类型总结

|           | 是否有序 | 是否可变类型       |
| --------- | -------- | ------------------ |
| 列表   [] | 有       | 可变类型           |
| 元组（）  | 有       | 不可变类型         |
| 字典  {}  | 无       | key不可变，val可变 |
| 集合  {}  | 无       | 可变类型（不重复） |

### 函数

#### 定义函数

```python
def 函数名():
    代码
```

#### Demo

```python
def fun():
    print("hello python")
    
fun()
```

##### 带参函数

```python
def add(a,b):
    print(a)
    return a+b
```

##### 返回多个值的函数

```python
def divid(a,b):
    shang =  a//b
    yushu = a%b
    return shang,yushu #返回多个值

sh,yu =  divid(11,12) #接收多个值
```

