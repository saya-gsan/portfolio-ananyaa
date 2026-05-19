import { notFound } from 'next/navigation'
import { POSTS } from '@/lib/posts'
import BlogPostView from '@/components/BlogPostView'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Not Found' }
  return { title: `${post.title} — Anu Srinivasan` }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()
  return <BlogPostView post={post} />
}
