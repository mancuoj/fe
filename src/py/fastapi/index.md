---
outline: deep
---

# [FastAPI 文档](https://fastapi.tiangolo.com/zh/tutorial/) 快速入门

## Setup

```sh
python3 -m venv .venv
source .venv/bin/activate

deactivate

pip install "fastapi[all]"
```

## Minimal Application

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

## Path operation decorator

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

## Path parameters

```py
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```

路径参数 `item_id` 将会作为参数传入函数，打开 `http://127.0.0.1:8000/items/1` 会看到响应。

FastAPI 通过类型声明提供了数据验证的功能，访问 `http://127.0.0.1:8000/items/foo` 会看到一个清晰可读的 HTTP 错误：

```json
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

```py
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

```py
@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}
```

## Query parameters

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

```py
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


## Request body

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

```py
@app.post("/items/")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
```

### 请求体 + 路径参数 + 查询参数


```py
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item, q: str | None = None):
    result = {"item_id": item_id, **item.dict()}
    if q:
        result.update({"q": q})
    return result
```
