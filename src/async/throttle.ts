type ArgumentsSerialize = (args: any[]) => string
const defaultSerialize: ArgumentsSerialize = (args) => JSON.stringify(args)
export function throttle<F extends (...args: any[]) => Promise<any>>(fn: F): F {
  const promises: {
    [argToken: string]: Promise<any>
  } = {}
  return function(...args: any[]) {
    const argToken = defaultSerialize(args)
    if (typeof promises[argToken] !== "object") {
      promises[argToken] = (async () => {
        try {
          return await fn.apply(this, args)
        } finally {
          delete promises[argToken]
        }
      })()
    }
    return promises[argToken]
  } as F
}