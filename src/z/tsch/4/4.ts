interface PersonConstructor {
  new(name: string, age: number): IPerson
}

function createPerson(Ctor: PersonConstructor): IPerson {
  return new Ctor('hh', 18)
}
