export function delay<T = void>(fn?: () => T|Promise<T>, timeout: number = 0) {
  return timeout <= 0 ?
    typeof fn === "function" ? Promise.resolve(fn()) : Promise.resolve() :
    new Promise<T>((resolve, reject) => {
      setTimeout(() => typeof fn === "function" ? resolve(fn()) : resolve(), timeout)
    })
}