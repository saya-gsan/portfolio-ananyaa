'use client'

import { useRef, useEffect, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import Nav from './Nav'
import Footer from './Footer'
import { NavigationContext } from '@/lib/navigationContext'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const mainRef  = useRef<HTMLElement>(null)
  const router   = useRouter()
  const pathname = usePathname()
  const isFirst  = useRef(true)

  // Fade-in whenever the route changes (skip the very first render)
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    const main = mainRef.current
    if (!main) return
    window.scrollTo(0, 0)
    gsap.fromTo(main, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' })
  }, [pathname])

  // Fade-out the current page, then push the new route
  const navigate = useCallback((path: string) => {
    const main = mainRef.current
    if (!main) { router.push(path); return }
    gsap.to(main, {
      opacity: 0,
      y: -10,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => { router.push(path) },
    })
  }, [router])

  return (
    <NavigationContext.Provider value={navigate}>
      <Nav pathname={pathname} />
      <main ref={mainRef}>
        {children}
      </main>
      <Footer />
    </NavigationContext.Provider>
  )
}
