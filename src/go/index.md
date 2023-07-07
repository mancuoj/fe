# Go

> 因为公司项目后端都是 Go，学会了方便之后和他们撕逼

- [官网入门教程](https://go.dev/doc/tutorial/)
- [Go 指南](https://tour.go-zh.org/list)
- [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/)
- [Go by Example](https://github.com/mmcgrana/gobyexample)
- [七天用 Go 动手写/从零实现系列](https://github.com/geektutu/7days-golang)

## Install

```sh
wget https://go.dev/dl/go1.20.5.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.20.5.linux-amd64.tar.gz

# 修改 .zshrc
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH

go version
```
