export function delay<T = void>(timeout: number, fn?: () => T|Promise<T>) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => typeof fn === "function" ? resolve(fn()) : resolve(), timeout)
  })
}