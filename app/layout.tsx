import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ConnectWallet from '@/components/ConnectWallet'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Token Launchpad',
  description: 'Token Launchpad for EVM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background text-foreground flex flex-col min-h-screen`}>
        <header className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Token Launchpad</h1>
            <ConnectWallet />
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

