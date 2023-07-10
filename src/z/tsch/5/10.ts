type TrimRight<Str extends string> =
  Str extends `${infer Rest}${' ' | '\n' | '\t'}`
    ? TrimRight<Rest>
    : Str

type res = TrimRight<'mancuoj    \n'>
