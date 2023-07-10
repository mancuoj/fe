type GetConstructorParameters<ConstructorType extends new (...args: any) => any> =
  ConstructorType extends new (...args: infer ParametersType) => any
    ? ParametersType
    : never
