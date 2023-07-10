type StartWith<Str extends string, Prefix extends string> =
  Str extends `${Prefix}${string}` ? true : false

type res = StartWith<'github mancuoj', 'git'>
