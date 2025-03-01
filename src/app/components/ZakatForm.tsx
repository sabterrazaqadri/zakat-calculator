'use client'

import { useZakatStore } from '../store/zakatStore'

export default function ZakatForm() {
  const { updateAssets, assets } = useZakatStore()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateAssets({ ...assets, [name]: parseFloat(value) || 0 })
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Enter Your Assets</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Gold (in grams)
          </label>
          <input
            type="number"
            name="gold"
            value={assets.gold || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Silver (in grams)
          </label>
          <input
            type="number"
            name="silver"
            value={assets.silver || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cash in Hand & Bank
          </label>
          <input
            type="number"
            name="cash"
            value={assets.cash || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Receivables
          </label>
          <input
            type="number"
            name="receivables"
            value={assets.receivables || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Payables (Debts)
          </label>
          <input
            type="number"
            name="payables"
            value={assets.payables || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Business Inventory Value
          </label>
          <input
            type="number"
            name="inventory"
            value={assets.inventory || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Property For Sale Value
          </label>
          <input
            type="number"
            name="property"
            value={assets.property || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600"
            min="0"
            step="0.01"
          />
        </div>
      </div>
    </div>
  )
}
