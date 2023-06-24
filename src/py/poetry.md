# [Poetry](https://python-poetry.org/)

:::tip
PYTHON PACKAGING AND DEPENDENCY MANAGEMENT MADE EASY
:::

## Install

```sh
curl -sSL https://install.python-poetry.org | POETRY_HOME=/etc/poetry python3 -
# 按提示操作

poetry self update
```

## Basics

```sh
poetry new hello-poetry
poetry init # 已有项目

poetry add "fastapi[all]"
poetry install # 安装 toml 配置中的所有依赖项（lock 

poetry update # 安装最新版本，相当于删除 lock 文件重装依赖
poetry run pytest

poetry shell # 虚拟环境
deactivate # 退出虚拟环境
```

## Dependency Group

```toml
[tool.poetry.dependencies]  # main dependency group
httpx = "*"
pendulum = "*"

[tool.poetry.group.test.dependencies]
pytest = "^6.0.0"
pytest-mock = "*"

[tool.poetry.group.dev.dependencies]
pytest = "^6.0.0"
pytest-mock = "*"

# 声明为可选组
[tool.poetry.group.docs]
optional = true

[tool.poetry.group.docs.dependencies]
mkdocs = "*"
```

```sh
poetry add pytest --group test # 组添加
poetry remove mkdocs --group docs # 组删除

poetry install # 安装所有非可选组的依赖项

poetry install --without test,docs # 排除组
poetry install --with docs # 选择可选组

poetry install --only docs # 安装特定组
poetry install --only-root # 安装根目录

poetry install --sync # 依赖同步
```

## Publish

```sh
poetry config pypi-token.pypi <my-token>

poetry build
poetry publish
poetry publish --build # 一步到位
```

## Env

```sh
poetry env info # 当前虚拟环境
poetry env list # 项目的所有虚拟环境

poetry env use /full/path/to/python
poetry env use python3.7
poetry env use 3.7
poetry env use system

poetry env remove xxx
poetry env remove --all
```
