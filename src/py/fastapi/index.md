---
outline: deep
---

# [FastAPI 文档](https://fastapi.tiangolo.com/zh/tutorial/) 快速入门

## 开始

```sh
python3 -m venv .venv
source .venv/bin/activate

deactivate

pip install "fastapi[all]"
```

## 最小应用

:::code-group
```py [main.py]
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}
```

```sh [run]
uvicorn main:app --reload

# main -> main.py
# app -> app = FastAPI()
# --reload -> restart after code changes
```
:::

两个自动生成的文档：

- http://127.0.0.1:8000/docs
- http://127.0.0.1:8000/redoc

## 路径操作装饰器

```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}
```

`@app.get("/")` 告诉它下方的函数负责处理如下访问请求：

- 请求路径为 `/`
- 使用 `get` 操作（读取数据）

也就是说每当 FastAPI 接收到一个使用 `GET` 方法访问 `/` 的请求时就会调用下方的函数。

其他常见的 HTTP 操作有：

- `@app.post()`，创建数据
- `@app.put()`，更新数据
- `@app.delete()`，删除数据
- ...

## 路径参数

```py 1
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```

路径参数 `item_id` 将会作为参数传入函数，打开 `http://127.0.0.1:8000/items/1` 会看到响应。

FastAPI 通过类型声明提供了数据验证的功能，访问 `http://127.0.0.1:8000/items/foo` 会看到一个清晰可读的 HTTP 错误：

```json 8
{
    "detail": [
        {
            "loc": [
                "path",
                "item_id"
            ],
            "msg": "value is not a valid integer",
            "type": "type_error.integer"
        }
    ]
}
```

### 顺序很重要

如下，`/users/me` 必须放在前面，否则会匹配到 `/users/{user_id}`。

```py
@app.get("/users/me")
async def read_user_me():
    return {"user_id": "the current user"}

@app.get("/users/{user_id}")
async def read_user(user_id: str):
    return {"user_id": user_id}
```

### Enum 类

导入 `Enum` 并创建一个继承自 `str` 和 `Enum` 的子类。

```py 1,6
class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"

@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}
    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}
    return {"model_name": model_name, "message": "Have some residuals"}
```

### 包含路径

参数的名称为 `file_path`，结尾部分的 `:path` 说明该参数应匹配任意的路径。

当参数为 `/home/mancuoj/file.txt` 时，URL 为 `/files//home/mancuoj/file.txt`，会有一个双斜杠。

```py 1
@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}
```

## 查询参数

声明不属于路径参数的其他参数时，它们会被自动解析为查询参数。

```py
@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit]
```

查询参数时键值对的集合，比如 `http://127.0.0.1:8000/items/?skip=0&limit=10`

- 位于 URL 的 `?` 之后，以 `&` 分隔
- 在声明了类型之后，字符串会被转换，然后校验
- 定义了默认值，其实就相当于访问 `http://127.0.0.1:8000/items/`

### 可选参数

将默认值设为 None 即可。

```py 3
@app.get("/items/{item_id}")
# async def read_item(item_id: str, q: Union[str, None] = None):
async def read_item(item_id: str, q: str | None = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}
```

反过来说，如果你想让一个参数称为必需的，不提供默认值即可。

### bool 类型

当你声明 bool 类型时，会自动转换：

```
?b=True
?b=true
?b=1
?b=yes
?b=on
```

如上的值（无论大小写）都会被转换为 `True`。


## 请求体

当你需要把数据从客户端（比如浏览器）发送给 API 时，将其作为请求体发送。

请求体就是客户端发送给 API 的数据，响应体就是 API 发送给客户端的数据。

使用 Pydantic 模型声明请求体，使用 POST、PUT、DELETE 或是 PATCH 方法发送数据。

```py
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

@app.post("/items/")
async def create_item(item: Item):
    return item
```

通过类型声明，FastAPI 将：

- 请求体读取为 JSON
- 转换相应类型（如果需要的话）
- 验证数据
- 将接收的数据赋值到参数 item 中
- 为 Model 生成 JSON Schema 定义，并会在自动化文档中使用

### 使用模型

在函数内部可以直接访问模型对象的所有属性：

```py 3
@app.post("/items/")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
```

### 请求体 + 路径参数 + 查询参数


```py 2
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item, q: str | None = None):
    result = {"item_id": item_id, **item.dict()}
    if q:
        result.update({"q": q})
    return result
```

## 查询参数和字符串验证

为参数附加信息和验证：

:::code-group

```py [字符串长度限制] 3
@app.get("/items/")
async def read_item(
    q: Annotated[str | None, Query(min_length=3, max_length=50)] = None
):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results
```

```py [正则表达式]
q: Annotated[str | None, Query(regex="^fixquery$")] = None

# 只能匹配 fixquery，其他的都会报错
```

```py [必需值]
q: Annotated[str, Query(min_length=3)]

# 显式声明
q: Annotated[str, Query(min_length=3)] = ...

# 使用 Required
q: Annotated[str, Query(min_length=3)] = Required

# 可以接受 None，但必须要发送一个 None
q: Annotated[str | None, Query(min_length=3)] = ...
```

```py [接收多个值]
q: Annotated[list[str] | None, Query()] = None

# 同下
q: Annotated[list, Query()] = []

# 提供默认值
q: Annotated[list[str], Query()] = ["foo", "bar"]

# http://localhost:8000/items/?q=foo&q=bar
```

```py [更多元数据]
q: Annotated[
    str | None,
    Query(
        title="Query string",
        description="Query string description ...",
        min_length=3,
    ),
] = None

# 给参数添加更多信息，它们将包含在生成的 OpenAPI 中，由文档 UI 和外部工具使用
```

```py [参数别名]
q: Annotated[str | None, Query(alias="item-query")] = None

# 因为 Python 参数不能是 item-query 这样的形式，在必须的时候可以使用别名
```


```py [弃用参数]
Query(
    ...
    deprecated=True
),

# 参数弃用之后必须保留一段时间，以便用户有时间迁移，在文档中表明这一点
```

```py [排除参数]
Query(
    ...
    include_in_schema=False
),

# 从生成的 OpenAPI 中排除查询参数，同时从自动文档中排除
```
:::


## 路径参数和数字验证

就像用 `Query` 一样，使用 `Path` 为路径参数添加相同类型的验证和元数据：

:::code-group
```py 3 [元数据]
@app.get("/items/{item_id}")
async def read_item(
    item_id: Annotated[int, Path(title="The ID of the item to get")],
    q: Annotated[str | None, Query(alias="item-query")] = None,
):
    item = {"item_id": item_id}
    if q:
        item.update({"q": q})
    return item
```

```py [大于，小于，等于]
Path(title="The ID of the item to get", ge=1)
# ge >= 
# le <=
# gt >
# lt <
```
:::

## 请求体

### 多个参数

```py
class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None


class User(BaseModel):
    username: str
    full_name: Union[str, None] = None


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item, user: User):
    results = {"item_id": item_id, "item": item, "user": user}
    return results
```

FastAPI 将使用参数名称作为请求体中的 key 值，并期望类似以下内容的请求体：

```json
{
    "item": {
        "name": "Foo",
        "description": "The pretender",
        "price": 42.0,
        "tax": 3.2
    },
    "user": {
        "username": "dave",
        "full_name": "Dave Grohl"
    }
}
```


### Body

使用 `Body` 将一个单一值作为请求体的另一个 key 来处理，默认情况下会被解释为查询参数。

`Body` 具有与 `Path`，`Query` 以及后面将会看到的类完全相同的额外校验和元数据参数。

```py
@app.put("/items/{item_id}")
async def update_item(
    item_id: int, item: Item, user: User, importance: int = Body(gt=0)
):
    ...
```

如果只有一个请求体参数，但却希望得到一个带有 key 值的请求体，可以使用 `embed` 参数：

```py
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item = Body(embed=True)):
    ...
```
