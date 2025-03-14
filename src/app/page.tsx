

import ZakatCalculator from './components/ZakatCalculator'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Zakat Calculator
      </h1>
      <ZakatCalculator />

      {/* Ad Script - Loads Asynchronously */}
      <Script 
        src="//pl26109978.effectiveratecpm.com/3271b9de3dbab0d9d278be82c64f7ea1/invoke.js" 
        strategy="afterInteractive"
        async 
        data-cfasync="false"
      />

      {/* Ad Container */}
      <div id="container-3271b9de3dbab0d9d278be82c64f7ea1"></div>
    </main>
  )
}
