type First<Tuple extends unknown[]> =
  Tuple extends [infer T, ...infer R]
    ? T
    : never

type res = First<[1, 2, 3]>
