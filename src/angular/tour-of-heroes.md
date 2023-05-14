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
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
```

```html
<router-outlet></router-outlet>
```
:::

## [In-memory Web API](https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api)

> 可以在没有真实服务器的情况下模拟 CRUD 数据持久化


:::code-group
```sh
ni angular-in-memory-web-api
ng generate service InMemoryData

```

```ts [service]
import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ]
    return { heroes }
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
```

```ts [app.module.ts]
imports: [
  ...

  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false },
  ),
],
```

```ts [usage]
// Define the heroesUrl of the form :base/:collectionName with the address of the heroes resource on the server
// Base is the resource to which requests are made
// CollectionName is the heroes data object in the in-memory-data-service.ts
private heroesUrl = 'api/heroes'

getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}
```
:::
