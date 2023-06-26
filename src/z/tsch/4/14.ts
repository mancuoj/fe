type MapThreeValue<T> = {
  [Key in keyof T]: [T[Key], T[Key], T[Key]]
}

type res = MapThreeValue<{ a: 1; b: 2 }>
