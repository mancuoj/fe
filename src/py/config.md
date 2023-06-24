# Python 项目配置

## VSCode

略去在个人项目中安装 black 和 isort 的过程：

:::code-group
```sh [一键安装]
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension ms-python.black-formatter
code --install-extension ms-python.isort
```

```json [保存自动格式化]
"[python]": {
  "editor.defaultFormatter": "ms-python.black-formatter",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
      "source.organizeImports": true
  },
},
"isort.args":["--profile", "black"],
```
:::

## pre-commit

- black
- flake8
- isort
- mypy
- pydocstyle
- poetry

