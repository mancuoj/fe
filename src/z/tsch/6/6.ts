type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]

type res = Unshift<[2, 3, 4], 1>
