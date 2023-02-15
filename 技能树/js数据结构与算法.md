# 数据结构与算法

"数据结构(data structure)是计算机中存储、组织数据的方式。通常情况下，精心选择的数据结构可以带来最优效率的算法。”

#### 常见的数据结构

- 数组(Array)
- 栈(Stack)
- 链表(Linked List)
- 图(Graph)
- 散列表(Hash)
- 队列(Queue)
- 堆(Heap)
- 树(Tree)

## 数据结构

### 栈

栈(stck)又名堆栈，它是一种运算受限的**线性表**。**限定仅在表尾进行插入和删除操作的线性表**。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。

**先进后出**

#### 应用场景

1. 函数调用
2. 浏览器前进后退

```js
//进制转换
function convert(decNumber, base = 2) {
    const arr = []
    const baseStr = "0123456789ABCDEF"
    while (decNumber != 0) {
        arr.unshift(baseStr[decNumber % base])
        decNumber = Math.floor(decNumber / base)
    }
    console.log('转换后的值：', arr.join(""));
}
```



### 队列

队列是一种特殊的线性表，特殊之处在于它只允许在**表的前端(front)进行删除操作，而在表的后端(rear)进行插入操作**，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。队列中没有元素时，称为空队列。

```js
// 模拟队列数据结构
class Stack {
    #items = {}
    #idx = 0
    #begin = 0
    size = 0
    // 进栈
    push(val) {
        this.#items[this.#idx++] = val
        this.size = this.#idx
    }
    // 出栈
    shift() {
        if (this.size > 0) {
            const item = this.#items[this.#begin]
            Reflect.deleteProperty(this.#items, this.#begin++)
            this.size = this.#idx - this.#begin
            return item
        }
    }
}
```

**先进先出**

#### 应用场景

击鼓传花

```js

const arr = ['段洋', '谭晓庆', '白国贤', '蔡子璇', '戴瑾春', '赵建林', '常诗悦', '郭雨泽', '何文轩']
// 队列-击鼓传花游戏
function Result(arr, times) {
    const stack = new Stack()
    stack.shift()
    arr.forEach(item => {
        stack.push(item)
    })
    while (stack.size > 1) {
        for (let i = 0; i < times; i++) {
            stack.push(stack.shift())
        }
        console.log(`%c淘汰：${stack.shift()}`, 'background:#c12c1f;color:white;padding:2px 5px;border-radius:2px;');
    }
    console.log(`%c胜者：${stack.shift()}`, 'background:#4f6f46;color:white;padding:2px 5px;border-radius:2px;');
}
Result(arr, 6)
```



### 双端队列

对首，队尾都可以进行插入，删除操作

```js
class DeQueue {
    #items = {}
    #count = 0
    size = 0
    push(val) {
        this.#items[this.#count++] = val
        this.size++
    }
    unshift(val) {
        for (let i = this.size; i > 0; i--) {
            this.#items[i] = this.#items[i - 1]
        }
        this.#items[0] = val
        this.size++
        this.#count++
    }
    pop() {
        if (this.size <= 0) {
            return
        }
        const item = Reflect.get(this.#items, --this.#count)
        Reflect.deleteProperty(this.#items, this.#count)
        this.size--
        return item
    }
    shift() {
        if (this.size <= 0) {
            return
        }
        const item = Reflect.get(this.#items, 0)
        for (let i = 0; i < this.size; i++) {
            this.#items[i] = this.#items[i + 1]
        }
        Reflect.deleteProperty(this.#items, --this.#count)
        this.size--
        return item
    }
}
const deQ = new DeQueue()
deQ.push("史诗悦")
deQ.push("邹欣汝")
deQ.push("萧强")
deQ.push("谭晶滢")
deQ.push("邵明远")
deQ.unshift("朱秀兰")
deQ.shift()
deQ.pop()
console.log('deQ:', deQ);
```



### 单链表封装

#### 特点

1. 有一个表头
2. 插入、删除效率高，随机访问效率低
3. 和数组相比，内存空间消耗更大，

```tsx
class SigleNode {
  data: any;
  next: SigleNode | null;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  head: SigleNode | null;
  count: number;
  constructor() {
    this.head = null;
    this.count = 0;
  }
  // 插入操作
  insert(data: any, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new SigleNode(data);
      let currentNode = this.head;
      let previous: SigleNode | null;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
        this.count++;
        return true;
      } else {
        for (let i = 0; i <= this.count; i++) {
          if (i === index) {
            previous!.next = node;
            node.next = currentNode;
            this.count++;
            return true;
          }
          previous = currentNode;
          currentNode = currentNode?.next || null;
        }
      }
    }
    return false;
  }
  // 链表添加
  push(data: any) {
    const node = new SigleNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.count++;
  }
  remove(data: any) {
    // 先找到对应下标
    const idx = this.indexOf(data);
    if (idx !== -1) {
      return this.removeAt(idx);
    }
    return -1;
    // 根据下标删除
  }
  indexOf(data: any) {
    let currentNode = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.equals(currentNode?.data, data)) {
        return i;
      }
      currentNode = currentNode?.next || null;
    }
    return -1;
  }
  equals(data1: any, data2: any) {
    return data1 === data2;
  }
  // 链表删除:根据下标来删除
  removeAt(index: number) {
    if (index >= 0 && this.count > index) {
      let currentNode = this.head;
      let previous: SigleNode | null;
      if (index === 0) {
        currentNode = currentNode?.next || null;
        this.head = currentNode;
        return 0;
      } else {
        for (let i = 0; i < this.count; i++) {
          if (i === index) {
            previous!.next = currentNode?.next || null;
            this.count--;
            return i;
          }
          previous = currentNode;
          currentNode = currentNode?.next || null;
        }
      }
    }
    return -1;
  }
}
const link = new LinkedList();
link.push(100);
link.push(200);
link.push(300);
link.push(400);
console.log("link:", link);
```





### 双向链表



