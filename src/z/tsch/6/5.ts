type Push<Arr extends unknown[], Ele> = [...Arr, Ele]

type res = Push<[1, 2, 3], 4>
