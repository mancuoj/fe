# Angular Docs

毕竟是处在前端鄙视链顶端的框架，还是要学一下的，写代码直接看 [Cheat Sheet](./cheat-sheet) 吧 🐶

## Setup

```sh
ni -g @angular/cli
ng new my-app
cd my-app
ng serve

ng --help
ng new --help
ng generate c my-component
```

- [Angular - ng generate](https://angular.io/cli/generate#component) 查看更多参数

## Component

::: code-group

```ts [@Component]
import { Component } from '@angular/core'

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

```html [Usage]
<hello-world></hello-world>
```


```html [DOM]
<hello-world>
    <h2>Hello World</h2>
    <p>This is my first component!</p>
</hello-world>
```
::: 

## Templates

:::code-group

```js [template]
@Component ({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {
  message = 'Hello, World!'
  canEdit = false

  onEditClick() {
    this.canEdit = !this.canEdit
    if (this.canEdit)
      this.message = 'You can edit me!'

  }
}
```

```html [插值]
<p>{{ message }}</p>
```

```html [绑定属性]
<p [id]="sayHelloId" [style.color]="fontColor">
  You can set my color in the component!
</p>
```

```html [绑定方法]
<button type="button" (click)="onEditClick()">
  Make text Editable
</button>
```

```html [指令，如*ngIf]
<div *ngIf="canEdit; else noEdit">
  <p>You can edit the following paragraph.</p>
</div>

<!-- else -->
<ng-template #noEdit>
  <p>The following paragraph is read only. Try clicking the button!</p>
</ng-template>

<p [contentEditable]="canEdit">{{ message }}</p>
```

:::



## Dependency injection

:::code-group

```ts [logger.service.ts]
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class Logger {
  writeCount(count: number) {
    console.warn(count)
  }
}
```

```ts [hello-di.component.ts]
import { Component } from '@angular/core'
import { Logger } from '../logger.service'

@Component({
  selector: 'hello-di',
  templateUrl: './hello-di.component.html'
})
export class HelloWorldDependencyInjectionComponent {
  count = 0

  // 创建组件实例时，Angular会自动注入 Logger 实例
  constructor(private logger: Logger) { }

  onLogMe() {
    // 调用 Logger 服务的方法
    this.logger.writeCount(this.count)
    this.count++
  }
}
```

:::

## [CLI](https://angular.io/cli)

| command     | details                                                              |
| ----------- | -------------------------------------------------------------------- |
| ng build    | Compiles an Angular application into an output directory             |
| ng serve    | Builds and serves your application, rebuilding on file changes       |
| ng generate | Generates or modifies files based on a schematic                     |
| ng test     | Runs unit tests on a given project                                   |
| ng e2e      | Builds and serves an Angular application, then runs end-to-end tests |


## First-party libraries

| library                                                      | details                                                                                                                                       |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Angular Router](https://angular.io/guide/router)            | Advanced client-side navigation and routing based on Angular components. Supports lazy-loading, nested routes, custom path matching, and more |
| [Angular Forms](https://angular.io/guide/forms-overview)     | Uniform system for form participation and validation                                                                                          |
| [Angular HttpClient](https://angular.io/guide/http)          | Robust HTTP client that can power more advanced client-server communication                                                                   |
| [Angular Animations](https://angular.io/guide/animations)    | Rich system for driving animations based on application state                                                                                 |
| [Angular PWA](https://angular.io/guide/service-worker-intro) | Tools for building Progressive Web Applications (PWA) including a service worker and Web application manifest                                 |
| [Angular Schematics](https://angular.io/guide/schematics)    | Automated scaffolding, refactoring, and update tools that simplify development at large scale                                                 |

## Try it

- [mancuoj/angular-try-it](https://github.com/mancuoj/angular-try-it)
- [mancuoj/angular-first-app](https://github.com/mancuoj/angular-first-app)
- [mancuoj/angular-tour-of-heroes](https://github.com/mancuoj/angular-tour-of-heroes)
- [mancuoj/angular-demo](https://github.com/mancuoj/angular-demo)
