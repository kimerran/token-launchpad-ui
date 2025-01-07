'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useAccount, useEnsName } from 'wagmi'
import { WalletOptions } from './WalletOptions'


export default function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mockAddress = '0x' + Array(40).fill(0).map(() => Math.random().toString(16)[2]).join('')
      setWalletAddress(mockAddress)
      setIsConnected(true)
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress('')
  }
  const { address } = useAccount()

  console.log(address)

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center space-x-2">
          <span className="text-sm">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </span>
          <Button variant="secondary" onClick={disconnectWallet}>Disconnect</Button>
        </div>
      ) : (
        <>
          <appkit-button />
        </>
        // <Button variant="secondary" onClick={connectWallet}>Connect Wallet</Button>
      )}
    </div>
  )
}

