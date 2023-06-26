interface IPerson {
  name: string
  age: number
}

class Person implements IPerson {
  name: string
  age: number
}

const obj: IPerson = {
  name: 'hh',
  age: 18,
}
