"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useWriteContract } from "wagmi"
import { abi } from "@/lib/abi"
import { parseEther } from "viem"
import { CONTRACT_ADDRESS } from "@/lib/utils"

export default function CreateTokenTab() {
  const { data: hash, isPending, writeContract, error } = useWriteContract()

  const [minting, setMinting] = useState(false)
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const tokenName = formData.get("name") as string
    const tokenSymbol = formData.get("symbol") as string
    const totalSupply = formData.get("totalSupply") as string
    console.log({
      totalSupply,
      tokenName,
      tokenSymbol,
    })

    setMinting(true)

    writeContract({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: "launchToken",
      args: [tokenName, tokenSymbol, BigInt(totalSupply)],
      value: parseEther("0.001"),
    });

    setMinting(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new token</CardTitle>
        <CardDescription>
          Create a new token and own all of the initial supply
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={submit}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Token Name
            </label>
            <Input id="name" name="name" placeholder="Name of your new token" />
          </div>
          <div className="space-y-2">
            <label htmlFor="symbol" className="text-sm font-medium">
              Token Symbol
            </label>
            <Input
              id="symbol"
              name="symbol"
              placeholder="Enter the token symbol"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="totalSupply" className="text-sm font-medium">
              Total Supply
            </label>
            <Input
              id="totalSupply"
              name="totalSupply"
              placeholder="How much is the total supply?"
            />
          </div>
          <Button type="submit" disabled={minting}>
            {minting ? "Launching..." : "Create New Token"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
      {hash && <div>Transaction Hash: {hash}</div>}

      </CardFooter>
    </Card>
  )
}
