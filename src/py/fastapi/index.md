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

```py 6
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

```py 1
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```

路径参数 `item_id` 将会作为参数传入函数，打开 http://127.0.0.1:8000/items/1 会看到响应。

为路径参数声明类型会给函数提供编辑器支持，包括错误检查、代码补全等等。

如果你访问 http://127.0.0.1:8000/items/foo 会看到一个清晰可读的 HTTP 错误：

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

FastAPI 通过同样的类型声明提供了数据验证和转换功能。

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


