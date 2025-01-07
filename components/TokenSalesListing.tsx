import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { abi } from "@/lib/abi"
import Image from "next/image"
import { formatEther, parseEther } from "viem"
import { useReadContract, useWriteContract } from "wagmi"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { CONTRACT_ADDRESS, toBaseSepoliaExplorer } from "@/lib/utils"

export default function TokenSalesListing() {
  const { data: tokenSales } = useReadContract({
    abi: abi,
    address: CONTRACT_ADDRESS,
    functionName: "getTokenSales",
    args: [],
  })
  const { data: hash, isPending, writeContract, error } = useWriteContract()

  console.log("tokenSales", tokenSales)

  const maskedAddress = (address: string) => {
    const start = address.substring(0, 10) // First 10 characters
    const end = address.substring(address.length - 8) // Last 8 characters
    const maskedAddress = `${start}...${end}`
    return maskedAddress
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const saleId = formData.get("saleId") as string
    const amount = formData.get("amount") as string
    const pricePerToken = formData.get("pricePerToken") as string
    const totalCost = BigInt(amount) * BigInt(pricePerToken)

    writeContract({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: "buyTokenSale",
      args: [saleId, amount],
      value: BigInt(totalCost),
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Sales Listing</CardTitle>
        <CardDescription>Buy tokens created in our launch pad</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
          {tokenSales &&
            tokenSales.map((nft) => (
              <Card key={nft.saleId}>
                <CardContent className="p-4">
                  <Image
                    src={"/token.png"}
                    alt={nft.name}
                    width={200}
                    height={200}
                    className="rounded-lg mb-2"
                  />
                  <h3 className="font-semibold">
                    {nft.name} ({nft.symbol})
                  </h3>
                  <p>Price per token: {formatEther(nft.price)}</p>
                  <p className="text-sm text-muted-foreground">
                    by {maskedAddress(nft.owner)}
                  </p>
                  <p className="font-semibold">Amount to buy:</p>
                  <form onSubmit={submit}>
                    <Input
                      id="saleId"
                      type="hidden"
                      name="saleId"
                      value={`${nft.saleId}`}
                    />
                    <Input
                      style={{ display: "none" }}
                      id="pricePerToken"
                      type="text"
                      name="pricePerToken"
                      value={`${nft.price}`}
                    />

                    <div className="space-y-2">
                      <Input id="amount" name="amount" placeholder="Ex. 100" />

                      <Button type="submit">BUY</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ))}
        </div>
      </CardContent>
      <CardFooter>
        {hash && (
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={toBaseSepoliaExplorer(hash)}
            >
              Check Transaction in Explorer
            </a>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
