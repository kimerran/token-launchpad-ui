import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Our Token Launchpad</CardTitle>
        <CardDescription>Learn more about our unique digital collectibles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            Welcome to our NFT Minting Site! We're passionate about creating and sharing unique digital art that pushes the boundaries of creativity and technology.
          </p>
          <h3 className="text-lg font-semibold">Our Mission</h3>
          <p>
            Our mission is to empower artists and collectors alike by providing a platform for creating, minting, and trading extraordinary NFTs. We believe in the power of blockchain technology to revolutionize the art world and create new opportunities for digital ownership and expression.
          </p>
          <h3 className="text-lg font-semibold">What Makes Us Unique</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Curated collections from top digital artists</li>
            <li>Eco-friendly minting process</li>
            <li>Community-driven governance</li>
            <li>Regular exclusive drops and events</li>
          </ul>
          <p>
            Join us on this exciting journey into the world of NFTs. Whether you're an artist, collector, or enthusiast, there's a place for you in our community.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

