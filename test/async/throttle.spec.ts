import {throttle} from "../../src/async/throttle"
import {delay} from "../../src/async/delay"
import {expect} from "chai"

describe("throttle", function() {
  it("throttled function will not run while previous one not completed", function() {
    const fn = (shouldRun: boolean) => delay(10, () => { expect(shouldRun).be.true })
    const throttled = throttle(fn)
    const t1 = throttled(true)
    const t2 = throttled(false)
    return Promise.all([t1, t2])
  })

  it("throttled function called while previous one not completed will be resolved with previous result", async function() {
    const fn = (value: string) => delay(10, () => value)
    const throttled = throttle(fn)
    const t1 = throttled("first")
    const t2 = throttled("second")
    const [r1, r2] = await Promise.all([t1, t2])
    expect(r1).equals(r2).equals("first")
  })
})