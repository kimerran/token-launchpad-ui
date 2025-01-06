'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CreateTokenTab from './CreateTokenTab'
import TokenSaleTab from './TokenSaleTab'
import TokenSalesListing from './TokenSalesListing'
import AboutTab from './AboutTab'

export default function NFTTabs() {
  return (
    <Tabs defaultValue="free" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-secondary">
        <TabsTrigger value="free" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium">Create Token</TabsTrigger>
        <TabsTrigger value="bcos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium">Token Sale</TabsTrigger>
        <TabsTrigger value="partner" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium">Buy Tokens</TabsTrigger>
        <TabsTrigger value="donation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm font-medium">About</TabsTrigger>
      </TabsList>
      <TabsContent value="free">
        <CreateTokenTab />
      </TabsContent>
      <TabsContent value="bcos">
        <TokenSaleTab />
      </TabsContent>
      <TabsContent value="partner">
        <TokenSalesListing />
      </TabsContent>
      <TabsContent value="donation">
        <AboutTab />
      </TabsContent>
    </Tabs>
  )
}

