# Cheat Sheet


## 启动

:::code-group

```ts [Bootstraping]
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

// 通过指定模块中的根组件引导和启动应用
// 通常在程序的主入口文件 main.ts 中调用
// 这里的根组件是指 AppModule 中 bootstrap 数组中定义的组件
platformBrowserDynamic().bootstrapModule(AppModule)
```
:::


## 模块

:::code-group
```ts [NgModules]
import { NgModule } from '@angular/core'

// 定义一个包含组件，指令，管道和服务提供者的模块
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

## 模板语法

:::code-group
```html [template syntax]
<input [value]="firstName">
<div [attr.role]="myAriaRole">
```

```html [style]
<div [class.extra-sparkle]="isDelightful">
<div [style.width.px]="mySize">
```

```html [event]
<button (click)="readRainbow($event)">
```

```html [string]
<div title="Hello {{ponyName}}">
<!-- 等价于 ↓ -->
<div [title]="'Hello ' + ponyName">

<p>
  Hello {{ponyName}} 
</p>
```

```html [two-way]
<my-cmp [(title)]="name">
<!-- 等价于 ↓ -->
<my-cmp [title]="name" (titleChange)="name=$event">
```

```html [local var]
<!-- 绑定该元素实例，可以在模板的数据绑定和事件绑定中使用 -->
<video #movieplayer …></video> 
<button (click)="movieplayer.play()"> 
  Play 
</button>
```

```html [*]
<!-- 将元素转换为嵌入模板 -->
<p *myUnless="myExpression"> 
  … 
</p>
<!-- 等价于 ↓ -->
<ng-template [myUnless]="myExpression"> 
  <p> 
    … 
  </p> 
</ng-template>
```

```html [others]
<p> 
  Card No.: {{cardNumber | myCardNumberFormatter}} 
</p>

<p> 
  Employer: {{employer?.companyName}} 
</p>

<svg:rect x="0" y="0" width="100" height="100"/>
<svg>
  <rect x="0" y="0" width="100" height="100"/> 
</svg>
```
:::


:::code-group
```ts [built-in directives]
import { CommonModule } from '@angular/common'
```

```html [if]
<!-- 删除或重新创建 DOM -->
<section *ngIf="showSection">
```

```html [for]
<li *ngFor="let item of list">
```

```html [switch]
<div [ngSwitch]="conditionExpression">
  <ng-template [ngSwitchCase]="case1Exp"> 
    … 
  </ng-template>
  <ng-template ngSwitchCase="case2LiteralString"> 
    … 
  </ng-template>
  <ng-template ngSwitchDefault> 
    … 
  </ng-template> 
</div>
```

```html [style]
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">

<div [ngStyle]="{'property': 'value'}"> 
<div [ngStyle]="dynamicStyles()">
```
:::


:::code-group
```ts [forms]
import { FormsModule } from '@angular/forms'
```

```html
<input [(ngModel)]="userName">
```
:::

## 装饰器

:::code-group
```ts [class decorators]
import { Directive, … } from '@angular/core'

@Component({ ... })
@Directive({ ... })
@Pipe({ ... })
@Injectable({ ... })
```

```ts [for components and directives]
import { Input, … } from '@angular/core'

// 父组件通过 [myProperty] 向子组件传值
@Input() myProperty

// 子组件定义一个输出事件，通过 myEvent.emit() 触发，父组件通过 (myEvent) 接收
@Output() myEvent = new EventEmitter()

// 将宿主元素的属性绑定到组件或指令的属性上
@HostBinding('class.valid') isValid

// 在宿主元素上绑定监听事件，然后通过 onClick() 订阅该事件
@HostListener('click', ['$event']) 
onClick(e) {…}
```

```ts [more]
// 查询内容投影中满足条件的单个子组件
// 会将查询结果绑定到 myChildComponent 属性上，可以通过它访问和操作子组件
// 内容投影 <ng-content></ng-content> 类似于 React 的 props.children
@ContentChild(myPredicate) myChildComponent

// 类似于 @ContentChild，但查询结果是一个 QueryList 对象
@ContentChildren(myPredicate) myChildComponents

// 查询视图中的子组件，不适用于指令
@ViewChild(myPredicate) myChildComponent
@ViewChildren(myPredicate) myChildComponents
```
:::


:::code-group
```ts [directive config]
@Directive({ 
  property1: value1, 

  ...

  // 选择器包含元素、属性、类名和 :not()，但不支持父子关系选择器
  selector: '.cool-button:not(a)'
  providers: [ 
    MyService, 
    { provide: … } 
  ]
})
```

```ts [component config]
/* @Component 扩展自 @Directive，所以可以使用 @Directive 的配置项 */
viewProviders: [MyService, { provide: … }]

// 内联或外部模板
template: 'Hello {{name}}' 
templateUrl: 'my-component.html'

// 内联或外部样式
styles: ['.primary {color: red}'] 
styleUrls: ['my-component.css']
```

```ts [dependency injection config]
{ provide: MyService, useClass: MyMockService }

{ provide: MyService, useFactory: myFactory }

{ provide: MyValue, useValue: 41 }
```
:::


## Hooks

:::code-group
```ts [hooks]
// 最开始调用，用来注入依赖
constructor(myService: MyService, …) { … }

// 更改输入属性后，处理内容或子视图前
ngOnChanges(changeRecord) { … }

// 检查输入属性时
ngDoCheck() { … }

// 检查内容后
ngAfterContentChecked() { … }

// 检查视图后
ngAfterViewChecked() { … }
```

```ts [lifecycle]
// 构造函数后，初始化输入属性，并且会首先调用 ngOnChanges 一次
ngOnInit() { … }

// 初始化后
ngAfterContentInit() { … }

// 视图初始化后
ngAfterViewInit() { … }

// 被销毁前调用一次
ngOnDestroy() { … }
```
:::

## 路由

:::code-group
```ts [router]
import { Routes, RouterModule, … } from '@angular/router'

const routes: Routes = [ 
  { path: '', component: HomeComponent }, 
  { path: 'path/:routeParam', component: MyComponent }, 
  { path: 'staticPath', component: … }, 
  { path: '**', component: … }, 
  { path: 'oldPath', redirectTo: '/staticPath' }, 
  { path: …, component: …, data: { message: 'Custom' } } 
]
 
const routing = RouterModule.forRoot(routes)
```

```html [outlet]
<router-outlet></router-outlet> 
<router-outlet name="aux"></router-outlet>
```

```html [nav]
<!-- 根路由使用 /，子路由使用 ./，兄弟或父路由使用 ../ -->
<a routerLink="/path"> 
<a [routerLink]="[ '/path', routeParam ]"> 
<a [routerLink]="[ '/path', { matrixParam: 'value' } ]"> 
<a [routerLink]="[ '/path' ]" [queryParams]="{ page: 1 }"> 
<a [routerLink]="[ '/path' ]" fragment="anchor">

<!-- 成为当前活动路由时，将所提供的类或属性添加到元素中 -->
<a [routerLink]="[ '/path' ]" routerLinkActive="active">
<a [routerLink]="[ '/path' ]" routerLinkActive="active" ariaCurrentWhenActive="page">
```

```ts [guard]
/* 返回值为 boolean | UrlTree */
// 是否允许用户访问当前页面
function canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => { … } 

{ path: …, canActivate: [canActivateGuard] }

// 包含子路由 children
function canActivateChildGuard: CanActivateChildFn = 
( 
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot 
) => { … } 

{ path: …, canActivateChild: [canActivateGuard], children: … }


// 是否允许用户离开当前页面
function canDeactivateGuard: CanDeactivateFn<T> = ( 
  component: T, 
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot 
) => { … } 

{ path: …, canDeactivate: [canDeactivateGuard] }
```

```ts [more]
// 访问路由前，预先获取数据，添加到 ActivatedRoute 的 data 属性中
function resolveGuard implements ResolveFn<T> = 
( 
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot 
) => { … }
{ path: …, resolve: [resolveGuard] }


// 确保满足某些条件后才加载模块
function canLoadGuard: CanLoadFn = (route: Route) => { … } 
{ path: …, canLoad: [canLoadGuard], loadChildren: … }
```
:::


