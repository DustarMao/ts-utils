import "../../../src/augments/function/andThen"
import {expect} from "chai"

describe("Function::andThen", function() {
  it("f.andThen(g) should be function like x => g(f(x))", function() {
    const f = (x: number) => x + 2
    const g = (x: number) => x * 3
    const h = f.andThen(g)
    expect(h(10)).equals(g(f(10)))
  })
})