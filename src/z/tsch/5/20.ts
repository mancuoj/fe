type GetRefProps<Props> =
  'ref' extends keyof Props
    ? Props extends { ref?: infer Value | undefined }
      ? Value
      : never
    : never

type res = GetRefProps<{ ref?: 1; name: 'test' }>
