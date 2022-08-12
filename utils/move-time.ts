import { network } from "hardhat"

export async function moveTime(amount: number) {
  console.log("Moving time...")
  await network.provider.send("evm_increaseTime", [amount])
  console.log(`Move forward ${amount} seconds`)
}
