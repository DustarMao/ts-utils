import "../../../src/augments/function/compose"
import {expect} from "chai"

describe("Function::compose", function() {
  it("f.compose(g) should be function like x => f(g(x))", function() {
    const f = (x: number) => x + 2
    const g = (x: number) => x * 3
    const h = f.compose(g)
    expect(h(10)).equals(f(g(10)))
  })
})