'use client'

import { useZakatStore } from '../store/zakatStore'

const NISAB_GOLD_GRAMS = 87.48;
const NISAB_SILVER_GRAMS = 612.36;

export default function ZakatResults() {
  const { assets, calculateRatesPerGram } = useZakatStore()
  const { goldPerGram, silverPerGram } = calculateRatesPerGram()

  // Calculate total wealth using rates per gram
  const totalAssets = (
    (assets.gold || 0) * goldPerGram +
    (assets.silver || 0) * silverPerGram +
    (assets.cash || 0) +
    (assets.receivables || 0) +
    (assets.inventory || 0) +
    (assets.property || 0)
  )

  const totalLiabilities = assets.payables || 0
  const netWealth = totalAssets - totalLiabilities

  // Calculate Nisab threshold using rates per gram
  const goldNisab = NISAB_GOLD_GRAMS * goldPerGram
  const silverNisab = NISAB_SILVER_GRAMS * silverPerGram
  const nisabThreshold = Math.min(goldNisab, silverNisab)

  // Calculate Zakat
  const isZakatPayable = netWealth >= nisabThreshold
  const zakatAmount = isZakatPayable ? netWealth * 0.025 : 0

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Zakat Calculation Results</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Total Assets</h3>
            <p className="text-2xl font-bold text-green-600">Rs {totalAssets.toFixed(2)}</p>
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Total Liabilities</h3>
            <p className="text-2xl font-bold text-red-600">Rs {totalLiabilities.toFixed(2)}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Net Wealth</h3>
          <p className="text-2xl font-bold text-blue-600">Rs {netWealth.toFixed(2)}</p>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Nisab Threshold</h3>
          <p className="text-2xl font-bold text-purple-600">Rs {nisabThreshold.toFixed(2)}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Based on the lower value of {NISAB_GOLD_GRAMS}g of gold (Rs {goldNisab.toFixed(2)}) or 
            {NISAB_SILVER_GRAMS}g of silver (Rs {silverNisab.toFixed(2)})
          </p>
        </div>

        <div className="p-6 bg-green-50 dark:bg-green-900 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Zakat Payable</h3>
          {isZakatPayable ? (
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              Rs {zakatAmount.toFixed(2)}
            </p>
          ) : (
            <p className="text-xl text-gray-600 dark:text-gray-300">
              No Zakat is due as your wealth is below the Nisab threshold
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
