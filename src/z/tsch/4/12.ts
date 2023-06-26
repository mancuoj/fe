// Tips：交叉类型会把同一类型做合并，不同类型舍弃
type ObjType = { a: number } & { b: boolean }

type res = { a: number; b: boolean } extends ObjType ? true : false
