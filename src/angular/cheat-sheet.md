# Cheat Sheet

:::code-group

```ts [Bootstraping]
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

// 通过指定模块中的根组件引导和启动应用
// 通常在程序的主入口文件 main.ts 中调用
// 这里的根组件是指 AppModule 中 bootstrap 数组中定义的组件
platformBrowserDynamic().bootstrapModule(AppModule)
```
:::

:::code-group
```ts [NgModules]
import { NgModule } from '@angular/core'

// 定义一个包含组件，指令，管道和供应者的模块
@NgModule({ 
  declarations: …, 
  imports: …, 
  exports: …, 
  providers: …, 
  bootstrap: … 
}) 
class MyModule {}
```

```ts [declarations]
// 属于该模块的组件，指令，管道和服务提供者列表
// 模块内部使用
declarations: [ 
  MyRedComponent, 
  MyBlueComponent, 
  MyDatePipe 
]
```

```ts [imports]
// 导入的其他模块
// 可以在当前模块使用它们所提供的功能
imports: [
  BrowserModule, 
  SomeOtherModule 
]
```

```ts [exports]
// 导出模块中的组件、管道等，使它们可以被其他模块使用
exports: [ 
  MyRedComponent, 
  MyDatePipe 
]
```

```ts [providers]
// 依赖注入服务提供者的列表，可以被模块内部以及导入该模块的其他模块使用
// 如果不声明服务提供者，会默认注册到根注入器中，将在整个应用中共享
providers: [ 
  MyService, 
  { provide: … } 
]
```

```ts [bootstrap]
// 模块被引导时要引导的组件列表，而这些组件会成为 Angular 应用程序的入口点
// 引导其实就是经历加载、解析等步骤，最后插入到浏览器 DOM 的过程
bootstrap: [MyAppComponent]
```
:::
