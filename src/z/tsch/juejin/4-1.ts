/* 元组 */
type Tuple = [number, string]

/* 接口，可以描述对象，类，函数，构造器 */
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

interface SayHello {
  (name: string): string
}

const func: SayHello = (name: string) => {
  return `hello ${name}`
}

interface PersonConstructor {
  new (name: string, age: number): IPerson
}

function createPerson(Ctor: PersonConstructor): IPerson {
  return new Ctor('hh', 18)
}

/* 在你不知道有什么属性时 */
interface InPerson {
  [prop: string]: string | number
}

const obj2: InPerson = {}
obj2.name = 'hh'
obj2.age = 18
