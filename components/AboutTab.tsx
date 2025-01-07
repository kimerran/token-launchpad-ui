import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AboutTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Our Token Launchpad</CardTitle>
        <CardDescription>
          Learn more about our token launching
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Our launchpad can perform the following:</h3>
          <ul>
            <li>Create a new ERC-20 token</li>
            <li>Launch a new toke and put it on sale</li>
            <li>Buy newly launched token</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
