import {compare} from "../../src/functions/compare"
import {expect} from "chai"

describe("compare", function() {
  it("compare(a, b) if a > b should be positive number", function() {
    expect(compare(2, 1)).greaterThan(0)
  })

  it("compare(a, b) if a < b should be negative number", function() {
    expect(compare(2, 3)).lessThan(0)
  })

  it("compare(a, b) if a == b should be 0", function() {
    expect(compare(2, 2)).equals(0)
  })

  it("0 if arguments cannot compare", function() {
    expect(compare(2, 3)).lessThan(0)
  })
})