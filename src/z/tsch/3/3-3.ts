function getPropType<T>(obj: T, key): key 对应的属性值类型 {
  return obj[key];
}
