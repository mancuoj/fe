# [Rye](https://github.com/mitsuhiko/rye)

:::tip
An Experimental Package Management Solution for Python
:::

## Install

```sh
curl -sSf https://rye-up.com/get | bash
echo 'source "$HOME/.rye/env"' >> ~/.zshrc

rye self update
rye self uninstall
```

## Basics

```sh
rye init my-project  # 新建项目
rye pin 3.10  # 更改 python 版本
rye sync  # 创建环境，锁定依赖

rye add "flask>=2.0"  # 添加依赖
rye sync  # 安装

rye remove flask # 删除依赖

# 虚拟环境运行可执行文件
rye add black
rye sync
rye run black

# 或者直接激活
. .venv/bin/activate
deactivate
```

## Global config

在 `.rye` 文件夹下新建 `config.toml`，可有以下配置：

```toml
# 新建项目的默认配置
[default]
requires-python = ">= 3.8"
toolchain = "cpython@3.11.1"
build-system = "hatchling"
license = "MIT"

[proxy]
# the proxy to use for HTTP (overridden by the http_proxy environment variable)
http = "http://127.0.0.1:4000"
# the proxy to use for HTTPS (overridden by the https_proxy environment variable)
https = "http://127.0.0.1:4000"

# 如其名，强制使用 rye 管理
[behavior]
force_rye_managed = false

[[sources]]
name = "default"
url = "http://pypi.org/simple/"
```

## project.toml

```toml
# rye add
# rye remove
[project]
dependencies = [
    "mkdocs~=1.4.3",
    "mkdocs-material~=9.1.12",
    "pymdown-extensions~=9.11",
]

# rye add --dev
[tool.rye]
dev-dependencies = ["black~=23.3.0"]

# rye add --excluded
# which are never installed
[tool.rye]
excluded-dependencies = ["cffi"]

# 强制使用 rye 管理，主要影响一些 virtualenvs 的自动创建
[tool.rye]
managed = true

# 使用 PyPI 之外的源
[[sources]]
name = "default"
url = "http://pypi.org/simple/"

# 自定义脚本
# rye run
[tool.rye.scripts]
# 以下三种写法等价
devserver = "flask run --app ./hello.py --debug"
devserver-alt = ["flask", "run", "--app", "./hello.py", "--debug"]
devserver-explicit = { cmd = "flask run --app ./hello.py --debug" }

# cmd 数组形式
http = { cmd = ["python", "-mhttp.server", "8000"] }

# chain 一个接一个执行，任意一个失败则退出
lint = { chain = ["lint:black", "lint:flake8" ] }
"lint:black" = "black --check src"
"lint:flake8" = "flake8 src"

# workspace 
# 声明工作区根，子文件中发现的所有 Python 项目都会被包含进来并共享同一个 virtualenv
# 
[tool.rye.workspace]
members = ["src"]
```

## Syncing and Locking

```sh
# rye sync 会更新 virtualenv 和 lock 文件
# 如果只想更新 lock 文件，可以使用 rye lock
rye lock --update-all

# 额外依赖
rye add --optional=web flask
rye lock --features=web
rye lock --features=package-name/feature-name  # working with workspaces
rye lock --all-features

# 更新预发布版本
rye lock Flask --pre
```

## Global tools

```sh
rye install black
rye uninstall black
rye tools list
rye tools list --include-scripts
```

## Publish

```sh
rye version 0.2.0
rye build
rye publish
```
