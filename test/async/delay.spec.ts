import {delay} from "../../src/async/delay"
import {expect} from "chai"

describe("delay", function() {

  it("delayed function should run delayed", async function() {
    const beg = Date.now()
    const timeout = 200
    await delay(() => {
      expect(Date.now()).greaterThan(beg + timeout)
    }, timeout)
  })

  it("no timeout will run immediately", async function() {
    const beg = Date.now()
    await delay(() => {
      expect(Date.now()).equals(beg)
    })
  })

  it("no delay function will return Promise<void>", async function() {
    await delay().then(data => expect(data).undefined)
    await delay(undefined, 100).then(data => expect(data).undefined)
  })

})