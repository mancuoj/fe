type MapType<T> = {
  [Key in keyof T]: T[Key]
}
