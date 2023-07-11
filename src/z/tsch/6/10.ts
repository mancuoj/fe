type Zip<One extends unknown[], Other extends unknown[]> =
  One extends [infer OneFirst, ...infer OneRest]
    ? Other extends [infer OtherFirst, ...infer OtherRest]
      ? [[OneFirst, OtherFirst], ...Zip<OneRest, OtherRest>]
      : []
    : []

type res = Zip<['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]>
