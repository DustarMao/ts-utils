export function debounce<F extends (...args: any[]) => Promise<any>>(fn: F, window: number): F {
  let timer: NodeJS.Timer = null
  let resolves: Function[] = []
  return function(...args) {
    if (timer !== null) clearTimeout(timer)
    return new Promise(resolve => {
      resolves.push(resolve)
      timer = setTimeout(() => {
        const result = fn.apply(this, args)
        for (let resolve = resolves.pop(); typeof resolve === "function"; resolve = resolves.pop()) {
          resolve(result)
        }
      }, window)
    })
  } as F
}