import ZakatCalculator from './components/ZakatCalculator'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Zakat Calculator
      </h1>
      <ZakatCalculator />

      {/* Ad Script */}
      <Script 
        src="//pl26109967.effectiveratecpm.com/45/54/af/4554afae580009c06b3ac05b7c7033d1.js"
        strategy="lazyOnload"
      />
    </main>
  )
}

