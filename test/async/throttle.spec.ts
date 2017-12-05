import {throttle} from "../../src/async/throttle"
import {delay} from "../../src/async/delay"
import {expect} from "chai"

describe("throttle", function() {
  it("throttled function will not run while previous one not completed", async function() {
    let callCount = 0
    const fn = () => {
      callCount++
      return delay(10)
    }
    const throttled = throttle(fn)
    const t1 = throttled()
    const t2 = throttled()
    await Promise.all([t1, t2])
    expect(callCount).equals(1)
  })

  it("throttled function called while previous one not completed will be resolved with previous result", async function() {
    let callCount = 0
    const fn = () => {
      const curCnt = ++callCount
      return delay(10, () => curCnt)
    }
    const throttled = throttle(fn)
    const t1 = throttled()
    const t2 = throttled()
    const [r1, r2] = await Promise.all([t1, t2])
    expect(r1).equals(r2).equals(1)
  })

  it("throttled functions with different arguments are regard as different throttled functions", async function() {
    let callCount = 0
    const fn = (arg: any) => {
      const curCnt = ++callCount
      return delay(10, () => curCnt)
    }
    const throttled = throttle(fn)
    const t1 = throttled('a')
    const t2 = throttled('b')
    const [r1, r2] = await Promise.all([t1, t2])
    expect(r1).equals(1)
    expect(r2).equals(2)
  })
})