type GetValueType<P> = P extends Promise<infer Value> ? Value : never
