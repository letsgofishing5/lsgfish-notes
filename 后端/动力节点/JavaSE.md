## 集合

视频地址：https://www.bilibili.com/video/BV1Rx411876f?p=716&spm_id_from=pageDriver

### Iterable

> 可迭代的，可遍历的，所有集合元素都是可迭代的，可遍历的

#### Iterator

> 迭代器对象

```java
hashNext()
next()
remove()
```



#### Collection

> 所有集合继承Iterable的含义是，所有集合都是可迭代的



##### List

>List集合存储元素特点：
>有序可重复，
>存储的元素有下标
>有序实际上是说存进去是这个顺序：
>取出来还是这个顺序。
>这里的顺序不是说按照大小排序
>有序是因为List集合都有下标，
>下标从0开始，以1递增

###### ArrayList

> ArrayList集合底层采用了数组这种数据结构
> ArrayList集合是非线程安全的

###### LinkedList

> linkedList集合底层采用了双向链表数据结构

###### Vector

> vector集合底层采用了数组这种数据结构，vector是线程安全的。他的所有方法都有 synchronized关键字修饰，所以线程安全，但是效率较低，现在保证线程安全



##### Set

>Set集合存储元素特点：
>无序不可重复
>无序表示存进去是这个顺序:
>取出来就不一定是这个顺序了
>另外Set集合中元素没有下标
>Set集合中的元素还不能重复

###### HashSet

> 实际上HashSet集合在new的时候：
> 底层实际上new了一个HashMap集台
> 向HashSet集合中存储元素：
> 实际上是存储到HashMap集合中了
> HashMap集合是个哈希表数据结构

###### TreeSet

> TreeSet底层实际上是TreeMap
>
> new TreeSet集合的时候，底层实际上new 了一个 TreeMap

#### Map

> 1、Map集合和Collection集合没有关系。
> 2、Map集合以key和value的这种键值对的方式存储元素。
> 3、key和value都是存储java对象的内存地址。
> 4、所有Map集合的key特点：无序不可重复的。
> Map集合的key和Set集合存储元素特点相同。

![image-20220522134511501](JavaSE.assets/image-20220522134511501.png)

## File文件流

![image-20220522200317265](JavaSE.assets/image-20220522200317265.png)

![image-20220522200615838](JavaSE.assets/image-20220522200615838.png)

## 反射

![image-20220525220053042](JavaSE.assets/image-20220525220053042.png)

![image-20220525221746435](JavaSE.assets/image-20220525221746435.png)