# Promises and Async Functions

:::info
- Introduction to Asynchronous Programming
- Promises
- Async Functions
:::

- 异步编程
- 期约
- 异步函数



:::info
In ECMAScript editions beginning with ES6, support and tooling for asynchronous behavior has undergone a renaissance. 

ECMAScript 6 introduces a formal `Promise` reference type, allowing for elegant definition and organization of asynchronous behavior. 

Later editions also extended the language to support asynchronous functions with the `async` and `await` keywords.
:::

ECMAScript 6 及之后的几个版本逐步加大了对异步编程机制的支持，提供了令人眼前一亮的新特性。

ECMAScript 6 新增了正式的 `Promise`（期约）引用类型，支持优雅地定义和组织异步逻辑。

接下来几个版本增加了使用 `async` 和 `await` 关键字定义异步函数的机制。



:::info NOTE
Throughout this chapter, examples make extensive use of asynchronous logging `setTimeout(console.log, 0, ...params)` to demonstrate order of operation and other asynchronous behavior characteristics. 

The log output will be shown as though it is printed synchronously when, in fact, it is printed asynchronously. 

This is done to allow for values such as promises to assume their final state.
:::

**注意**：本章示例将大量使用异步日志输出的方式 `setTimeout(console.log, 0, ...params)`，旨在演示执行顺序及其他异步行为。

异步输出的内容看起来虽然像是同步输出的，但实际上是异步打印的。

这样可以让期约等返回的值达到其最终状态。


:::info NOTE
Additionally, a browser’s console output will often print information about objects that is not otherwise available to the JavaScript runtime (such as the state of a promise). 

This feature is used extensively in examples throughout the chapter to aid in broadening the reader’s understanding.
:::

此外，浏览器控制台的输出经常能打印出 JavaScript 运行中无法获取的对象信息（比如期约的状态）。

这个特性在示例中广泛使用，以便辅助读者理解相关概念。
