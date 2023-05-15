# Variables, Scope, and Memory

:::info
- Working with primitive and reference values in variables
- Understanding execution context
- Understanding garbage collection
:::

- 通过变量使用原始值与引用值
- 理解执行上下文
- 理解垃圾回收


:::info
The nature of variables in JavaScript, as defined in ECMA-262, is quite unique compared to that of other languages.

Being loosely typed, a variable is literally just a name for a particular value at a particular time. 

Because there are no rules defining the type of data that a variable must hold, a variable's value and data type can change during the lifetime of a script. 

Though this is an interesting, powerful, and problematic feature, there are many more complexities related to variables.
:::

相比于其他语言，JavaScript 中的变量可谓独树一帜。正如 ECMA-262 所规定的，JavaScript 变量是松散类型的，而且变量不过就是特定时间点一个特定值的名称而已。由于没有规则定义变量必须包含什么数据类型，变量的值和数据类型在脚本生命期内可以改变。这样的变量很有意思，很强大，当然也有不少问题。本章会剖析错综复杂的变量。
