'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Nav from './Nav'
import Footer from './Footer'
import Landing from './Landing'
import CoreField from './CoreField'
import Consulting from './Consulting'
import Computational from './Computational'
import Blog from './Blog'

export type Tab = 'home' | 'core' | 'consulting' | 'computational' | 'blog'

const TITLES: Record<Tab, string> = {
  home:          'Anu Srinivasan',
  core:          'Core Field — Anu Srinivasan',
  consulting:    'Consulting — Anu Srinivasan',
  computational: 'Comp Work — Anu Srinivasan',
  blog:          'Blog — Anu Srinivasan',
}

export default function App() {
  const [tab, setTab] = useState<Tab>('home')
  const mainRef = useRef<HTMLElement>(null)

  const handleTabChange = (newTab: Tab) => {
    if (newTab === tab) return
    const main = mainRef.current
    if (!main) {
      setTab(newTab)
      window.scrollTo(0, 0)
      return
    }
    gsap.to(main, {
      opacity: 0,
      y: -10,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => {
        setTab(newTab)
        window.scrollTo(0, 0)
        requestAnimationFrame(() => {
          gsap.fromTo(
            main,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
          )
        })
      },
    })
  }

  useEffect(() => {
    document.title = TITLES[tab]
  }, [tab])

  const pages: Record<Tab, React.ReactNode> = {
    home:          <Landing onTabChange={handleTabChange} />,
    core:          <CoreField />,
    consulting:    <Consulting />,
    computational: <Computational />,
    blog:          <Blog />,
  }

  return (
    <>
      <Nav activeTab={tab} onTabChange={handleTabChange} />
      <main ref={mainRef}>
        {pages[tab]}
      </main>
      <Footer onTabChange={handleTabChange} />
    </>
  )
}
