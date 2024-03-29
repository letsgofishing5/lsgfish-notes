## 设计原则

单一职责原则（Single Responsibility Principle）；

开闭原则（Open Closed Principle）； 

里氏替换原则（Liskov Substitution Principle）； 

迪米特法则（Law of Demeter），又叫“最少知道法则”；

接口隔离原则（Interface Segregation Principle）； 

依赖倒置原则（Dependence Inversion Principle）。

## 工厂模式

### 简单工厂模式

> 只有一个工厂，不管有几个类型产品，都由这一个工厂完成创建

```typescript
abstract class Coffee {
  constructor(public name: string) {}
}
// 简单工厂模式
class 美式 extends Coffee {}
class 韩式 extends Coffee {}
class 日式 extends Coffee {}
class CoffeeFactory {
  static order(name: string) {
    switch (name) {
      case "美式":
        return new 美式(name);
      case "韩式":
        return new 韩式(name);
      case "日式":
        return new 日式(name);
      default:
        throw new Error("没有该类型咖啡");
    }
  }
}
console.log("我要一杯：", CoffeeFactory.order("美式"));
console.log("我要一杯：", CoffeeFactory.order("韩式"));
console.log("我要一杯：", CoffeeFactory.order("日式"));
console.log("我要一杯：", CoffeeFactory.order("中国茶"));
```

### 工厂方法

> 一个类型对应一个子工厂，所有的子工厂都要继承总工厂的方法，当需要什么类型，则先创建对应的子工厂，由子工厂完成工作。

```typescript
// 工厂方法
abstract class Coffee {
  constructor(public name: string) {}
}
class 美式 extends Coffee {}
class 韩式 extends Coffee {}
class 日式 extends Coffee {}
abstract class CateFactory {
  abstract makeCoffee(): Coffee;
}
// 每个工厂对应对应的类型咖啡。调用制作咖啡方法，生产对应类型咖啡
class M extends CateFactory {
  makeCoffee(): Coffee {
    return new 美式("美式");
  }
}

class H extends CateFactory {
  makeCoffee(): Coffee {
    return new 韩式("韩式");
  }
}

class R extends CateFactory {
  makeCoffee(): Coffee {
    return new 日式("日式");
  }
}
console.log("我要一杯美式：", new M().makeCoffee());
console.log("我要一杯韩式：", new H().makeCoffee());
console.log("我要一杯日式：", new R().makeCoffee());
```

### 抽象工厂

> 抽象工厂模式基于工厂方法，扩大了一个子工厂生产的能力，一个子工厂可以生产一个类型的系列产品。
>
> 比如苹果类型的产品：苹果手机，ipad，苹果电脑等一系列产品由同一个子工厂代工生产

```typescript
export {};
abstract class Brand {
  abstract createTea(): void;
  abstract createCoffee(): void;
  abstract createDrink(): void;
}
class China extends Brand {
  createTea(): void {
    console.log(
      "%cChina创建了Tea",
      "color:#fff;background:green;padding:2px 5px;"
    );
  }
  createCoffee(): void {
    console.log(
      "%cChina创建了Coffee",
      "color:#fff;background:green;padding:2px 5px;"
    );
  }
  createDrink(): void {
    console.log(
      "%cChina创建了Drink",
      "color:#fff;background:green;padding:2px 5px;"
    );
  }
}
class America extends Brand {
  createTea(): void {
    console.log(
      "%America创建了Tea",
      "color:#fff;background:red;padding:2px 5px;"
    );
  }
  createCoffee(): void {
    console.log(
      "%cAmerica创建了Coffee",
      "color:#fff;background:red;padding:2px 5px;"
    );
  }
  createDrink(): void {
    console.log(
      "%cAmerica创建了Drink",
      "color:#fff;background:red;padding:2px 5px;"
    );
  }
}
class Others extends Brand {
  createTea(): void {
    console.log(
      "%cOthers创建了Tea",
      "color:#fff;background:orange;padding:2px 5px;"
    );
  }
  createCoffee(): void {
    console.log(
      "%cOthers创建了Coffee",
      "color:#fff;background:orange;padding:2px 5px;"
    );
  }
  createDrink(): void {
    console.log(
      "%cOthers创建了Drink",
      "color:#fff;background:orange;padding:2px 5px;"
    );
  }
}
new China().createCoffee();
```

## 单例模式

> 只有一个对象

```javascript
function Single() { }
// 这里利用了闭包，将闭包变量直接挂载到createSingle变量上，这样只要使用了createSingle变量，则会共享闭包变量
let createSingle = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new Single()
        }
        return instance
    }
})()
const obj1 = new createSingle()
const obj2 = new createSingle()
console.log(obj1 === obj2);
```

代码升级

```javascript
function Single(name) {
    this.name = name
}
Single.prototype = {
    getName() {
        console.log('获取name:', this.name);
    }
}
let createSingle = function (Constructor) {
    let instance
    return function () {
        if (!instance) {
            // 原型挂载，替代语法：Object.setPrototypeOf(this,Constructor.prototype)
            const obj = Object.create(Constructor.prototype)
            Constructor.apply(obj, arguments)
            instance = obj
        }
        return instance
    }
}
// 这里利用了闭包，将闭包变量直接挂载到createSingle变量上，这样只要使用了createSingle变量，则会共享闭包变量
const single = createSingle(Single)
const obj1 = new single("nihao")
const obj2 = new single()
obj1.getName()
console.log(obj1 === obj2);
```

代码再升级

```javascript
function Single(name) {
    this.name = name
}
Single.prototype = {
    getName() {
        console.log('获取name:', this.name);
    }
}
let createSingle = function (Constructor) {
    let instance
    let SingleConstructor = function () {
        if (!instance) {
            Constructor.apply(this, arguments)
            instance = this
        }
        return instance
    }
    SingleConstructor.prototype = Object.create(Constructor.prototype)
    return SingleConstructor
}
// 这里利用了闭包，将闭包变量直接挂载到createSingle变量上，这样只要使用了createSingle变量，则会共享闭包变量
const single = createSingle(Single)
const obj1 = new single("nihao")
const obj2 = new single("花花")
obj1.getName()
console.log(obj1 === obj2);
```

简化代码

```javascript
function Single(name) {
    this.name = name
}
Single.prototype = {
    getName() {
        console.log('获取name:', this.name);
    }
}
let createSingle = function (Constructor) {
    let instance
    return function () {
        if (!instance) {
            instance = new Constructor(...arguments)
        }
        return instance
    }
}
// 这里利用了闭包，将闭包变量直接挂载到createSingle变量上，这样只要使用了createSingle变量，则会共享闭包变量
const single = createSingle(Single)
const obj1 = new single("nihao")
const obj2 = new single("花花")
obj1.getName()
console.log(obj1 === obj2);
```

## 适配器模式

> 说白了，就是中间加一层，类似于中间件

```typescript
class Adapter {
  voltage: any;
  constructor(power: Power) {
    console.log("接入电源：", power.voltage);
    this.voltage = 12;
  }
  use() {
    console.log("使用电源：", this.voltage);
  }
}
class Power {
  public voltage = 220;
}
class Client {
  charge(adapter: Adapter) {
    console.log("接入适配器：", adapter);
    console.log("使用电源：", adapter.voltage);
  }
}
const phone = new Client();
const adapter = new Adapter(new Power());
phone.charge(adapter);
```

## 装饰器模式

> 在不改变其原有的结构和功能为对象添加新功能 装饰比继承更加灵活

```typescript
Function.prototype.before = function (beforeFn) {
    const _this = this;
    return function () {
        beforeFn()
        _this.apply(this, arguments);
    };
};
Function.prototype.after = function (afterFn) {
    const _this = this;
    return function () {
        _this.apply(null, arguments);
        afterFn()
    };
};
function buy(money, goods) {
    console.log(`花${money}元钱，买了${goods}`);
}

buy = buy.before(() => {
    console.log('前置执行1');
});
buy = buy.before(() => {
    console.log('前置执行2');
});
buy = buy.after(() => {
    console.log('后置执行');
});
buy(1, '彦')
```

## 代理模式

> 代理模式VS适配器模式 适配器提供不同接口，代理模式提供一模一样的接口 
>
> 代理模式VS装饰器模式 装饰器模式原来的功能不变还可以使用，代理模式改变原来的功能

```javascript
const wmm = {
    age: 30,
    height: 160,
    salary: 5000
}
const wmmMM = new Proxy(wmm, {
    get(target, prop) {
        if (prop === 'age') {
            return target[prop] - 2
        } else if (prop === 'height') {
            return target[prop] + 2
        } else {
            return target[prop]
        }
    },
    set(target, prop, val) {
    }
})
console.log(wmmMM.age);
```

## 外观模式

> 该模式就是把一些复杂的流程封装成一个接口供给外部用户更简单的使用

```javascript
class Sum {
    calc(a, b) {
        return a + b
    }
}
class Minus {
    calc(a, b) {
        return a - b
    }
}
class Multiply {
    calc(a, b) {
        return a * b
    }
}

class Caculator {
    constructor() {
        this.sumObj = new Sum()
        this.minusObj = new Minus()
        this.multiplyObj = new Multiply()
    }
    sum(a, b) {
        return this.sumObj.calc(a, b)
    }
    minus(a, b) {
        return this.minusObj.calc(a, b)
    }
    multiply(a, b) {
        return this.multiplyObj.calc(a, b)
    }
}
const caculator = new Caculator()
console.log('1+2:', caculator.sum(1, 2));
console.log('1*2:', caculator.multiply(1, 2));
console.log('6-2:', caculator.minus(6, 2));
```

## 观察者模式

> 被观察者供维护观察者的一系列方法
>
> 观察者提供更新接口
>
> 观察者把自己注册到被观察者里
>
> 在被观察者发生变化时候，调用观察者的更新方法

```javascript
class Star {
    constructor(name, state) {
        this.name = name
        this.state = state
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAll()
    }
    notifyAll() {
        if (this.observers.length) {
            this.observers.forEach(observer => {
                observer.update()
            })
        }
    }
    attachFan(fan) {
        this.observers.push(fan)
    }
}
class Fan {
    constructor(name, star) {
        this.name = name
        this.star = star
        this.star.attachFan(this)
    }
    update() {
        console.log(`我是${this.name}，我喜欢的明星${this.star.name}现在是${this.star.getState()}状态`);
    }
}
const star = new Star("唐三藏", "准备西天取经")
const fan = new Fan("路人甲", star)
star.setState("取经归来")
```

## 状态模式

> 当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象 对象有自己的状态 不同状态下执行的逻辑不一样 明确状态和每个状态下执行的动作 用来减少if...else子句

```javascript
let state = {
    render(element) {
        element.innerHTML = "赞"
    }
}
let stated = {
    render(element) {
        element.innerHTML = "取消"
    }
}
class Button {
    constructor(container) {
        this.liked = false
        this.state = state
        this.element = document.createElement("button")
        container.appendChild(this.element)
        this.render()
    }
    setStatus(status) {
        this.state = status
        this.render()
    }
    render() {
        this.state.render(this.element)
    }
}
const btn = new Button(document.body)
btn.element.addEventListener('click', e => {
    btn.setStatus(btn.liked ? stated : state)
    btn.liked = !btn.liked
})
```





## 策略模式

> 将定义的一组算法封装起来，使其相互之间可以替换。
>
> 封装的算法具有一定独立性，不会随客户端变而变化，避免大量 if/else

```js
class Customer {
    constructor(kind) {
        this.kind = kind
    }
    pay(money) {
        this.kind.pay(money)
    }
}
class Normal {
    pay(money) {
        console.log(money);
    }
}
class VIP {
    pay(money) {
        console.log(money * .8);
    }
}
const normal = new Normal()
const vip = new VIP()
const customer1 = new Customer(normal)
const customer2 = new Customer(vip)
customer1.pay(100)
customer2.pay(100)

```

## 原型模式

js中，函数是对象，而对象都是通过函数创建来的。

提问：第一个函数是如何出现的

- 自定义函数的prototype是由Object创建，所以它的proto指向的就是Object..prototype
- Object.prototypel的proto指向的是null

## 桥接模式

- 将抽象部分与他的实现部分分高这样抽像化与实现化解辑，使他们可以独立的变化
- 应用场景是实现系统可能有多个角度分类，每一种角度都可能变化
- 桥方可以通过实现桥接口进行单方面扩展，而另一方可以继承抽象类而单方面扩展，而之间的调用就从桥接口来作为突破口，不会受到双方扩展的任何影响

```js
// 汽车
class Automobile {
    constructor(engine) {
        this.engine = engine
    }
    loadEnginInfo() {
        console.log(this.engine.name, '发动机');
    }
}
// 发动机
class V6 {
    constructor() {
        this.name = "V6"
    }
}
class V8 {
    constructor() {
        this.name = "V8"
    }
}
const v6 = new V6()
const v8 = new V8()
const bc = new Automobile(v6)
const bm = new Automobile(v8)
bc.loadEnginInfo()
bm.loadEnginInfo()
```

### 应用场景

1. 解耦合
2. 分离变化

## 组合模式

又称整体-部分模式
将对象组合成树形结构以表示部分-整体的层次结构
客户可以使用统一的方式对待组合对象和叶子对象

### 应用场景

创建侧边菜单

```js
const options = [
    {
        name: "系统管理",
        children: [
            {
                name: "用户管理",
            },
            {
                name: "用户管理",
                children: [
                    {
                        name: "角色管理"
                    },
                    {
                        name: "权限管理"
                    }
                ]
            }
        ]
    }
]
function createItemDOM(name) {
    const li = document.createElement("li")
    li.innerHTML = name
    return li
}
function createMenuDOM(name) {
    const ul = document.createElement("ul")
    ul.innerHTML = name
    return ul
}
function createMenuItem(options) {
    const fragement = new DocumentFragment()
    options?.forEach(item => {
        if (item?.children?.length) {
            const ul = createMenuDOM(item.name)
            const dom = createMenuItem(item.children)
            ul.append(dom)
            fragement.append(ul)

        } else {
            const li = createItemDOM(item.name)
            fragement.append(li)

        }
    })
    return fragement
}
function init() {
    const dom = createMenuItem(options)
    document.body.append(dom)
}
init()
```

## 发布订阅模式

简单模拟发布订阅

```js
// 发布订阅中心
class PubSub {
    list = []
    // 发布
    publish(name) {
        this.list.forEach(item => {
            if (item.name == name) {
                item.todo()
            }
        })
    }
    // 订阅
    subscribe(cb) {
        console.log('arguments:', arguments);
        for (let item of arguments) {
            this.list.push(item)
        }
    }
    // 取消订阅
    unSubscribe(cb) {
        const idx = this.list.findIndex(item => item === cb)
        this.list.splice(idx, 1)
    }
}
// 订阅
class Subscribe {
    constructor(name) {
        this.name = name
    }
    todo() {
        console.log(this.name, '执行了发布功能');
    }
}
const pub = new PubSub()

const sub1 = new Subscribe("石林")
const sub2 = new Subscribe("万佳惠")
// 注册订阅信息
pub.subscribe(sub1, sub2)
// 发布订阅
pub.publish("石林")

```

## 职责链模式





