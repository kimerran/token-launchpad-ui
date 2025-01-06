import NFTTabs from '@/components/NFTTabs'
import HeroBanner from '@/components/HeroBanner'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="container mx-auto px-4 py-8">
        <NFTTabs />
      </div>
    </>
  )
}

