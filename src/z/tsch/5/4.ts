type GetFirst<Arr extends unknown[]> =
  Arr extends [infer First, ...unknown[]] ? First : never

type res = GetFirst<[1, 2, 3]>
