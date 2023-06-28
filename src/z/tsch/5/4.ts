type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never
