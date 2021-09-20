import { navLinks } from 'utils/constants'
import Link from 'next/link'
import { GiMoebiusTriangle } from 'react-icons/gi'
import { useEffect, useRef, useState } from 'react'
import NavToggle from './NavToggle'
import { useRouter } from 'next/router'

type Route = '/' | '/blog' | '/contact'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [currentRoute, setCurrentRoute] = useState<Route | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const router = useRouter()

  useEffect(() => {
    const route = router.route
      .split('/')[1]
      .replace('', '/')
      .replace('[slug]', 'blog')
    setCurrentRoute(route as Route)
  }, [router.route])

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!isNavOpen) return
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsNavOpen(false)
      }
    }

    window.addEventListener('click', clickHandler)

    return () => window.removeEventListener('click', clickHandler)
  }, [isNavOpen])

  return (
    <header
      ref={headerRef}
      className=' z-10 fixed inset-x-0 bg-white shadow transition-height backdrop-filter md:bg-opacity-60  md:backdrop-blur-sm  '
    >
      <div className='page-width  flex items-center justify-between h-16 md:h-20'>
        <div className={isNavOpen ? 'pointer-events-none' : undefined}>
          <Link href='/'>
            <a className='font-bold text-2xl md:text-3xl text-black  flex items-center  hover:text-purple-900 '>
              DEV
              <GiMoebiusTriangle />
            </a>
          </Link>
        </div>
        {/* desktop navbar */}
        <nav>
          <ul className='hidden md:flex  gap-6'>
            {navLinks.map((link, index) => {
              const { label, href } = link
              return (
                <li
                  key={index}
                  className={`text-xl text-black border-b-2 border-purple-900  hover:text-purple-900 transition ${
                    currentRoute === href
                      ? 'border-opacity-100'
                      : 'border-opacity-0'
                  }`}
                >
                  <Link href={href}>{label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <NavToggle isOpen={isNavOpen} toggle={() => setIsNavOpen(!isNavOpen)} />
      </div>

      {/* mobile navbar */}
      <aside
        className={`md:hidden absolute top-full w-full flex items-center justify-center bg-white shadow flex-col h-0 overflow-hidden transition-height ${
          isNavOpen && ' h-40'
        }`}
      >
        <ul>
          {navLinks.map((link, index) => {
            const { label, href } = link

            return (
              <li
                key={index}
                onClick={() => {
                  setIsNavOpen(false)
                }}
                className={`text-center text-xl text-black border-b-2 border-purple-900  hover:text-purple-900 transition ${
                  currentRoute === href
                    ? 'border-opacity-100'
                    : 'border-opacity-0'
                }`}
              >
                <Link href={href}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </header>
  )
}

export default Header
