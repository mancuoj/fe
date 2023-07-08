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

## 常量 Constants

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

## 指针 Pointers

指针保存了值的内存地址，类型 `*T` 是指向 `T` 类型值的指针，其零值为 `nil`。

`&` 会生成一个指向其操作数的指针，`*` 操作符表示指针指向的底层值。

```go
var p *int

i := 15
p = &i

fmt.Println(*p) // 读
*p = 21         // 写
```

Go 中没有指针运算，以下是使用指针的例子。

```go
a := 10 // 有一块内存存放了 10，内存地址由系统自动分配
a = 20  // 内存存放的值变成 20
p := &a // 创建指针 p 为 a 的内存地址，& 为取地址操作
*p = 30 // 通过 * 访问该内存地址，修改存放值为 30
fmt.Println(*p)

ptr := new(int) // 动态申请了一块内存空间，返回该内存空间的地址
*ptr = 15
```

## 结构体 Struct

一个结构体就是一组字段（field），字段使用 `.` 进行访问。

结构体指针可以隐式访问，不需要使用 `(*p).X`。

```go
type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	v.X = 4

  p := &v
  p.X = 5
}
```

结构体文法可以直接列出字段值来分配一个结构体，使用 `Name:` 语法可以仅列出部分字段值（与顺序无关）。

```go
var (
	v1 = Vertex{1, 2}  // 创建一个 Vertex 类型的结构体
	v2 = Vertex{X: 1}  // Y:0 被隐式地赋予
	v3 = Vertex{}      // X:0 Y:0
	p  = &Vertex{1, 2} // 创建一个指针，结构体的地址
)
```

## 数组和切片 Arrays and Slices

类型 `[n]T` 表示由 n 个 `T` 类型的值的数组。

数组长度是其类型的一部分，所以不能改变大小。

```go
var a [10]int
```

类型 `[]T` 表示一个元素类型为 `T` 的切片，甚至可以是切片的切片。

切片是对数组的引用，它并不储存数据，更改切片会修改原数组中的对应元素，与它共享底层数组的切片也会观测到这些修改。

```go
q := []int{2, 3, 5, 7, 11, 13}
// 其实会创建一个数组 [6]int{2, 3, 5, 7, 11, 13}，然后构建一个引用它的切片
```

通过两个下标来界定，即上界和下界，两者都是可选的，默认值为 0，选择一个半开区间。

以下切片会选择 `primes` 数组中下标从 1 到 3 的元素。

```go
primes := [6]int{2, 3, 5, 7, 11, 13}
var s []int = primes[1:4]
```

切片的长度就是它包含的元素的个数，容量是从它的第一个元素到底层数组末尾元素的个数。

可以通过表达式 `len(s)` 和 `cap(s)` 来获取。

```go
s := []int{2, 3, 5, 7, 11, 13} // len=6, cap=6
s = s[:0]                      // len=0, cap=6, []
s = s[:4]                      // len=4, cap=6, [2, 3, 5, 7]
s = s[2:]                      // len=2, cap=4, [5, 7]
```

`var s int[]` 切片的零值是 `nil`，长度和容量为 0 且没有底层数组。

使用内建函数 `make` 来创建切片，它会创建一个元素为零值的数组然后返回一个引用它的切片。

```go
a := make([]int, 5)    // len=5, cap=5, [0, 0, 0, 0, 0]
b := make([]int, 0, 5) // len=0, cap=5, []
c := b[:2]             // len=2, cap=5, [0, 0]
d := c[2:5]            // len=3, cap=3, [0, 0, 0]
```

使用内建函数 `func append(s []T, vs ...T) []T` 向切片追加元素，返回一个包含了原切片所有元素和新添加元素的切片。

如果底层数组太小无法容纳时，会分配一个更大的数组，返回的切片会指向这个新的数组。

```go
var s []int            // len=0 cap=0 []
s = append(s, 0)       // len=1 cap=1 [0]
s = append(s, 1)       // len=2 cap=2 [0, 1]
s = append(s, 2, 3, 4) // len=5 cap=6 [0, 1, 2, 3, 4]
```

## 映射 Maps

`key-value` 结构，类似于其他语言中的哈希表或字典。

零值为 `nil`， 不能对其赋值，使用 `make` 函数创建给定类型的 map 并初始化。

```go
type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
}
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

`range` 形式可以遍历切片或 Map，每次遍历都会返回下标和对应元素的副本值。

```go
pow := []int{1, 2, 4, 8, 16, 32, 64, 128}
for i, v := range pow {
  fmt.Printf("2**%d = %d\n", i, v)
}
```

可以使用 `_` 忽略下标和值。

```go
for i, _ := range pow
for _, value := range pow

for i := range pow // 只需要下标时也可以直接忽略第二个变量
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


## 错误控制 Error Control

`defer` 语句会将函数推迟到外层函数返回之后执行。

推迟调用的函数参数会立即求值，但直到外层函数返回前，该函数都不会被调用。

```go
func main() {
  defer fmt.Println("Done")
  fmt.Println("Working...")
}
```

推迟的函数调用会被压入一个栈中，当外层函数返回时，推迟函数的执行顺序与出现顺序相反。

```go
func main() {
	for i := 0; i < 10; i++ {
		defer fmt.Print(i, " ")
	}
}
// 9 8 7 6 5 4 3 2 1 0
```

TODO: Lambda Defer

