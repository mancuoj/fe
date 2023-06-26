type MapThreeKey<T> = {
  [Key in keyof T as `${Key & string}${Key & string}${Key & string}`]: T[Key]
}

type res = MapThreeKey<{ a: 1; b: 2 }>
