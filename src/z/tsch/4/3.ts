interface SayHello { (name: string): string }

const func: SayHello = (name: string) => {
  return `Hello, ${name}!`
}
