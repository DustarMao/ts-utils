import {defineAugmentMethod} from "../../src/augments/defineAugmentMethod"
import {expect} from "chai"

describe("defineAugmentMethod", function() {
  defineAugmentMethod(Object, "testMethod", function(this: Object) { return "test return" })
  interface TestAugment {
    testMethod(): string
  }
  const t = {} as (object & TestAugment)

  it("augmented type should have augment method", function() {
    expect(t.testMethod()).equals("test return")
  })

  it("augment method cannot be enumerable", function() {
    for (let propKey in t) {
      expect(propKey).not.equals("testMethod")
    }
  })

  it("augment method cannot be written", function() {
    try {
      Object.getPrototypeOf(t).testMethod = () => "written test method"
    } catch (e) {}
    expect(t.testMethod()).equals("test return")
  })
})