# 关于 Monorepo 的一切

A monorepo is a single repository containing multiple distinct projects, with well-defined relationships.

## pnpm workspace

只需要在根目录创建一个 `pnpm-workspace.yaml` 文件，然后在其中指定目录即可：

```yaml
packages:
  - packages/*
  # /** 包括所有子文件夹
```

然后在 `packages` 目录下创建子项目，每个子项目都是一个独立的 npm 包，可以有自己的 `package.json` 文件。

子项目间可以通过 `pnpm add <package-name>` 来互相引用：

```json
"dependencies": {
  "@mancuoj/xxx": "workspace:*"
}
```
