# Rye

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
