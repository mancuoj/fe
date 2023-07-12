# Snippetbox

## MVC

软件设计模式，强调业务逻辑与显示的分离。

- Model: 模型持有所有的数据、状态和程序逻辑
- View: 负责界面的布局和显示
- Controller: 负责模型和界面之间的交互

## Go Web

- Handler: a bit like controller, for executing application logic and writing HTTP response headers and bodies.
- Router: servemux in Go, mapping between the URL patterns and the corresponding handlers.
- Web server: Go has a built-in web server `net/http`.

## Minimal App

```go
package main

import (
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello from Snippetbox"))
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", home)
	log.Print("Starting server on http://localhost:4000/")

	err := http.ListenAndServe(":4000", mux)
	log.Fatal(err)
}
```
