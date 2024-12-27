import { Cl } from "@stacks/transactions"
import { describe, expect, it } from "vitest"

const accounts = simnet.getAccounts()
const address1 = accounts.get("wallet_1")!

describe("functionality of counter", () => {
  it("ensures simnet is well initalised", () => {
    expect(simnet.blockHeight).toBeDefined()
  })

  it("ensures counter is starting at 0", () => {
    let { result } = simnet.callReadOnlyFn(
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.counter",
      "get-global-count",
      [],
      address1
    )

    expect(result).toBeInt(0)
  })

  it("ensures global and user count can be incremented", () => {
    let { result: incrementResult } = simnet.callPublicFn(
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.counter",
      "increment",
      [],
      address1
    )

    let globalCount = simnet.getDataVar(
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.counter",
      "global-count"
    )

    let userCount = simnet.getMapEntry(
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.counter",
      "counters",
      Cl.principal(address1)
    )

    let countTokenBalance = simnet.getAssetsMap().get(".count-token.count-token")

    let expectedTuple = {
      action: Cl.stringAscii("increment"),
      sender: Cl.standardPrincipal("ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5"),
      time: Cl.uint(simnet.blockHeight)
    }

    expect(incrementResult).toBeOk(Cl.bool(true))
    expect(globalCount).toBeInt(1)
    expect(userCount).toBeSome(Cl.uint(1))
    expect(countTokenBalance?.get(address1)).toBe(BigInt(1000000))
  })
})
