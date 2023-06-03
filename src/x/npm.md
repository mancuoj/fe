# 关于 npm 的一切

## npm publish

```sh
npm adduser
npm login
npm publish (--access public)
```

## Release

首先确保已经拉取了最新的代码，通过了所有的 CI，已经登录了 npm 账号。

一般使用 [antfu/bumpp](https://github.com/antfu/bumpp) 来自动更新版本号，设置一般有：

```json
"scripts": {
  "release": "bumpp -r && pnpm -r publish",
  "release": "bumpp && pnpm publish",
  "prepublishOnly": "nr build"
},
```

反正抄我偶像的就对了！

## Changelog

使用 [antfu/changelogithub](https://github.com/antfu/changelogithub) 自动生成，创建 `.github/workflows/release.yml` 文件：

```yml
name: Release

permissions:
  contents: write

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v3
        with:
          node-version: 16.x

      - run: npx changelogithub
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

将 v 开头的标签推送到 GitHub 上时，就会触发，可与 bumpp 无缝使用。

## 更新依赖

时常更新，项目一多起来 renovate 机器人实在是烦人，所以还是用我偶像的 [antfu/taze](https://github.com/antfu/taze) 来更新最好。

不要害怕更新版本，即使可能会有一些 breaking changes，立马修总比积攒一大堆后再修强得多。

```json
"scripts": {
  "taze": "taze minor -wIr",
},
```

## 版本号说明

遵循 [semver](https://semver.org/lang/zh-CN/)，也就是语义化版本号说明。

其实就是三个数字 `x.y.z`，比如 `1.3.1`，依次为主版本号，次版本号，修订号。

重要先行版本可以加上 alpha，beta 等先行版本号，例如 `16.1.0-rc`，`16.1.0-beta.1` 等。

其中：

- 主版本号 major，就是 x，一般指你做了不兼容的 API 修改，也就是 breaking change
- 次版本号 minor，就是 y，一般指你做了向下兼容的功能性新增，也就是 feature
- 修订号 patch，就是 z，一般指你做了向下兼容的 bug 修复，也就是 bug fix
- 大版本发布之前，先行版本一般有三个版本号：alpha, beta, rc 分别表示内部测试版，公测版，候选版，rc 即 release candidate，一般会在 rc 版本之后发布正式版
- 更多问题可以查看 [FAQ](https://semver.org/lang/zh-CN/#faq)

## 指定版本范围 `^ ~`

在 `package.json` 中我们经常会看到版本号前面的一些符号，比如：

```json
"dependencies": {
  "foo": "1.0.0 - 2.9999.9999",
  "bar": ">=1.0.2 <2.1.2",
  "baz": ">1.0.2 <=2.3.4",
  "boo": "2.0.1",
  "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
  "asd": "http://asdf.com/asdf.tar.gz",
  "til": "~1.2",
  "elf": "~1.2.3",
  "two": "2.x",
  "thr": "3.3.x",
  "lat": "latest",
  "dyl": "file:../dyl"
}
```

它们的作用也很简单，就是用于指定版本范围，具体可以查看 [npm文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)，这里我只说几个重要的：

- `2.0.1` 版本写死，必须完全匹配
- `^3.2.0` 表示 minor version 的更新，也就是 x.y.z 里的 y，以后安装的版本 `>= 3.2.0 < 4.0.0`
- `~1.2.3` 表示 patch version 的更新，也就是 z，以后安装的版本 `>= 1.2.3 < 1.3.0`
  - `~1.2` 相当于 `1.2.x`
  - `~1` 相当于 `1.x`
  - 其中的 `x` 可以为任意数字
- `*` 匹配任意版本，相当于留空，也相当于单个 `x`
- `||` 匹配其中之一
- `latest` 是 npm 包的标签，默认情况下为软件的最新版本

## npm tag

我们在安装一个 npm 包时，会默认安装 `latest` 标签的版本，也就是最新版本。

但是我们可以指定安装其他标签的版本，比如使用 `npm install vue@next` 安装 `next` 标签的版本。

开发者可以在发版时指定标签：

```sh
npm publish --tag next
```

或者使用 `npm dist-tag` 命令：

```sh
npm dist-tag add 包名@版本 tag
npm dist-tag rm 包名 tag

# 查看所有标签
npm dist-tags 包名
```

## devDependencies

之前一直有误区，但其实**生产打包与 devDependencies 字段毫无关联**！

- 不需要发 npm 包的时候，写在 devDependencies 和 dependencies 里面其实没有任何区别。
- 需要发 npm 包的时候，才需要区分
  - 本该放在 dev 中：会导致打包体积过大的问题，用户 install 会下载到不必要的依赖
  - 本不应该放在 dev 的放在 dev 中：会导致依赖丢失的问题
