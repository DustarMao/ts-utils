export function throttle<F extends (...args: any[]) => Promise<any>>(fn: F): F {
  let prev: Promise<any> = null
  return function() {
    if (prev == null) {
      prev = Promise.resolve(fn.apply(this, arguments))
    }
    return prev
  } as F
}