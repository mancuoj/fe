type GetLast<Arr extends unknown[]> =
  Arr extends [...unknown[], infer Last] ? Last : never

type res = GetLast<[1, 2, 3]>
