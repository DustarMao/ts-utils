import {defineAugmentMethod} from "../defineAugmentMethod"

declare global {
  interface Function {
    andThen<In = any, Out = any, M = any>(this: (i: In) => M, fn: (m: M) => Out): (i: In) => Out
  }
}

defineAugmentMethod(Function, "andThen", function(fn: Function) {
  return (x: any) => fn(this(x))
})