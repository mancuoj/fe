# Cheatsheet

## 包 Packages

每个 Go 程序都是由包构成的，程序从 main 包开始运行。

```go
package main
```

可以导入别的包。

```go
import (
  "fmt"
  "math/rand"
)

// 当然也可以分开导入
import "fmt"
import "math/rand"

// 导入时可以重命名
import r "math/rand"

import (
  "fmt"
  r "math/rand"
)
```

在 Go 中，如果一个名字以大写字母开头，那么它就是已导出的。

```go
func Hello() {
  ...
}
```

TODO: internal packages

## 函数 Function

可以没有参数或接受多个参数，类型在变量名后。

```go
func add(x int, y int) {
  return x + y
}
```

连续多个形参类型相同时，可只写最后一个。

```go
func add(x, y int) {
  return x + y
}
```

可以返回任意数量的返回值。

```go
func swap(x, y string) (string, string) {
  return y, x
}
```

可以直接命名返回值，它们会被当做在函数顶部定义的变量。

没有参数的 `return` 语句会直接返回已命名的返回值。

```go
func add(x, y int) (sum int) {
  sum = x + y
  return
}
```

可以使用可变函数参数。

```go
func sum(numbers ...int) (total int) {
  for _, number := range numbers {
    total += number
  }
  return 
}
```

## 变量 Variables

用 `var` 可以在包或函数级别声明一个变量列表，与参数列表相似，需要声明变量的类型。

变量声明可以对应初始值，此时不需要声明类型，变量会从初始值中获得类型。

```go
var i, j int
var s string

var i, j int = 1, 2
var i, j = 1, 2

// 变量也可以分组声明
var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)
```

**函数内**可以使用短声明变量，因为函数外的每个语句都需要以关键字开始。

```go
func main() {
  var i = 1
  k := 3
}
```

## 基本类型 Basic Types

- `bool`
- `string`
- `int, int8, int16, int32, int64`
- `uint, uint8, uint16, uint32, uint64, uintptr`
- `byte` uint 的别名
- `rune` int32 的别名，表示一个 Unicode 码点
- `float32 float64`
- `complex32 complex64`

`int`, `uint` 和 `uintptr` 在 32 位系统上通常为 32 位宽，在 64 位系统上则为 64 位宽。

需要一个整数值时就使用 `int` 类型，除非有特殊的理由使用固定大小或无符号的整数类型。

```go
isTrue   := true
isFalse  := false

s1 := "Hello" + "World"
s2 := `A "raw" string literal
can include line breaks.`

num := 3             // int
num := 3.1           // float64
num := 3 + 4i        // complex128
num := byte('a')     // byte (alias: uint8)
var u uint = 7       // uint (unsigned)
var p float32 = 22.7 // 32-bit float
```

没有明确初始值的变量会赋予“零值”。

- 数值类型为 `0`
- 布尔类型为 `false`
- 字符串为空字符串 `""`

表达式 `T(v)` 可以将值 `v` 转换为类型 `T`，两种类型需相互兼容。

没有隐式转换，不同类型间的赋值必须显示声明（强制转换）。

```go
i := 42
f := float64(i)
u := uint(f)
```

声明一个变量而不指定其类型时，变量的类型由右值推导得出。

右值声明了类型时，左值新变量的类型与其相同。

```go
var i int
j := int // j 也是 int 类型
```

右边声明未指定的数值常量时，新变量的类型就可能是 `int, float64, complex18` 了。

```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```

常量使用 `const` 声明，不能使用 `:=` 语法，可以是字符、字符串、布尔值或数值。

```go
const Pi = 3.14

// 分组声明
const (
  s string = "constant"
  Phi = 1.618
)

// 常量枚举，a = 0, b = 1, c = 2
const (
  a = iota
  b
  c
)
```

## 条件控制 Flow Control

Go 只有一种循环结构：`for` 循环。与其他语言类似，由三部分组成：

- 初始化语句：第一次迭代前执行，通常为短声明变量，仅在 `for` 作用域中可见
- 条件表达式：每次迭代前求值，求值结果为 `false` 时就会终止循环
- 后置语句：每次迭代后执行

与其它语言不同，没有小括号，只有大括号。

```go
sum := 0
for i := 0; i < 10; i++ {
  sum += i
}
```

初始化语句和后置语句可选。

```go
sum := 1
for ; sum < 1000; {
  sum += sum
}
```

此时去掉分号即变为其他语言中的 `while` 循环。

```go
sum := 1
for sum < 1000 {
  sum += sum
}
```

省略循环条件即是无限循环。

```go
for {
  ...
}
```

`if` 语句与 `for` 类似，同样不需要小括号，也可以在条件表达式之前执行一个简单的语句。

分支与其他语言类似，即 `else if` 和 `else`。

```go
func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	}
	return lim
}
```

在 `if` 的简短语句中声明的变量可以在任何对应的 else 块中使用。

```go
func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
    return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	// 这里开始就不能使用 v 了
	return lim
}
```

使用 `switch-case` 简化一连串的 `if-else` 语句。

Go 会自动为每个 case 提供 `break` 语句，除非以 `fallthrough` 语句结束，否则分支会自动终止。

```go
switch os := runtime.GOOS; os {
case "darwin":
  fmt.Println("OS X.")
case "linux":
  fmt.Println("Linux.")
default:
  fmt.Printf("%s.\n", os)
}
```

`switch` 可以省略条件用于编写长的 `if-then-else` 链。

```go
t := time.Now()
switch {
case t.Hour() < 12:
  fmt.Println("Good morning!")
case t.Hour() < 17:
  fmt.Println("Good afternoon.")
default:
  fmt.Println("Good evening.")
}
```

