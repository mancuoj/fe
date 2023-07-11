---
outline: deep
---


# Python 类型提示

3.6+ 版本新增，声明变量类型，以获得更好的编辑体验。

由于整个 FastAPI 都基于它来构建，所以浅学一下，更多请查看 [Cheatsheet](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html) 🐹

## 一个示例

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

## 具有类型参数的泛型

有些数据结构例如 `dict, list, set, tuple` 内部的值也会拥有自己的类型，Python 3.6+ 可以使用 Python 的 typing 库来声明它们。

而 Python 3.9+ 不需要导入 typing 库就可以直接使用，+ 代表兼容以上所有版本。

### List

:::code-group
```py [Python 3.9+] 1
def process_items(items: list[str]):
  for item in items:
    print(item)
```

```py [Python 3.6+] 1,3
from typing import List

def process_items(items: List[str]):
  for item in items:
    print(item)
```
:::

### Tuple, Set

> 以下尽量只展示最新的写法 🐶

```py 1
def process_items(items_t: tuple[int, int, str], items_s: set[bytes]):
  return items_t, items_s
```

包含三个元素的 Tuple 需要给出三个元素的类型。

### Dict

```py 1
def process_items(prices: dict[str, float]):
  for item_name, item_price in prices.items():
    print(item_name)
    print(item_price)
```

一个 key 的类型，一个 value 的类型。

### Union

`|` 是 Python 3.10 新增的语法。

:::code-group
```py [Python 3.10+] 1
def process_item(item: int | str):
  print(item)
```

```py [Python 3.6+] 1,3
from typing import Union

def process_item(item: Union[int, str]):
  print(item)
```
:::

### 可能是 None

```py 1,3
from typing import Optional

def say_hi(name: Optional[str] = None):
  if name is not None:
    print(f"Hey {name}!")
  else:
    print("Hello World")
```

`Optional[str]` 说明 `name` 可能是 `str` 类型，也可能是 `None`，其实就是 `str | None`，也可以写成 `Union[str, None]`。

最好使用 `str | None` 的写法，`Optional` 可选的可能会造成语义的理解错误，输入的参数其实是必需的。

## Class

```py 1-3,5
class Person:
  def __init__(self, name: str):
    self.name = name

def get_person_name(one_person: Person):
  return one_person.name
```

## [Pydantic models](https://docs.pydantic.dev/1.10/)

:::info
Data validation and settings management using Python type annotations.

Pydantic enforces type hints at runtime, and provides user friendly errors when data is invalid.

Define how data should be in pure, canonical Python; validate it with pydantic.
:::

```py
from datetime import datetime
from pydantic import BaseModel

class User(BaseModel):
  id: int
  name = "John Doe"
  signup_ts: datetime | None = None
  friends: list[int] = []

external_data = {
    "id": "123",
    "signup_ts": "2017-06-01 12:22",
    "friends": [1, "2", b"3"],
}
user = User(**external_data)
print(user)
# > User id=123 name='John Doe' signup_ts=datetime.datetime(2017, 6, 1, 12, 22) friends=[1, 2, 3]
print(user.id)
# > 123
```

将数据定义为具有属性的类，然后创建该类的实例，Pydantic 将验证数据并将其转换为适当的类型。

## Metadata Annotations

```py 1,3
from typing import Annotated

def say_hello(name: Annotated[str, "this is just metadata"]) -> str:
  return f"Hello {name}"
```

对于编辑器来说，这个类型还是 `str`，但是你可以通过 `Annotated` 来提供有关你希望程序如何运行的额外元数据。

