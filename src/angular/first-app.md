# My First Angular App

## Interface

```sh
ng generate interface my-interface
```

就是定义 TS 接口类型。


## Denpendency injection

::: info
Angular services provide a way for you to separate Angular app data and functions that can be used by multiple components in your app. To be used by multiple components, a service must be made injectable. Services that are injectable and used by a component become dependencies of that component. The component depends on those services and can't function without them.

Dependency injection is the mechanism that manages the dependencies of an app's components and the services that other components can use.
:::

其实就是把一些公共的数据或方法抽离出来，然后在需要的地方注入进来，这样就可以复用了。

```sh
ng generate service my-service --skip-tests
```

## Routes

:::code-group

```ts
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
]
```

```html
<header>
  ...
</header>
<router-outlet></router-outlet>
```

```html [template]
<a [routerLink]="['/']"> ... </a>
<a [routerLink]="['/details', housingLocation.id]"> ... </a>
```
:::

## Form

:::code-group

```ts
applyForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
})
```

```html
<form [formGroup]="applyForm" (submit)="submitApplication()">
  <label for="first-name">First Name</label>
  <input id="first-name" type="text" formControlName="firstName">

  <label for="last-name">Last Name</label>
  <input id="last-name" type="text" formControlName="lastName">

  <label for="email">Email</label>
  <input id="email" type="email" formControlName="email">
  <button type="submit" class="primary">Apply now</button>
</form>
```

:::


## HTTP

:::code-group

```ts [service]
url = 'http://localhost:3000/locations'

async getAllHousingLocations(): Promise<HousingLocation[]> {
  const data = await fetch(this.url)
  return await data.json() ?? []
}
```

```ts [component]
constructor() {
  this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationList = housingLocationList
    this.filteredLocationList = housingLocationList
  })
}
```
:::
