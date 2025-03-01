'use client'

import { useZakatStore } from '../store/zakatStore'

export default function MetalRates() {
  const { assets, updateAssets, calculateRatesPerGram } = useZakatStore()
  const { goldPerGram, silverPerGram } = calculateRatesPerGram()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateAssets({ ...assets, [name]: parseFloat(value) || 0 })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Gold Rate</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rate per Tola
            </label>
            <input
              type="number"
              name="goldRatePerTola"
              value={assets.goldRatePerTola || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
              min="0"
              step="0.01"
              placeholder="Enter gold rate per tola"
            />
          </div>
          <p className="text-lg font-semibold text-yellow-600">
            Rate per gram: Rs {goldPerGram.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Silver Rate</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rate per Tola
            </label>
            <input
              type="number"
              name="silverRatePerTola"
              value={assets.silverRatePerTola || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
              min="0"
              step="0.01"
              placeholder="Enter silver rate per tola"
            />
          </div>
          <p className="text-lg font-semibold text-gray-500">
            Rate per gram: Rs {silverPerGram.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}
