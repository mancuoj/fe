type TrimLeft<Str extends string> =
  Str extends `${' ' | '\n' | '\t'}${infer Rest}`
    ? TrimLeft<Rest>
    : Str

type res = TrimLeft<'     \t mancuoj'>
