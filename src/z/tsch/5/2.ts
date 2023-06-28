type GetValueType<T> = T extends Promise<infer Value> ? Value : never

type res = GetValueType<Promise<'hh'>>
