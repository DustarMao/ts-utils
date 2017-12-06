import {defineAugmentMethod} from "../defineAugmentMethod"

declare global {
  interface Function {
    compose<In = any, Out = any, M = any>(this: (m: M) => Out, fn: (i: In) => M): (i: In) => Out
  }
}

defineAugmentMethod(Function, "compose", function(fn: Function) {
  return (x: any) => this(fn(x))
})