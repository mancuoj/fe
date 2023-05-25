# Proxies and Reflect

:::info
- Proxy fundamentals
- Proxy traps and reflect methods
- Proxy patterns
:::

- 代理基础
- 代码捕获器与反射方法
- 代理模式



:::info
Freshly introduced in ECMAScript 6, proxies and reflection are totally new constructs that afford you the ability to intercept and shim additional behavior into fundamental operations within the language. 

More specifically, you can define a proxy object associated with a target object, and the proxy object can be used as an abstracted target object within which you can control what happens when various operations are performed before they actually reach the target object.
:::

ECMAScript 6 新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。

具体地说，可以给目标对象定义一个关联的代理对象，而这个代理对象可以作为抽象的目标对象来使用。

在对目标对象的各种操作影响目标对象之前，可以在代理对象中对这些操作加以控制。



:::info
For developers approaching this subject for the first time, this is a fairly nebulous concept paired with a healthy corpus of new terminology.

Working through multiple examples will help to cement your understanding.
:::

对刚刚接触这个主题的开发者而言，代理是一个比较模糊的概念，而且还夹杂着很多新术语。

其实只要看几个例子，就很容易理解了。



:::info NOTE
There is no analogue for proxies in ECMAScript versions prior to ES6. 

Because it is a fundamentally new language ability, many transpilers are unable to convert proxy behavior into earlier ECMAScript versions because replicating the behavior of a proxy is effectively impossible. 

Therefore, proxies and reflection are useful only in situations where native support is offered on 100 percent of platforms. 

It is possible to detect support for proxies and divert to fallback code as necessary, but this would lead to code duplication and is therefore discouraged.
:::

在 ES6 之前，ECMAScript 中并没有类似代理的特性。

由于代理是一种新的基础性语言能力，很多转译程序都不能把代理行为转换为之前的 ECMAScript 代码，因为代理的行为实际上是无可替代的。

为此，代理和反射只在百分之百支持它们的平台上有用。

可以检测代理是否存在，不存在则提供后备代码。不过这会导致代码冗余，因此并不推荐。
