import type { Metadata } from 'next'
import { Suspense } from 'react'
import CoreField from '@/components/CoreField'

export const metadata: Metadata = { title: 'Core Field — Anu Srinivasan' }

export default function Page() {
  return (
    <Suspense>
      <CoreField />
    </Suspense>
  )
}
