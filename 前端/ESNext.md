# ESNext

## 数组扩展

### 方法

##### Array.from

将类数组对象转换为真正数组



##### Array.of

将一组值转化为数组



##### Array.prototype.fill(fillVal,startIdx,endIdx)

将数组元素快速填充

```js
const arr = new Array(10).fill(0)//将数组元素全部填充为0
const arr = new Array(10).fill(0,1,5)//从下标1到下标4，将元素填充为0
const arr = new Array(10).fill(0,5)//从下标5开始到数组结束，将元素填充为0
```



##### Array.prototype.flatMap(item=>item)

指定元素进行扁平化处理

```js
const options = [
    {
        name:"崔汝鑫",
        children:[
            {
                name:"黎榕汕"
            },
            {
                name:"唐宜豪"
            }
        ]
    },
    {
        name:"龚萌",
        children:[
            {
                name:"姚艳"
            },
            {
                name:"余淼"
            }
        ]
    }
]
const arr = options.flatMap(item=>item.children)
```





## 对象扩展

### 属性表达式

```js
let name = "a"
const obj = {
    [name]:"易建政",//这里[name]是变量，代表a。
}
console.log(obj)//{a:"易建政"}
```



## Symbol

```js
const VIDEO = Symbol(),
      AUDIO = Symbol(),
      IMAGE = Symbol()
function play(type) {
    switch (type) {
        case VIDEO:
            console.log('视频播放');
            break
        case AUDIO:
            console.log('音频播放');
            break
        case IMAGE:
            console.log('图片展示');
            break
        default:
            console.log('类型不匹配');
    }
}
play(VIDEO)
```



## Iterator迭代器

实现 Iterator 接口

```js
function objPro() {
    let name = "ab"
    const obj = {
        [name]: "邹桂英",
        [Symbol.iterator]: function () {
            return {
                next() {
                    return {
                        value: 0,
                        done: true,//为true时，终止迭代
                    }
                }
            }
        }
    }
    for (let item of obj) {
        console.log('item:', item);
    }
},
```



## Set

类似于数组，成员唯一

```js
const set = new Set([1,2,3,4,6])
```

### 方法

##### has

判断是否有该元素

```js
const set = new Set([1,2,3,4])
console.log(set.has(1))
```

##### delete

删除元素

```js
set.delete(3)
```

##### clear

清空set

```js
set.clear()
```





## Map

类似于对象，是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键值

```js
const map = new Map([
    ["age",12],
    ["address","山西省晋城市阳城县寺头乡"],
    [{name:"贾甜"},"对象键值"]
])
map.set("name","文文轩")
```

方法基本同 Set

