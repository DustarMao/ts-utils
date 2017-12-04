import {hello} from "../src/index"
import {expect} from "chai"

describe("index", function() {
  it("hello should return 'Hello, World!'", function() {
    expect(hello()).equals("Hello, World!")
  })
})