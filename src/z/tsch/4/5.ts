interface IPerson2 {
  // 在不知道会有什么类型时
  [prop: string]: string | number
}

const obj2: IPerson2 = {}
obj2.name = 'hh'
obj2.age = 18
