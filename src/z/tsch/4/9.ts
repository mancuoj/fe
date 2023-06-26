type isTwo<T> = T extends 2 ? true : false

type res3 = isTwo<1>
type res4 = isTwo<2>
