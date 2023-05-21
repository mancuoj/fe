# Introduction to JavaScript

:::info
JavaScript is the programming language of the web. 

The overwhelming majority of websites use JavaScript, and all modern web browsers—on desktops, tablets, and phones—include JavaScript interpreters, making JavaScript the most-deployed programming language in history. 

Over the last decade, Node.js has enabled JavaScript programming outside of web browsers, and the dramatic success of Node means that JavaScript is now also the most-used programming language among software developers. 

Whether you're starting from scratch or are already using JavaScript professionally, this book will help you master the language. 
:::

JavaScript 是 Web 编程语言。

绝大多数网站都使用 JavaScript，所有现代 Web 浏览器（无论是桌面、平板还是手机浏览器，书中以后统称为浏览器）都包含 JavaScript 解释器，这让 JavaScript 成为有史以来部署最广泛的编程语言。

过去十年，Node.js 让浏览器之外的 JavaScript 编程成为可能，

Node 的巨大成功意味着 JavaScript 如今也是软件开发者最常用的编程语言。无论你是从头开始，还是已经在工作中使用 JavaScript，本书都能帮你掌握这门语言。

:::info
If you are already familiar with other programming languages, it may help you to know that JavaScript is a high-level, dynamic, interpreted programming language that is well-suited to object-oriented and functional programming styles. 

JavaScript's variables are untyped. Its syntax is loosely based on Java, but the languages are otherwise unrelated. 

JavaScript derives its first-class functions from Scheme and its prototype-based inheritance from the little-known language Self. 

But you do not need to know any of those languages, or be familiar with those terms, to use this book and learn JavaScript. 
:::

如果你已经熟悉其他编程语言，那有必要知道 JavaScript 是一门高级、动态、解释型编程语言，非常适合面向对象和函数式编程风格。

JavaScript 的变量是无类型的，它的语法大致与 Java 相仿，但除此之外这两门语言之间没有任何关系。

JavaScript 从 Scheme 借鉴了一类（first class）函数，从不太知名的 Self 借鉴了基于原型的继承。

但要阅读本书或学习 JavaScript 不需要了解这些语言，也不必熟悉这些术语。


:::info
The name "JavaScript" is quite misleading. 

Except for a superficial syntactic resemblance, JavaScript is completely different from the Java programming language. 

And JavaScript has long since outgrown its scripting-language roots to become a robust and efficient general-purpose language suitable for serious software engineering and projects with huge codebases.
:::

JavaScript 这个名字相当有误导性。

除了表面上语法相似，它与 Java 是完全不同的两门编程语言。

JavaScript 经历了很长时间才从一门脚本语言成长为一门健壮高效的通用语言，适合开发代码量巨大的重要软件工程和项目。

:::info JavaScript: Names, Versions, and Modes
JavaScript was created at Netscape in the early days of the web, and technically, "JavaScript" is a trademark licensed from Sun Microsystems (now Oracle) used to describe Netscape's (now Mozilla's) implementation of the language. 

Netscape submitted the language for standardization to ECMA—the European Computer Manufacturer's Association—and because of trademark issues, the standardized version of the language was stuck with the awkward name "ECMAScript". 

In practice, everyone just calls the language JavaScript. This book uses the name "ECMAScript" and the abbreviation "ES" to refer to the language standard and to versions of that standard.
:::

JavaScript 是 Netscape 在 Web 诞生初期创造的。

严格来讲，JavaScript 是经 Sun Microsystems（现 Oracle）授权使用的一个注册商标，用于描述 Netscape（现 Mozilla）对这门语言的实现。

Netscape 将这门语言提交给 Ecma International [^1] 进行标准化，由于商标问题，这门语言的标准版本沿用了别扭的名字“ECMAScript”。

实践中，大家仍然称这门语言为 JavaScript。本书在讨论这门语言的标准及版本时使用“ECMAScript”及其缩写“ES”。

:::info JavaScript: Names, Versions, and Modes
For most of the 2010s, version 5 of the ECMAScript standard has been supported by all web browsers. 

This book treats ES5 as the compatibility baseline and no longer discusses earlier versions of the language. 

ES6 was released in 2015 and added major new features—including class and module syntax—that changed JavaScript from a scripting language into a serious, general-purpose language suitable for large-scale software engineering. 

Since ES6, the ECMAScript specification has moved to a yearly release cadence, and versions of the language—ES2016, ES2017, ES2018, ES2019, and ES2020—are now identified by year of release.
:::

2010 年以来，几乎所有浏览器都支持 ECMAScript 标准第 5 版。

本书以 ES5 作为兼容性基准，不再讨论这门语言的更早版本。

ES6 发布于 2015 年，增加了重要的新特性（包括类和模块语法）。

这些新特性把JavaScript从一门脚本语言转变为一门适合大规模软件工程的严肃、通用语言。

从 ES6 开始，ECMAScript 规范改为每年发布一次，语言的版本也以发布的年份来标识（ES2016、ES2017、ES2018、ES2019 和 ES2020）。

:::info JavaScript: Names, Versions, and Modes
As JavaScript evolved, the language designers attempted to correct flaws in the early (pre-ES5) versions. 

In order to maintain backward compatibility, it is not possible to remove legacy features, no matter how flawed. 

But in ES5 and later, programs can opt in to JavaScript's strict mode in which a number of early language mistakes have been corrected. 

The mechanism for opting in is the "use strict" directive described in §5.6.3. 

That section also summarizes the differences between legacy JavaScript and strict JavaScript. 

In ES6 and later, the use of new language features often implicitly invokes strict mode. 

For example, if you use the ES6 class keyword or create an ES6 module, then all the code within the class or module is automatically strict, and the old, flawed features are not available in those contexts. 

This book will cover the legacy features of JavaScript but is careful to point out that they are not available in strict mode.
:::

随着 JavaScript 的发展，语言设计者也在尝试纠正早期（ES5 之前）版本中的缺陷。

为了保证向后兼容，无论一个特性的问题有多严重，也不能把它删除。

但在 ES5 及之后，程序可以选择切换到 JavaScript 的严格模式。

在这种模式下，一些早期的语言错误会得到纠正。

[本书 5.6.3 节](/xns/5/6) 将介绍切换到这种模式使用的 use strict 指令。该节也会总结传统 JavaScript 与严格 JavaScript 的区别。

在 ES6 及之后，使用新语言特性经常会隐式触发严格模式。

例如，如果使用 ES6 的 class 关键字或者创建 ES6 模块，类和模块中的所有代码都会自动切换到严格模式。在这些上下文中，不能使用老旧、有缺陷的特性。

本书会介绍 JavaScript 的传统特性，但会细心地指出它们在严格模式下无法使用。

:::info
To be useful, every language must have a platform, or standard library, for performing things like basic input and output. 

The core JavaScript language defines a minimal API for working with numbers, text, arrays, sets, maps, and so on, but does not include any input or output functionality. 

Input and output (as well as more sophisticated features, such as networking, storage, and graphics) are the responsibility of the “host environment” within which JavaScript is embedded.
:::

为了好用，每种语言都必须有一个平台或标准库，用于执行包括基本输入和输出在内的基本操作。

核心 JavaScript 语言定义了最小限度的 API，可以操作数值、文本、数组、集合、映射等，但不包含任何输入和输出功能。

输入和输出（以及更复杂的特性，如联网、存储和图形处理）是内嵌 JavaScript 的“宿主环境”的责任。

:::info
The original host environment for JavaScript was a web browser, and this is still the most common execution environment for JavaScript code. 

The web browser environment allows JavaScript code to obtain input from the user’s mouse and keyboard and by making HTTP requests. 

And it allows JavaScript code to display output to the user with HTML and CSS.
:::

浏览器是 JavaScript 最早的宿主环境，也是 JavaScript 代码最常见的运行环境。

浏览器环境允许 JavaScript 代码从用户的鼠标和键盘或者通过发送 HTTP 请求获取输入，也允许 JavaScript 代码通过 HTML 和 CSS 向用户显示输出。

:::info
Since 2010, another host environment has been available for JavaScript code. 

Instead of constraining JavaScript to work with the APIs provided by a web browser, Node gives JavaScript access to the entire operating system, allowing JavaScript programs to read and write files, send and receive data over the network, and make and serve HTTP requests. 

Node is a popular choice for implementing web servers and also a convenient tool for writing simple utility scripts as an alternative to shell scripts.
:::

2010 年以后，JavaScript 代码又有了另一个宿主环境。

与限制 JavaScript 只能使用浏览器提供的 API 不同，Node 给予了 JavaScript 访问整个操作系统的权限，允许 JavaScript 程序读写文件、通过网络发送和接收数据，以及发送和处理 HTTP 请求。

Node 是实现 Web 服务器的一种流行方式，也是编写可以替代 shell 脚本的简单实用脚本的便捷工具。

:::info
Most of this book is focused on the JavaScript language itself. 

Chapter 11 documents the JavaScript standard library, Chapter 15 introduces the web browser host environment, and Chapter 16 introduces the Node host environment.
:::

本书大部分内容聚焦JavaScript语言本身。

[第11章](/xns/11/) 讲述 JavaScript 标准库，[第 15 章](/xns/15/) 介绍浏览器宿主环境，[第 16 章](/xns/16/) 介绍 Node 宿主环境。

:::info
This book covers low-level fundamentals first, and then builds on those to more advanced and higher-level abstractions. 

The chapters are intended to be read more or less in order. 

But learning a new programming language is never a linear process, and describing a language is not linear either: each language feature is related to other features, and this book is full of cross-references—sometimes backward and sometimes forward—to related material. 

This introductory chapter makes a quick first pass through the language, introducing key features that will make it easier to understand the in-depth treatment in the chapters that follow. 

If you are already a practicing JavaScript programmer, you can probably skip this chapter. (Although you might enjoy reading Example 1-1 at the end of the chapter before you move on.)
:::

<!-- TODO：示例 1-1 引用 -->
全书首先从底层基础讲起，然后逐步过渡到高级及更高层次的抽象。

这些章节的安排多多少少考虑了阅读的先后次序。

不过学习一门新语言不可能是一个线性的过程，对一门语言的描述也不可能是线性的。毕竟每个语言特性都可能与其他特性有关系。

本书的交叉引用非常多，有的指向前面的章节，有的指向后面的章节。本章会先快速地过一遍这门语言，介绍一些对理解后续章节的深入剖析有帮助的关键特性。

如果你是一名 JavaScript 程序员，可以跳过这一章（但在跳过之前，读一读本章末尾的示例 1-1 应该会让你很开心）。


[^1]: 读者可以参考 Allen Wirfs-Brock 和 Brendan Eich（JavaScript 之父）为第 4 届编程语言历史大会（2020 年 6 月）撰写的论文 [JavaScript: The First 20 Years](https://cn.history.js.org/) 以及 [维基百科词条](https://en.wikipedia.org/wiki/Ecma_International)。
