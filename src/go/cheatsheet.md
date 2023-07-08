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

## 函数 Functions

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

函数是一等公民，可以作为参数或返回值，所以闭包也是可以用的。

```go
func adder() func(int) int {
  sum := 0
  return func(x int) int {
    sum += x
    return sum
  }
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

## 结构体 Structs

一个结构体就是一组字段（field），字段使用 `.` 进行访问。

结构体指针可以隐式访问，不需要使用 `(*p).X`。

```go
type Vertex struct {
  X int
  Y int
  // 可以简写为 X, Y int
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

var m = map[string]Vertex{
  "Bell Labs": Vertex{ 40.68433, -74.39967 },
  "Google": { 37.42202, -122.08408 }, // 可以省略类型名
}
```

基本操作如下。

```go
m[key] = val

val := m[key]
val, ok := m[key] // 若 key 在 map 中，ok 为 true，否则为 false 

delete(m, key)
```


## 方法 Methods

Go 没有类，但可以为结构体类型定义方法。

方法就是一种带特殊的**接收者**参数的函数，接收者 Receiver 位于 `func` 和方法名中间。

建议使用接收者类型名的第一个小写字母命名，比如 `Vertex` 的 `v`。

```go
type Vertex struct {
  X, Y float64
}

func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
  v := Vertex{3, 4}
  fmt.Println(v.Abs())
}
```

也可以为同一个包内定义的类型的接收者定义方法，但不能为其他包定义的类型（包括 `int` 等的内建类型）的接收者定义方法。

```go
type MyFloat float64

func (f MyFloat) Abs() float64 {
  if f < 0 {
    return float64(-f)
  }
  return float64(f)
}
```

可以为指针接收者声明方法，这样可以直接修改接收者指向的值。

以指针为接收者的方法被调用时，接收者既能为值又能为指针。

```go
var v Vertex
p := &v
p.Scale(10) // OK
v.Scale(5)  // OK，会隐式地取 (&v)
```

相反的，以值为接收者的方法被调用时，接收者也是既能为值又能为指针。

```go
var v Vertex
v.Abs() // OK
p := &v
p.Abs() // OK，会隐式地取 (*p)
```

## 接口 Interfaces

接口类型是一组方法签名定义的集合。

无需显式声明，类型可以通过实现一个接口的所有方法来实现该接口。

在内部，接口值可以看做包含值和具体类型的元组 `(type value)`。

即使接口具体值为 `nil`，仍可调用方法，但需要特殊处理。

```go
// 接口
type Shape interface {
  Area() float64
  Perimeter() float64
}

// 类型
type Rectangle struct {
  Length, Width float64
}

// 方法一
func (r Rectangle) Area() float64 {
  return r.Length * r.Width
}

// 方法二
func (r Rectangle) Perimeter() float64 {
  return 2 * (r.Length + r.Width)
}

// 实例
func main() {
  var r Shape = Rectangle{Length: 3, Width: 4}
  fmt.Printf("Type of r: %T, Area: %v, Perimeter: %v.", r, r.Area(), r.Perimeter())
}

// 接口值保存了一个具体底层类型的具体值
func describe(i I) {
  fmt.Printf("(%v, %T)\n", i, i)
}
```

没有定义方法的接口值称为空接口.

空接口可以保存任意类型的值，所以可以用来处理未知类型的值。

```go
var i interface{}
```

使用类型断言 `t, ok := i.(T)` 可以访问接口值底层具体值。

断言接口值 `i` 保存了具体类型 `T`

- 若 `i` 确实保存了一个 `T`，则 `ok` 为 `true`，底层类型为 `T` 的具体值会赋值给变量 `t`
- 否则，`ok` 为 `false`，`t` 为 `T` 类型的零值，程序不会产生恐慌，不定义 `ok` 时会产生恐慌

你也可以使用类型选择按顺序从几个类型断言中选择分支。

```go
func do(i interface{}) {
  switch v := i.(type) {
  case int:
    fmt.Printf("Twice %v is %v\n", v, v*2)
  case string:
    fmt.Printf("%q is %v bytes long\n", v, len(v))
  default:
    fmt.Printf("I don't know about type %T!\n", v)
  }
}

func main() {
  do(21)
  do("hello")
  do(true)
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

## 并发 Concurrency

goroutine 是由 Go 运行时管理的轻量级线程。

信道是带有类型的管道，可以通过信道操作符 `<-` 来发送或接收值。

以下示例将求和任务分给两个 goroutine，一旦它们完成了计算，就可以计算最终结果。

```go
func sum(s []int, c chan int) {
  sum := 0
  for _, v := range s {
    sum += v
  }
  c <- sum // 将和送入 c
}

func main() {
  s := []int{7, 2, 8, -9, 4, 0}

  c := make(chan int)
  go sum(s[:len(s)/2], c)
  go sum(s[len(s)/2:], c)
  x, y := <-c, <-c // 从 c 中接收

  fmt.Println(x, y, x+y)
}
```

可以提供第二个参数作为信道的缓冲区长度，当缓冲区被填满后再向其发送数据时才会阻塞。

发送者可以通过 `close` 关闭一个信道来表示没有需要发送的值了（只有发送者可以关闭）。

接收者可以通过为接收表达式分配第二个参数 `ok` 来测试信道是否被关闭。

循环 `for i := range c` 会不断从信道接收值，直到它被关闭。

```go
func fibonacci(n int, c chan int) {
  x, y := 0, 1
  for i := 0; i < n; i++ {
    c <- x
    x, y = y, x+y
  }
  close(c)
}

func main() {
  c := make(chan int, 10)
  go fibonacci(cap(c), c)
  for i := range c {
    fmt.Println(i)
  }
}
```

`select` 语句使得一个 goroutine 可以等待多个通信操作。

会阻塞到某个分支可以继续执行为止，这时就会执行该分支。

多个分支都准备好时会随机选择一个执行，其他分支都没有准备好时，`default` 分支会被执行。

```go
func main() {
  tick := time.Tick(100 * time.Millisecond)
  boom := time.After(500 * time.Millisecond)
  for {
    select {
    case <-tick:
      fmt.Println("tick.")
    case <-boom:
      fmt.Println("BOOM!")
      return
    default:
      fmt.Println("    .")
      time.Sleep(50 * time.Millisecond)
    }
  }
}
```

使用 `sync.Mutex` 保证每次只有一个 goroutine 能访问一个共享的变量。

```go
// SafeCounter 的并发使用是安全的
type SafeCounter struct {
  v   map[string]int
  mux sync.Mutex
}

// Inc 增加给定 key 的计数器的值
func (c *SafeCounter) Inc(key string) {
  c.mux.Lock()
  // Lock 之后同一时刻只有一个 goroutine 能访问 c.v
  c.v[key]++
  c.mux.Unlock()
}

// Value 返回给定 key 的计数器的当前值
func (c *SafeCounter) Value(key string) int {
  c.mux.Lock()
  // Lock 之后同一时刻只有一个 goroutine 能访问 c.v
  defer c.mux.Unlock()
  return c.v[key]
}

func main() {
  c := SafeCounter{v: make(map[string]int)}
  for i := 0; i < 1000; i++ {
    go c.Inc("somekey")
  }

  time.Sleep(time.Second)
  fmt.Println(c.Value("somekey"))
}
```

## 嵌入 Embed


## 泛型 Generic
