# Learn Go with Tests

## TDD

:::tip
[Test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.

This is as opposed to software being developed first and test cases created later.
:::

1. Add a test.
2. Run all tests. The new test should fail for expected reasons.
3. Write the simplest code that passes the new test.
4. All tests should now pass.
5. Refactor as needed, using tests after each refactor to ensure that functionality is preserved.
6. Repeat.

## 示例

:::code-group
```go [adder_test.go]
// 第一步：写测试
// 第二步：运行测试，获取预期的错误信息
// ./adder_test.go:6:9: undefined: Add
package integers

import "testing"

func TestAdder(t *testing.T) {
  sum := Add(2, 2)
  expected := 4

  if sum != expected {
    t.Errorf("expected '%d' but got '%d'", expected, sum)
  }
}
```


```go [adder.go]
// 第三步和第四步：满足编译器的要求，不择手段通过测试
package integers

func Add(x, y int) int {
  return 4
}
```

```go [adder.go]
// 第五步和第六步：重构，然后重复以上步骤
package integers

func Add(x, y int) int {
  return x + y
}
```
:::

## go test

Tests Go packages (files have to end with `_test.go`).

More information: <https://golang.org/cmd/go/#hdr-Testing_flags>.

| Syntax                               | Description                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| `go test`                            | test the package found in the current directory                                    |
| `go test -v`                         | verbosely test the package in the current directory                                |
| `go test -v ./...`                   | test the packages in the current directory and all subdirectories (note the `...`) |
| `go test -v -bench .`                | test the package in the current directory and run all benchmarks                   |
| `go test -v -bench . -benchtime 50s` | test the package in the current directory and run all benchmarks for 50 seconds    |
| `go test -cover`                     | test the package with coverage analysis                                            |


## 更多测试

```go
func TestArea(t *testing.T) {
  CheckArea := func(t testing.TB, shape Shape, want float64) {
    t.Helper()
    got := shape.Area()
    if got != want {
      t.Errorf("got %.2f want %.2f", got, want)
    }
  }

  t.Run("rectangles", func(t *testing.T) {
    rec := Rectangle{12.0, 6.0}
    CheckArea(t, rec, 72.0)
  })

  t.Run("circles", func(t *testing.T) {
    cir := Circle{10}
    CheckArea(t, cir, 314.1592653589793)
  })
}
```

## 表驱动测试

:::code-group
```go [简单版]
func TestArea(t *testing.T) {
  areaTests := []struct {
    shape Shape
    want  float64
  }{
    {Rectangle{12, 6}, 72.0},
    {Circle{10}, 314.1592653589793},
  }

  for _, tt := range areaTests {
    got := tt.shape.Area()
    if got != tt.want {
      t.Errorf("got %g want %g", got, tt.want)
    }
  }
}
```

```go [更好的可读性]
func TestArea(t *testing.T) {
  areaTests := []struct {
    name    string
    shape   Shape
    hasArea float64
  }{
    {"Rectangle", Rectangle{12, 6}, 72.0},
    {"Circle", Circle{10}, 314.1592653589793},
    {"Triangle", Triangle{12, 6}, 36.0},
  }

  for _, tt := range areaTests {
    t.Run(tt.name, func(t *testing.T) {
      got := tt.shape.Area()
      if got != tt.hasArea {
        t.Errorf("%#v got %g want %g", tt.shape, got, tt.hasArea)
      }
    })
  }
}
```
:::
