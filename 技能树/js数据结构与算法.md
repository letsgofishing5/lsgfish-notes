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

**先进先出**

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

1. 有一个表头，加单向指针节点模型
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

1. 有一个首节点 head，一个尾节点 tail；还有一个双向指针节点模型

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
  getNodeAt<T>(index: number): T | undefined {
    let currentNode = this.head;
    for (let i = 0; i < this.count; i++) {
      if (index === i) {
        return <T>currentNode;
      }
      currentNode = currentNode?.next || null;
    }
    return;
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

// 双向链表
class DoubleLinkedList extends LinkedList {
  tail: DoubleNode | null;
  head: DoubleNode | null;
  constructor() {
    super();
    this.tail = null;
    this.head = null;
  }
  // 链表添加
  push(data: any): void {
    const node = new DoubleNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // 精髓代码片段
      this.tail!.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.count++;
  }
  // insert插入方法
  insert(data: any, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new DoubleNode(data);
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
          this.count++;
          return true;
        } else {
          // 精髓代码
          node.next = this.head;
          this.head.previous = node;
          this.head = node;
          this.count++;
          return true;
        }
      } else if (index === this.count) {
        this.tail!.next = node;
        node.previous = this.tail;
        this.tail = node;
        this.count++;
        return true;
      } else {
        const currentNode = this.getNodeAt<DoubleNode>(index);
        const previous = currentNode?.previous;
        node.next = currentNode || null;
        currentNode!.previous = node;
        previous!.next = node;
        node.previous = previous || null;
        this.count++;
        return true;
      }
    }
    return false;
  }
  // 链表删除 通过下标删除
  removeAt(index: number): any {
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        if (this.count === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = <DoubleNode>this.head?.next || null;
          this.head.previous = null;
        }
        this.count--;
        return 0;
      } else if (index === this.count - 1) {
        this.tail = <DoubleNode>this.tail?.previous || null;
        this.tail.next = null;
        return --this.count;
      } else {
        let currentNode = this.getNodeAt<DoubleNode>(index);
        let next = <DoubleNode>currentNode?.next;
        let previous = <DoubleNode>currentNode?.previous;
        previous!.next = next;
        next.previous = previous;
        this.count--;
        return index;
      }
    }
    return;
  }
}
class DoubleNode extends SigleNode {
  previous: SigleNode | null;
  constructor(data: any) {
    super(data);
    this.previous = null;
  }
}
const dbLink = new DoubleLinkedList();
console.log("dbLink.insert(100, 0):", dbLink.insert(100, 0));
console.log("dbLink.insert(200, 0):", dbLink.insert(200, 0));
// console.log("dbLink.insert(300, 0):", dbLink.insert(300, 0));
// console.log("dbLink.insert(300, 0):", dbLink.insert(400, 2));
// console.log("dbLink.insert(300, 0):", dbLink.insert(500, 2));

console.log("dbLink:", dbLink);

```



### 循环列表

循环链表和单链表之间唯一的区别在于，最后一个元素指向下一个元素的指针（tail.next）不是引用undefined,而是指向第一个元素（head）

![image-20230216114647199](./js数据结构与算法.assets/image-20230216114647199.png)



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
  getNodeAt<T>(index: number): T | undefined {
    let currentNode = this.head;
    for (let i = 0; i < this.count; i++) {
      if (index === i) {
        return <T>currentNode;
      }
      currentNode = currentNode?.next || null;
    }
    return;
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

// 双向链表
class CircleLinkedList extends LinkedList {
  constructor() {
    super();
  }
  // 链表添加
  push(data: any): void {
    const node = new SigleNode(data);
    if (this.head === null) {
      this.head = node;
      node.next = this.head;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.head && currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      node.next = this.head;
      currentNode.next = node;
    }
    this.count++;
  }
  // insert插入方法
  insert(data: any, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new SigleNode(data);
      if (this.head === null) {
        this.head = node;
        node.next = this.head;
      } else if (index === 0) {
        let currentNode = this.head;
        node.next = currentNode;
        const endNode = this.getNodeAt<SigleNode>(this.count - 1);
        this.head = node;
        if (!endNode) {
          return false;
        }
        endNode!.next = this.head;
      } else {
        const previous = this.getNodeAt<SigleNode>(index - 1);
        const currentNode = previous?.next || null;
        previous!.next = node;
        node.next = currentNode;
      }

      this.count++;
      return true;
    }
    return false;
  }
  // 链表删除 通过下标删除
  removeAt(index: number): any {
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        let currentNode = this.head;
        this.head = currentNode?.next || null;
        if (!this.head) {
          return false;
        }
        currentNode!.next = this.head;
      } else if (index === this.count - 1) {
        const endNode = this.getNodeAt<SigleNode>(index - 1);
        if (!endNode) {
          return false;
        }
        endNode!.next = this.head;
      } else {
        let previous = this.getNodeAt<SigleNode>(index - 1);
        let currentNode = previous!.next || null;
        if (!currentNode) {
          return false;
        }
        previous!.next = currentNode.next;
      }
      this.count--;
      return true;
    }

    return false;
  }
}
const circleLink = new CircleLinkedList();
circleLink.push(100);
circleLink.push(200);
circleLink.push(300);
circleLink.push(400);
circleLink.push(500);
console.log("circleLink:", circleLink);
```





### 集合

集合是由一组**无序且唯一**（即不能重复）的项组成的。

自定义集合实现

```tsx
class MySet {
  items: object;
  constructor() {
    this.items = {};
  }
  add(data: PropertyKey) {
    if (!this.has(data)) {
      return Reflect.set(this.items, data, data);
    }
    return false;
  }
  delete(data: any) {
    if (this.has(data)) {
      return Reflect.deleteProperty(this.items, data);
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  values() {
    return Object.values(this.items);
  }
  has(data: any) {
    return data in this.items;
  }
}
const s = new MySet();
s.add(100);
s.add(200);
s.add(300);
console.log("s:", s);

```



### 字典数据结构

字典和集合很相似，集合以 **[值，值]** 的形式存储元素，字典则是以 **[键，值]** 的形式来存储元素。字典也称作映
射、符号表或关联数组。



### 散列表

HashMap类，它是Dictionary类的一种散列表实现方式。散列算法的作用是尽可能快地在数据结构中找到一个值。

```tsx
hashCode(key: any) {
    const str = key.toString();
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = hash * 33 + str.charCodeAt(i);
    }
    return hash % 1013;
}
```



### 树

树是一种分层数据的抽象模型

![image-20230220104744876](./js数据结构与算法.assets/image-20230220104744876.png)

#### 二叉树

二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点

#### 二叉搜索树

二叉搜索树(BST)是二叉树的一种，但是只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储(比父节点)天的值。

**有一个根节点模型和一个节点模型**

**左小右大**



##### 遍历

- 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。中序遍历的一种应用就是对树进行排序操作。
- 先序遍历是以优先于后代节点的顺序访问每个节点的。先序遍历的一种应用是打印一个结构化的文档。
- 后序遍历则是先访问节点的后代节点，再访问节点本身。后序遍历的一种应用是计算一个目录及其子目录中所有文件所占空间的大小。





```tsx
class SingleNode {
  root: number;
  left: SingleNode | null;
  right: SingleNode | null;
  constructor(root: number) {
    this.root = root;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  root: SingleNode | null;

  constructor() {
    this.root = null;
  }
  insert(key: number) {
    if (this.root === null) {
      this.root = new SingleNode(key);
    } else {
      this.insertTree(key, this.root);
    }
  }
  insertTree(key: number, tree: SingleNode) {
    if (tree.root > key) {
      if (tree.left === null) {
        tree.left = new SingleNode(key);
      } else {
        this.insertTree(key, tree.left);
      }
    } else if (tree.root < key) {
      if (tree.right === null) {
        tree.right = new SingleNode(key);
      } else {
        this.insertTree(key, tree.right);
      }
    }
  }
  // 遍历
  order(callback: (val: any) => void) {
    this.inOrderMap(this.root!, callback);
  }
  inOrderMap(root: SingleNode, callback: (val: any) => void) {
    if (root != null) {
      this.inOrderMap(root.left!, callback);
      callback(root.root);
      this.inOrderMap(root.right!, callback);
    }
  }

  // 查询
  find(key: number) {
    if (this.root != null) {
      return this.findTreeNode(key, this.root);
    }
    return false;
  }
  findTreeNode(key: number, root: SingleNode): boolean {
    if (root != null) {
      if (root.root === key) {
        return true;
      }
      return (
        this.findTreeNode(key, root.left!) ||
        this.findTreeNode(key, root.right!)
      );
    }
    return false;
  }

  // 删除
  remove(key: number) {
    this.root = this.removeTreeNode(key, this.root);
  }
  removeTreeNode(key: number, treeNode: SingleNode | null): null | SingleNode {
    if (treeNode === null) {
      return null;
    }
    /**
     * 三种情况：
     * 第一种情况，开头被删了，需要找到右侧最小的节点，把该节点移到删除的节点位置
     * 第二种情况，末端被删了，置空
     * 第三种情况，中间节点被删除，找到该节点右侧最小节点，对其进行删除操作，并将期移动到中间被删除的节点位置
     */
    if (treeNode.root > key) {
      treeNode.left = this.removeTreeNode(key, treeNode.left!);
      return treeNode;
    } else if (treeNode.root < key) {
      treeNode.right = this.removeTreeNode(key, treeNode.right!);
      return treeNode;
    } else {
      // 末端节点
      if (treeNode.left === null && treeNode.right === null) {
        return null;
      }
      // 只有右侧节点
      else if (treeNode.left === null) {
        return treeNode.right;
      }
      // 只有左侧节点
      else if (treeNode.right === null) {
        return treeNode.left;
      }
      // 左右节点都有
      else {
        let minRight = this.min(treeNode.right!);
        minRight.right = this.removeTreeNode(minRight.root, treeNode.right);
        minRight.left = treeNode.left;
        treeNode = minRight;
        return treeNode;
      }
    }
  }
  min(treeNode: SingleNode): SingleNode {
    if (treeNode.left !== null) {
      return this.min(treeNode.left!);
    }
    return treeNode;
  }
}
const tree = new Tree();
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(9);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(10);
tree.insert(11);
console.log("tree:", tree);
```



#### 二叉堆

二叉堆是一种特殊的二叉树，有以下两个特性。

- 它是一棵完全二叉树，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶节点），**并且最后一层的叶节点尽可能都是`左侧子节点`**，这叫作**结构特性**

- 二叉堆不是最小堆就是最大堆。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值。所有的节点都大于等于（最大堆）或小于等于（最小堆）每个它的子节点。这叫作**堆特性**。

  ![image-20230221102205736](./js数据结构与算法.assets/image-20230221102205736.png)



```tsx
class MinHeap {
  heap: Array<number>;
  constructor() {
    this.heap = [];
  }
  getRightIndex(idx: number) {
    return 2 * idx + 2;
  }
  getLeftIndex(idx: number) {
    return 2 * idx + 1;
  }
  getParentIndex(idx: number) {
    return Math.floor((idx - 1) / 2);
  }
  // 新增插入
  insert(data: number) {
    if (data != null) {
      this.heap.push(data);
      this.shiftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  // 删除：删除根元素
  extract() {
    if (this.heap.length === 0 || this.heap.length === 1) {
      return null;
    }
    this.heap[0] = this.heap.pop()!;
    this.shiftDown(0);
  }
  shiftDown(idx: number) {
    let current = idx;
    let leftIdx = this.getLeftIndex(idx);
    let rightIdx = this.getRightIndex(idx);
    if (leftIdx < this.heap.length && this.heap[idx] > this.heap[rightIdx]) {
      current = rightIdx;
    }
    if (rightIdx < this.heap.length && this.heap[idx] > this.heap[leftIdx]) {
      current = leftIdx;
    }

    if (current !== idx) {
      this.swap(idx, current);
      this.shiftDown(current);
    }
  }

  shiftUp(idx: number) {
    const parentIdx = this.getParentIndex(idx);

    while (this.heap[parentIdx] > this.heap[idx]) {
      this.swap(parentIdx, idx);
      this.shiftUp(parentIdx);
    }
  }
  swap(parentIdx: number, currentIdx: number) {
    const parent = this.heap[parentIdx];
    this.heap[parentIdx] = this.heap[currentIdx];
    this.heap[currentIdx] = parent;
  }
}
const heap = new MinHeap();
heap.insert(10);
heap.insert(1);
heap.insert(3);
heap.insert(2);
heap.insert(12);
heap.insert(22);
heap.insert(32);
heap.insert(5);
heap.extract();
console.log("heap:", heap);

```





## 算法

演示动画网站：https://visualgo.net/zh/sorting

#### 冒泡排序

```tsx
const arr = [1, 231, 31, 23, 12, 3, 424, 2, 42, 342, 4, 234];
// 冒泡排序
function BubblingSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

#### 选择排序

```tsx
const choiceArr = [21, 32, 34, 24, 24, 23, 42, 5, 235345, 3, 52, 34, 2, 4];
// 选择排序
function ChoiceSort() {
  for (let i = 0; i < choiceArr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < choiceArr.length; j++) {
      if (choiceArr[idx] > choiceArr[j]) {
        idx = j;
      }
    }
    let temp = choiceArr[idx];
    choiceArr[idx] = choiceArr[i];
    choiceArr[i] = temp;
  }
}
```



#### 插入排序

```tsx
const insertArr = [
  23, 123, 1, 313, 1, 3, 13, 4, 2, 423, 5, 3, 72, 43, 23, 6, 24, 78, 53, 25,
];
// 插入排序
function InsertSort() {
  for (let i = 0; i < insertArr.length - 1; i++) {
    let j = i + 1;
    let temp = insertArr[j];
    while (j > 0 && temp < insertArr[j - 1]) {
      insertArr[j] = insertArr[j - 1];
      j--;
    }
    insertArr[j] = temp;
  }
}
```





#### 归并排序

归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

![image-20230223112304059](./js数据结构与算法.assets/image-20230223112304059.png)
