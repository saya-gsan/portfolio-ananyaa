import type { Metadata } from 'next'
import Blog from '@/components/Blog'

export const metadata: Metadata = { title: 'Blog — Anu Srinivasan' }

export default function Page() {
  return <Blog />
}
