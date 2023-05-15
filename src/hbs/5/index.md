# Basic Reference Types

:::info
- Working with objects
- Understanding basic JavaScript data types
- Working with primitives and primitive wrappers
:::

- 理解对象
- 基本 JavaScript 数据类型
- 原始值与原始值包装类型

:::info
A reference value (object) is an instance of a specific reference type. 

In ECMAScript, reference types are structures used to group data and functionality together and are often incorrectly called classes. 

Although technically an object-oriented language, ECMAScript lacks some basic constructs that have traditionally been associated with object-oriented programming, including classes and interfaces. 

Reference types are also sometimes called object definitions because they describe the properties and methods that objects should have.
:::

引用值（或者对象）是某个特定**引用类型**的实例。在 ECMAScript 中，引用类型是把数据和功能组织到一起的结构，经常被人错误地称作“类”。虽然从技术上讲 JavaScript 是一门面向对象语言，但 ECMAScript 缺少传统的面向对象编程语言所具备的某些基本结构，包括类和接口。引用类型有时候也被称为**对象定义**，因为它们描述了自己的对象应有的属性和方法。


:::info NOTE
Even though reference types are similar to classes, the two concepts are not equivalent. 

To avoid any confusion, the term “class” is not used in the rest of this chapter.
:::

**注意**：引用类型虽然有点像类，但跟类并不是一个概念。为避免混淆，本章后面不会使用术语“类”。


:::info
Again, objects are considered to be instances of a particular reference type. 

New objects are created by using the `new` operator followed by a constructor. 

A constructor is simply a function whose purpose is to create a new object. 

Consider the following line of code:
:::

对象被认为是某个特定引用类型的**实例**。新对象通过使用 `new` 操作符后跟一个**构造函数**（constructor）来创建。构造函数就是用来创建新对象的函数，比如下面这行代码：

```js
let now = new Date();
```


:::info
This code creates a new instance of the `Date` reference type and stores it in the variable `now`. 

The constructor being used is `Date()`, which creates a simple object with only the default properties and methods. 

ECMAScript provides a number of native reference types, such as `Date`, to help developers with common computing tasks.
:::

这行代码创建了引用类型 `Date` 的一个新实例，并将它保存在变量 `now` 中。`Date()` 在这里就是构造函数，它负责创建一个只有默认属性和方法的简单对象。ECMAScript 提供了很多像 `Date` 这样的原生引用类型，帮助开发者实现常见的任务。


:::info NOTE
Functions are a reference type, but they are too broad of a topic for this chapter and therefore have an entire chapter devoted to them. Refer to the Functions chapter.
:::

**注意**：函数也是一种引用类型，但有关函数的内容太多了，一章放不下，所以本书专门用第 10 章来介绍函数。
