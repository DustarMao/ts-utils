export function defineAugmentMethod(
  Type: Function,
  methodName: PropertyKey,
  method: Function
) {
  Object.defineProperty(Type.prototype, methodName, {
    enumerable: false,
    writable: false,
    value: method
  })
}