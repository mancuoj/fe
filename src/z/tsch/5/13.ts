type Trim<Str extends string> =
  Str extends ` ${infer Suffix}`
    ? Trim<Suffix>
    : Str extends `${infer Prefix} `
      ? Trim<Prefix>
      : Str
