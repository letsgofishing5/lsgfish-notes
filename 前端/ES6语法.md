# ES6语法

### 块级作用域

1. var会导致变量提升，他允许重复声明
2. let具有块级作用域，不允许重复声明，不允许变量提升
3. const：声明常量

### 对象解构赋值

```html
<script>
	let [abc=true]=[]
    //默认赋值true，在后面[]中写上false，则abc=false
</script>
```

```html
<script>
	let [length:len]="hello"
    console.log(len)
    //length赋值给len，从前往后赋值
    
    var str="cth";
    for(let i of str){//of,取得的值是内容，in，取得的值是下标
        console.log(i)
    }
</script>
```

#### 模板字符串

```html
<script type="text/javascript">
    var name="zs"
    var age=23
    console.log(`姓名：${name},年龄：${age}`)
</script>
```

### 数组

#### 展开运算符

```html
<script type="text/javascript">
    var array=[3,2,5,6,23,34]
    var array2=[3,2,5,6,23,34]
    console.log(array,array2)
    console.log(...array,...array2)
</script>
```

#### Array.from();将类数组转换成真正的数组

```html
<script type="text/javascript">
    function interator(){
        console.log(arguments)
    }
    interator(1,2,3);
</script>
```

#### Array.of()

将一组值，转换成数组

```html
<script type="text/javascript">
    var a=Array.of(3,2,5,24)
    console.log(a)
</script>
```

### 容器

set容器，和Java一样，不可重复

map容器，和Java一样，键值对存储

```html
<script type="text/javascript">
   var set=new Set();
    console.log(set.__proto__)
    var map=new Map();
    console.log(map.__proto__)
</script>
```

