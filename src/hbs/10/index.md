# Functions

:::info
- Function expressions, function declarations, and arrow functions
- Default parameters and spread operators
- Recursion with functions
- Private variables using closures
:::

- 函数表达式、函数声明及箭头函数
- 默认参数及扩展操作符
- 使用函数实现递归
- 使用闭包实现私有变量


:::info
Some of the most interesting parts of ECMAScript are its functions, primarily because functions actually are objects. 

Each function is an instance of the `Function` type that has properties and methods just like any other reference type. 

Because functions are objects, function names are simply pointers to function objects and are not necessarily tied to the function itself. 

Functions are typically defined using function-declaration syntax, as in this example:
:::

函数是 ECMAScript 中最有意思的部分之一，这主要是因为函数实际上是对象。

每个函数都是 `Function` 类型的实例，而 `Function` 也有属性和方法，跟其他引用类型一样。

因为函数是对象，所以函数名就是指向函数对象的指针，而且不一定与函数本身紧密绑定。

函数通常以函数声明的方式定义，比如：

```js
function sum (num1, num2) {
  return num1 + num2;
}
```


:::info
In this code, a variable `sum` is defined and initialized to be a function. 

Note that there is no name included after the `function` keyword because it’s not needed—the function can be referenced by the variable sum. 

Also note that there is no semicolon after the end of the function definition.
:::

这里，代码定义了一个变量 `sum` 并将其初始化为一个函数。

注意 `function` 关键字后面没有名称，因为不需要。这个函数可以通过变量 `sum` 来引用。

注意函数定义最后没有加分号。


:::info
The function-declaration syntax is almost exactly equivalent to using a function expression, such as this:
:::

另一种定义函数的语法是函数表达式。函数表达式与函数声明几乎是等价的：

```js
let sum = function(num1, num2) {
  return num1 + num2;
};
```

:::info
Note that there is a semicolon after the end of the function, just as there would be after any variable initialization.
:::

注意这里的函数末尾是有分号的，与任何变量初始化语句一样。



:::info
Another way to define a function that is quite similar to a function expression is to use the “arrow” function syntax, such as this:
:::

还有一种定义函数的方式与函数表达式很像，叫作“箭头函数”（arrow function），如下所示：

```js
let sum = (num1, num2) => {
  return num1 + num2;
};
```


:::info
The final way to define functions is to use the `Function` constructor, which accepts any number of arguments. 

The last argument is always considered to be the function body, and the previous arguments enumerate the new function’s arguments.

Consider this example:
:::

最后一种定义函数的方式是使用 `Function` 构造函数。

这个构造函数接收任意多个字符串参数，最后一个参数始终会被当成函数体，而之前的参数都是新函数的参数。

来看下面的例子：

```js
let sum = new Function("num1", "num2", "return num1 + num2");  // 不推荐
```



:::info
This syntax is not recommended because it causes a double interpretation of the code (once for the regular ECMAScript code and once for the strings that are passed into the constructor) and thus can affect performance. 

However, it’s important to think of functions as objects and function names as pointers—this syntax is great at representing that concept.
:::

我们不推荐使用这种语法来定义函数，因为这段代码会被解释两次：第一次是将它当作常规 ECMAScript 代码，第二次是解释传给构造函数的字符串。这显然会影响性能。

不过，把函数想象为对象，把函数名想象为指针是很重要的。而上面这种语法很好地诠释了这些概念。



:::info NOTE
There are subtle but important differences between these different ways to instantiate a function object that will be discussed later in the chapter. 

Nevertheless, all of them are invoked in an identical way.
:::

**注意**：这几种实例化函数对象的方式之间存在微妙但重要的差别，本章后面会讨论。

无论如何，通过其中任何一种方式都可以创建函数。
