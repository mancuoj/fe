# Tour of Heroes

![](/angular/hero.png)

## 双向绑定

```html
<!-- 使用 [(ngModel)] 需要在顶层导入 FormsModule -->
<h2>{{hero.name | uppercase}}</h2>
<input id="name" [(ngModel)]="hero.name" placeholder="name">
```

## 生命周期

比如 OnInit

```ts
export class HeroesComponent implements OnInit {
  ...

  ngOnInit(): void {
    this.getHeroes();
  }
}
```

## Observable

同步变异步？

:::code-group
```ts [service]
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
```

```ts [component]
getHeroes(): void {
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}
```
:::

## Routes

:::code-group
```sh
ng generate module app-routing --flat --module=app
# --flat: puts the file in src/app instead of its own directory
# --module=app: tells ng generate to register it in the imports array of the AppModule.
```

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
```
:::

