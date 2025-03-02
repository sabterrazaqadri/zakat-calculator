/* eslint-disable @typescript-eslint/no-unused-vars */


'use client'

import { useState } from 'react'
import MetalRates from './MetalRates'
import ZakatForm from './ZakatForm'
import ZakatResults from './ZakatResults'

export default function ZakatCalculator() {
  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <MetalRates />
      <ZakatForm />
      <ZakatResults />
    </div>
  )
}
