# 蠢人的总结

## TS 是什么

TS 给 JS 加上了一套静态类型系统，让其从动态类型语言变成了静态类型语言，可以在编译期做类型检查，提前发现一些类型安全问题，提高代码的健壮性。而且会有一些额外的好处，比如可以配合编辑器提供更好的提示、重构。

- **类型**决定了变量的内存大小和可以对它进行的操作
- 保证对什么类型只做什么操作就叫做**类型安全**
- 保证类型安全的方式就是**类型检查**

类型检查可以在运行时做，叫做动态类型检查，也可以在编译时做，叫做静态类型检查。


## 什么是类型体操

TS 支持**类型编程**，就是可以对传入的类型参数（泛型）做各种逻辑运算，产生新的类型。 

TS 的类型系统是**图灵完备**的，支持循环、条件各种操作，可以实现各种复杂的类型计算逻辑，所以被叫做类型体操。

## TS 有哪些类型

- JS 原有的类型 number, boolean, string, bigint, symbol, null, undefined
- JS 原有类型的包装类型 Number, Boolean, String, Object, Symbol
- JS 的复合类型 object, class, Array
- TS 新增的类型 Tuple, Interface, Enum
  - Tuple 个数和类型固定的数组类型 `type Tuple = [number, string, boolean]`
  - Interface 用于描述函数、对象、构造器的结构
  - Enum 是一系列值的集合
- 字面量类型，其中字符串字面量还有模板字面量类型，比如 `aaa${string}` 可以限制字符串以 aaa 开头
- 四种特殊类型 never, void, any, unknown

<<< @/z/tsch/juejin/4-1.ts

## TS 类型操作

- 条件判断 `extends ? :`
- 约束 `extends`
- 推导 `infer`
- 联合 `|`
- 交叉 `&`
- 类型映射 
  - 索引查询 `keyof T`
  - 索引访问 `T[key]`
  - 遍历 `in`
  - 重映射 `as`
