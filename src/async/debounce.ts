export function debounce<F extends (...args: any[]) => Promise<any>>(fn: F, window: number): F {
  let timer: number = null
  let resolves: Function[] = []
  return function() {
    if (timer !== null) clearTimeout(timer)
    return new Promise(resolve => {
      resolves.push(resolve)
      timer = setTimeout(() => {
        const result = fn.apply(this, arguments)
        for (let resolve = resolves.pop(); typeof resolve === "function"; resolve = resolves.pop()) {
          resolve(result)
        }
      }, window)
    })
  } as F
}