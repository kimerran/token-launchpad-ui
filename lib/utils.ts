import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toBaseSepoliaExplorer(hash: string) {
  return `https://sepolia.basescan.org/tx/${hash}`
}

export const CONTRACT_ADDRESS = '0xCeEb950e4406daAFa56d2F9a5cf72A7fb5708233';
