import { create } from 'zustand'

interface Assets {
  gold: number
  silver: number
  cash: number
  receivables: number
  payables: number
  inventory: number
  property: number
  goldRatePerTola: number
  silverRatePerTola: number
}

interface ZakatStore {
  goldRate: number
  silverRate: number
  assets: Assets
  updateAssets: (newAssets: Assets) => void
  fetchRates: () => Promise<void>
  calculateRatesPerGram: () => { goldPerGram: number; silverPerGram: number }
}

// Constants for conversion
const TOLA_TO_GRAM = 11.664; // 1 tola = 11.664 grams

export const useZakatStore = create<ZakatStore>((set, get) => ({
  goldRate: 0,
  silverRate: 0,
  assets: {
    gold: 0,
    silver: 0,
    cash: 0,
    receivables: 0,
    payables: 0,
    inventory: 0,
    property: 0,
    goldRatePerTola: 0,
    silverRatePerTola: 0,
  },
  updateAssets: (newAssets) => set({ assets: newAssets }),
  fetchRates: async () => {
    try {
      // For demo purposes, using dummy API endpoint
      // In production, replace with actual API call
      const response = await fetch('https://api.example.com/metal-rates')
      const data = await response.json()
      set({ goldRate: data.goldRate, silverRate: data.silverRate })
    } catch (error) {
      // Fallback to sample rates if API fails
      set({
        goldRate: 26440,  // Sample gold rate per gram
        silverRate: 287, // Sample silver rate per gram
      })
    }
  },
  calculateRatesPerGram: () => {
    const { goldRatePerTola, silverRatePerTola } = get().assets;
    return {
      goldPerGram: goldRatePerTola / TOLA_TO_GRAM,
      silverPerGram: silverRatePerTola / TOLA_TO_GRAM,
    };
  },
}))
