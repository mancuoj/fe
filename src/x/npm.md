# 关于 npm 的一切

## Release

首先确保已经拉取了最新的代码，通过了所有的 CI，确保已经登录了 npm 账号。

一般使用 [antfu/bumpp]https://github.com/antfu/bumpp 来自动更新版本号，设置一般有：

```json
"scripts": {
  "release": "bumpp -r && pnpm -r publish",
  "release": "bumpp && pnpm publish",
  "prepublishOnly": "nr build"
},
```

反正抄我偶像的就对了，我的练手项目 [mancuoj/first-monorepo](https://github.com/mancuoj/first-monorepo)。

## Changelog



## 更新依赖

时常更新，项目一多起来 renovate 机器人实在是烦人，所以还是用我偶像的 taze 来更新最好。

不要害怕更新版本，即使可能会有一些 breaking change，立马修总比积攒一大堆后再修强得多。

```json
"scripts": {
  "taze": "taze minor -wIr",
},
```
