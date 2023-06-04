---
outline: deep
---


# Python 类型提示

3.6+ 版本新增，声明变量类型，以获得更好的编辑体验。

由于整个 FastAPI 都基于它来构建，所以浅学一下。

## 实例

```py
def get_name_with_age(name: str, age: int):
  name_with_age = name + " is this old: " + str(age)
  return name_with_age
```

## 简单类型

- `str`
- `int`
- `float`
- `bool`
- `bytes` 不可变二进制字节序列

## 嵌套类型

容器数据结构例如 `dict, list, set, tuple` 内部的值也会拥有自己的类型，可以使用 Python 的 typing 库来声明它们。

### List


