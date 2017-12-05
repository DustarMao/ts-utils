import {delay} from "../../src/async/delay"
import {expect} from "chai"

describe("delay", function() {

  it("delayed function should run delayed", async function() {
    const beg = Date.now()
    const timeout = 20
    await delay(timeout, () => {
      expect(Date.now()).greaterThan(beg + timeout)
    })
  })

  it("no delay function will return Promise<void>", async function() {
    await delay(10).then(data => expect(data).undefined)
  })

})