### list新增与删除

> 技术点：事件委托

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button onclick="add()">新增 li</button>
    <ul>
        <li>li1 <a href="javascript:;">删除</a></li>
        <li>li2 <a href="javascript:;">删除</a></li>
        <li>li3 <a href="javascript:;">删除</a></li>
        <li>li4 <a href="javascript:;">删除</a></li>
    </ul>
    <script>
        const ul = document.querySelector("ul")
        ul.onclick = event => {
            console.log(event.target.nodeName);
            if (event.target.nodeName === 'A') {
                console.log(event.target.parentNode);
                event.target.parentNode.remove()
            }
        }
        function add() {
            const li = document.createElement('li')
            const a = document.createElement('a')
            a.innerText = "删除"
            a.href = 'javascript:;'
            li.innerText = `li 新增`
            li.append(a)
            ul.append(li)
        }
    </script>
</body>

</html>
```

