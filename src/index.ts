export function hello(nick?: string) {
  if (arguments.length < 1) {
    return "Hello, World!"
  } else {
    return `Hello, ${nick}!`
  }
}