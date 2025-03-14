import ZakatCalculator from './components/ZakatCalculator'
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Zakat Calculator
      </h1>
      <ZakatCalculator />
    </main>
  )
}
