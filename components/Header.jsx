import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsSun, BsMoon, BsChevronDown } from 'react-icons/bs'

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block outline-none hover:underline">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="backdrop-blur-sm group flex items-center rounded-lg px-4 py-2 text-sm font-medium text-zinc-800 backdrop-blur dark:text-zinc-200 dark:shadow-none dark:ring-white/5">
        <span className="tracking-wider">Menu</span>
        <BsChevronDown className="ml-3 h-auto w-2  group-hover:stroke-zinc-700 " />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-1/3 z-50 origin-top rounded-md bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <nav className="flex justify-center">
              <ul className="space-y-4 divide-zinc-100 text-left text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                {/* <MobileNavItem href="/about">About</MobileNavItem> */}
                <MobileNavItem href="/archive">Archive</MobileNavItem>
                <MobileNavItem href="/work">Work</MobileNavItem>
                <MobileNavItem href="https://www.x.com/jangidankit_" >Twitter</MobileNavItem>
                <MobileNavItem href="">
                  <span className="text-red-500">Close</span>
                </MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  const isActive = useRouter().pathname === href;

  const isExternal = href.startsWith('http');

  return (
    <li>
    {isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          'relative block px-3 py-2 font-poppins transition',
          'hover:text-indigo-500 dark:hover:text-indigo-400 hover:underline'
        )}
      >
        {children}
      </a>
    ) : (
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 font-poppins transition',
          isActive
            ? 'text-gray-500 dark:text-gray-400 hover:underline'
            : 'hover:text-gray-500 dark:hover:text-gray-400 hover:underline'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0" />
        )}
      </Link>
    )}
  </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="backdrop-blur-sm rounded-md flex rounded-lg px-3 text-sm font-light text-zinc-800 dark:text-zinc-200 dark:shadow-none dark:ring-white/10">
        {/* <NavItem href="/about">About</NavItem> */}
        <NavItem href="/">Home</NavItem>
        <NavItem href="/archive">Archive</NavItem>
        <NavItem href="/work">Work</NavItem>
        <NavItem href="https://www.x.com/jangidankit_" >Twitter</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group mx-3 my-2 outline-none backdrop-blur-sm rounded-md"
      onClick={toggleMode}
    >
      <BsMoon className="h-[1rem] w-[1rem] fill-zinc-500 transition dark:hidden md:hover:fill-indigo-400" />
      <BsSun className="hidden h-5 w-5 fill-white transition dark:block md:hover:fill-indigo-500" />
    </button>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}


function Avatar({ className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <div className="flex items-center justify-center font-inter overflow-hidden">
      <span className="text-[16px] text-gray-800 dark:text-gray-100 font-[500] mr-1">ANKIT</span> 
      <span className="text-[16px] text-gray-800 dark:text-gray-100 font-[600]">JANGID</span>
      </div>
    </Link>
  )
}

export function Header({ previousPathname }) {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Start loading when navigating to the "Work" page
    const handleRouteChangeStart = (url) => {
      if (url === '/work') {
        setIsLoading(true)
      }
    }

    const handleRouteChangeComplete = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // Clean up event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router])

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
      }
    }

    function updateStyles() {
      updateHeaderStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateStyles, { passive: true })
    }
  }, [isHomePage])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-black opacity-60"></div> // Darken overlay
      )}
      <header
        className="pointer-events-none relative z-50 w-full"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-3 border-y border-gray-300 dark:border-gray-700"
        >
          <div className="flex gap-0 px-6">
            <div className="flex flex-1 items-center">
              <Avatar />
            </div>
            <div className="items-center">
              <MobileNavigation className="pointer-events-auto md:hidden" />
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
            <div className="flex">
              <div className="pointer-events-auto pt-0.5">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
