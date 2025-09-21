"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
    setIsFadingOut(false)
  }

  const handleMouseLeave = () => {
    setIsFadingOut(true)
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 200) // Match this duration with the CSS transition duration
  }

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setIsMobileMenuClosing(true)
      setTimeout(() => {
        setMobileMenuOpen(false)
        setIsMobileMenuClosing(false)
      }, 300) // Match this with the fade duration
    } else {
      setMobileMenuOpen(true)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  // Refactored class string for consistent hover effects
  const linkBaseClasses = `
    text-foreground hover:text-[#383838] dark:hover:text-[#7c7c7c]
    transition-colors duration-200
  `

  const underlineClasses = `
    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#fc4052] after:transition-all after:duration-300
    group-hover:after:w-full
  `

  return (
    <header className='bg-background px-8 lg:px-32 py-4 flex items-center justify-between shadow-lg drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-50 relative'>
      <div className='flex items-center gap-4'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={80}
            height={80}
            className='mr-2'
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex ml-7 items-center gap-8 text-lg lg:text-xl relative'>
          <div className='relative group'>
            <Link href='/' className={`${linkBaseClasses} ${underlineClasses}`}>
              Home
            </Link>
          </div>
          {/* Dropdown parent */}
          <div
            className='relative group' // Corrected: `group` class added back
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${linkBaseClasses} focus:outline-none ${underlineClasses}`}
              aria-haspopup='true'
              aria-expanded={dropdownOpen}
              type='button'
            >
              Services
            </button>
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div
                className={`absolute left-0 mt-2 w-48 bg-background border border-gray-200 rounded shadow-lg z-50 transition-opacity ease-in-out duration-200 ${
                  isFadingOut ? "opacity-0" : "opacity-100"
                }`}
              >
                <Link
                  href='/energy-analysis'
                  className='block px-4 py-2 text-foreground hover:bg-gray-100 hover:text-[#383838] dark:hover:text-[#7c7c7c] transition-colors duration-200'
                >
                  Energy Analysis
                </Link>
                <Link
                  href='/kundalini'
                  className='block px-4 py-2 text-foreground hover:bg-gray-100 hover:text-[#383838] dark:hover:text-[#7c7c7c] transition-colors duration-200'
                >
                  Kundalini
                </Link>
                <Link
                  href='/tantric'
                  className='block px-4 py-2 text-foreground hover:bg-gray-100 hover:text-[#383838] dark:hover:text-[#7c7c7c] transition-colors duration-200'
                >
                  Tantric
                </Link>
              </div>
            )}
          </div>
          <div className='relative group'>
            <Link
              href='/about'
              className={`${linkBaseClasses} ${underlineClasses}`}
            >
              About
            </Link>
          </div>
          <div className='relative group'>
            <Link
              href='/contact'
              className={`${linkBaseClasses} ${underlineClasses}`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>

      {/* Login & Donation for Desktop */}
      <nav className='hidden lg:flex items-center gap-4 text-lg lg:text-xl'>
        <Link
          href='/login'
          className='bg-white text-black border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-80'
        >
          Log in
        </Link>
        <Link
          href='/donation'
          className='bg-[#fc4052] text-white py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-80'
        >
          Donation
        </Link>
      </nav>

      {/* Hamburger Menu Button (visible on mobile) */}
      <button
        onClick={toggleMobileMenu}
        className='lg:hidden p-2 text-foreground z-50 transition-transform duration-300 hover:bg-gray-100 rounded-md focus:outline-none'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu (conditionally rendered) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 w-full h-screen bg-background z-40 flex flex-col items-center justify-center space-y-8 text-2xl transition-opacity ease-in-out duration-300 ${
            isMobileMenuClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className='relative group'>
            <Link
              href='/'
              onClick={toggleMobileMenu}
              className={`${linkBaseClasses} ${underlineClasses}`}
            >
              Home
            </Link>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <span className='text-foreground font-bold'>Services</span>
            <Link
              href='/energy-analysis'
              onClick={toggleMobileMenu}
              className='hover:text-[#383838] dark:hover:text-[#7c7c7c] transition-colors duration-200'
            >
              Energy Analysis
            </Link>
            <Link
              href='/kundalini'
              onClick={toggleMobileMenu}
              className='hover:text-[#383838] dark:hover:text-[#7c7c7c] transition-colors duration-200'
            >
              Kundalini
            </Link>
            <Link
              href='/tantric'
              onClick={toggleMobileMenu}
              className='hover:text-[#383838] dark:hover:text-[#7c7c7c] transition-colors duration-200'
            >
              Tantric
            </Link>
          </div>
          <div className='relative group'>
            <Link
              href='/about'
              onClick={toggleMobileMenu}
              className={`${linkBaseClasses} ${underlineClasses}`}
            >
              About
            </Link>
          </div>
          <div className='relative group'>
            <Link
              href='/contact'
              onClick={toggleMobileMenu}
              className={`${linkBaseClasses} ${underlineClasses}`}
            >
              Contact
            </Link>
          </div>
          <hr className='w-1/2 border-t border-gray-300' />
          <Link
            href='/login'
            onClick={toggleMobileMenu}
            className='bg-white text-black py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-80'
          >
            Log in
          </Link>
          <Link
            href='/donation'
            onClick={toggleMobileMenu}
            className='bg-orange-500 text-white py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-80'
          >
            Donation
          </Link>
        </div>
      )}
    </header>
  )
}
