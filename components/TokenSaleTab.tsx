"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { abi } from "@/lib/abi"
import { parseEther } from "viem"
import { useWriteContract } from "wagmi"
import { CONTRACT_ADDRESS } from "@/lib/utils"

export default function TokenSaleTab() {
  const { data: hash, isPending, writeContract, error } = useWriteContract()

  const [minting, setMinting] = useState(false)

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const tokenName = formData.get("name") as string
    const tokenSymbol = formData.get("symbol") as string
    const totalSupply = formData.get("totalSupply") as string
    const saleSupply = formData.get("saleSupply") as string
    const pricePerToken = formData.get("pricePerToken") as string

    console.log({
      totalSupply,
      tokenName,
      tokenSymbol,
    })

    setMinting(true)

    writeContract({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: "launchTokenWithSale",
      args: [
        tokenName,
        tokenSymbol,
        BigInt(totalSupply),
        BigInt(saleSupply),
        parseEther(pricePerToken),
        `${new Date()}`,
      ],
      value: parseEther("0.001"),
    })

    setMinting(false)
  }

  console.log({
    isPending,
    error,
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new token and launch it!</CardTitle>
        <CardDescription>
          Create a new token and launch it via a sale
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
            <Input id="symbol" name="symbol" placeholder="Enter the token symbol" />
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
          <div className="space-y-2">
            <label htmlFor="saleSupply" className="text-sm font-medium">
              Supply for Sale
            </label>
            <Input
              id="saleSupply"
              name="saleSupply"
              placeholder="How much of the supply is going to be in sale"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="pricePerToken" className="text-sm font-medium">
              Price Per Token
            </label>
            <Input
              id="pricePerToken"
              name="pricePerToken"
              placeholder="How much does 1 token cost?"
            />
          </div>
          <Button type="submit" disabled={minting}>
            {minting ? "Launching..." : "Launch Token Sale"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
      {hash && <div>Transaction Hash: {hash}</div>}

        </CardFooter>
    </Card>
  )
}
