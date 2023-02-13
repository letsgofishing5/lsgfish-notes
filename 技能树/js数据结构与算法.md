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

1. 插入、删除效率高，随机访问效率低
2. 和数组相比，内存空间消耗更大，

```tsx
class LinkedList {
  head: CusNode | null;
  count: number;
  constructor() {
    this.head = null;
    this.count = 0;
  }
  push(element: PropertyKey) {
    const node = new CusNode(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  remove(element: any) {
    const idx = this.indexOf(element);
    if (idx != -1) {
      this.removeAt(idx);
    }
  }
  equals(obj: any, obj2: any) {
    return obj === obj2;
  }
  indexOf(element: any) {
    let i = 0;
    let current = this.head;
    for (; i < this.count; i++) {
      if (this.equals(current?.element, element)) {
        break;
      }
      current = current?.next || null;
    }
    return i === this.count ? -1 : i;
  }
  removeAt(index: number) {
    let current = this.head;
    let i = 0;
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        this.head = this.head?.next || null;
      } else {
        let pre: CusNode | null;

        for (; i < index; i++) {
          pre = current;
          current = current?.next || null;
        }
        pre!.next = current?.next || null;
      }
      this.count--;
      return i;
    }
    return -1;
  }
  // 任意位置插入
  insert(element: PropertyKey, index: number) {
    let current = this.head;
    const node = new CusNode(element);
    if (index === 0) {
      node.next = current;
      this.head = node;
      this.count++;
      return true;
    } else if (index > 0 && index <= this.count) {
      for (let i = 0; i < this.count; i++) {
        let previous = current;

        if (i === index - 1) {
          node.next = current?.next || null;
          previous!.next = node;
          break;
        }
        current = current?.next || null;
      }
      this.count++;
      return true;
    } else {
      return false;
    }
  }
}
class CusNode {
  element: PropertyKey;
  next: CusNode | null;
  constructor(element: PropertyKey) {
    this.element = element;
    this.next = null;
  }
}

const list = new LinkedList();
list.insert(100, 0);
list.insert(200, 1);
list.insert(300, 2);
list.insert(400, 2);
list.insert(500, 2);

console.log("list:", list);
```

