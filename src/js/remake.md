# 重学 JavaScript

- [JS Info](https://zh.javascript.info/)
- [阮一峰 ES6](https://es6.ruanyifeng.com/)
- [红宝书](/hbs/4/)

## 数据类型

- `number` 整数和浮点数，还包括特殊数值 `Infinity, -Infinity, NaN`
	- `1 / 0` 结果为 `Infinity`
	- `NaN` 就是 Not a number，代表不正确或为定义的数学操作得到的结果
	- 任何对 `NaN` 进行的数学运算都会返回 `NaN`（特殊情况 `NaN ** 0 = 1`）
	- 数据范围 - (2<sup>53</sup> - 1) 到 (2<sup>53</sup> - 1)，超出会出现精度问题
- `bigint` 数字以 n 结尾，可以存储更大的整数
- `string` 字符串
- `boolean` true or false
- `null` 并不是对空对象或不存在对象的引用，仅仅是一个“无，空”的特殊值
- `undefined` 已被声明但未赋值
- `symbol` 创建对象的唯一标识符
- `object`更复杂的数据类型，其他的数据类型均为原始类型

```js
// 使用 typeof x 或 typeof(x) 来判断类型，
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
```

## 浏览器交互函数

会弹出 modal 模态窗，modal 意味着用户不能与页面其他部分交互，直到处理完窗口。

```js
alert("Hello");
result = prompt(title, [default]);  // 得到用户输入，无输入且无默认值返回 null
result = confirm(question);
```


## 类型转换

> 大多数情况下，运算符和函数会自动将赋予它们的变量转换为正确的类型。

- `string` 比如 `alert(value)` 就会自动将 `value` 转换为字符串，使用 `String()` 显式转换
- `number` 比如算数函数和表达式，使用 `Number()` 显式转换
- `boolean` 直观为空的值为 false，其他为 true

:::code-group
```js [String]
String(1) // '1'，主打的就是一个没规则
String(true) // 'true'
String(null) // 'null'
String(NaN) // 'NaN'
```

```js [Number]
Number(" 123 ") // 123，去掉首尾空白字符，从剩余字符串中读取数字，出错时返回 NaN
Number(" 123 56 ") // NaN
Number(" 123z5   ") // NaN
Number("      ") // 0
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
Number(NaN) // NaN
```

```js [Boolean]
Boolean(0) // false，空也就是 0，空字符串，null，undefined，NaN
Boolean("") // false
Boolean("  ") // true
Boolean(NaN) // false
```
:::

## 运算符

::: code-group
```js [+]
'1' + 2 // '12'
2 + 2 + '1' // '41'，按顺序工作
'1' + 2 + 2 // '122'
```
:::
