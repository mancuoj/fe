interface Person {
  name: string
}

interface PersonConstructor {
  new(name: string): Person
}
