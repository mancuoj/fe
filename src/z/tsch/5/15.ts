type GetReturnType<Func extends Function> =
  Func extends (...args: any[]) => infer ReturnType
    ? ReturnType
    : never

type res = GetReturnType<(name: string, age: number) => string>
