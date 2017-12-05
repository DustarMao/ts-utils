import {debounce} from "../../src/async/debounce"
import {delay} from "../../src/async/delay"
import {expect} from "chai"

describe("debounce", function() {

  it("debounced function only call once in time window", async function() {
    let callCount = 0
    const oriFn = (str: string) => {
      callCount ++
      return Promise.resolve(str)
    }
    const debounced = debounce(oriFn, 10)
    debounced("first")
    await delay(5)
    const predict1 = debounced("second")
      .then(() => expect(callCount).equals(1))
    await delay(20)
    const predict2 = debounced("third")
      .then(() => expect(callCount).equals(2))
    return Promise.all([predict1, predict2])
  })

  it("every call of debounced function in window time will be resolved with last result", async function() {
    const oriFn = (str: string) => Promise.resolve(str)
    const debounced = debounce(oriFn, 10)
    const d1 = debounced("first")
    const d2 = debounced("second")
    const [first, second] = await Promise.all([ d1, d2 ])
    expect(first).equals(second).equals("second")
    const third = await debounced("third")
    expect(third).equals("third")
  })

})