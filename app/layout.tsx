"use client"

import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import ConnectWallet from "@/components/ConnectWallet"
import Footer from "@/components/Footer"

import { cookieToInitialState, WagmiProvider, type Config } from "wagmi"
import { config, wagmiAdapter, projectId } from "@/lib/wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createAppKit } from '@reown/appkit'
import { baseSepolia } from "viem/chains"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

// export const metadata: Metadata = {
//   title: 'Token Launchpad',
//   description: 'Token Launchpad for EVM',
// }
const queryClient = new QueryClient()

const metadata = {
  name: 'token-launchpad',
  description: 'Token Launchpad',
  url: 'https://tokenlaunchpad.local', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId || "",
  networks: [baseSepolia],
  defaultNetwork: baseSepolia,
  metadata: metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function RootLayout({
  children,
  cookies
}: {
  children: React.ReactNode;
  cookies: string | null
}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background text-foreground flex flex-col min-h-screen`}
      >
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
          <QueryClientProvider client={queryClient}>
            <>
              <header className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Token Launchpad</h1>
                  <ConnectWallet />
                </div>
              </header>
              <main className="flex-grow">{children}</main>
              <Footer />
            </>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}
