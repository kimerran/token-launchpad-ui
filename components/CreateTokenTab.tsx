import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CreateTokenTab() {
    const [minting, setMinting] = useState(false)
  
    const handleMint = async () => {
      setMinting(true)
      // Simulating minting process
      await new Promise(resolve => setTimeout(resolve, 2000))
      setMinting(false)
      alert('NFT minted successfully!')
    }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new token</CardTitle>
        <CardDescription>Create a new token and own all of the initial supply</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Token Name</label>
            <Input id="name" placeholder="Name of your new token" />
          </div>
          <div className="space-y-2">
            <label htmlFor="symbol" className="text-sm font-medium">Token Symbol</label>
            <Input id="symbol" placeholder="Enter the token symbol" />
          </div>
          <div className="space-y-2">
            <label htmlFor="totalSupply" className="text-sm font-medium">Total Supply</label>
            <Input id="totalSupply" placeholder="How much is the total supply?" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleMint} disabled={minting}>
          {minting ? 'Launching...' : 'Create New Token'}
        </Button>
      </CardFooter>
    </Card>
  )
}

