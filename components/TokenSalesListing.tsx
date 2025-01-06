import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const mockNFTs = [
  { id: 1, name: 'Cool Cat', image: '/placeholder.svg?height=200&width=200&text=Cool+Cat', creator: 'Artist A' },
  { id: 2, name: 'Bored Ape', image: '/placeholder.svg?height=200&width=200&text=Bored+Ape', creator: 'Artist B' },
  { id: 3, name: 'Crypto Punk', image: '/placeholder.svg?height=200&width=200&text=Crypto+Punk', creator: 'Artist C' },
  { id: 4, name: 'Doodle', image: '/placeholder.svg?height=200&width=200&text=Doodle', creator: 'Artist D' },
]

export default function TokenSalesListing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Sales Listing</CardTitle>
        <CardDescription>Buy tokens created in our launch pad</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockNFTs.map((nft) => (
            <Card key={nft.id}>
              <CardContent className="p-4">
                <Image src={nft.image} alt={nft.name} width={200} height={200} className="rounded-lg mb-2" />
                <h3 className="font-semibold">{nft.name}</h3>
                <p className="text-sm text-muted-foreground">by {nft.creator}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

