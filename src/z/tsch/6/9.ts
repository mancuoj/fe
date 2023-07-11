type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> =
  One extends [infer OneFirst, infer OneSecond]
    ? Other extends [infer OtherFirst, infer OtherSecond]
      ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
      : []
    : []

type res = Zip<[1, 2], ['a', 'b']>
