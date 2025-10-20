"use client"

// Re-introducing Next.js Link and Image components, as requested.
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false)
  const timeoutRef = useRef(null)

  // adding a dropdown for services tab
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
    setIsFadingOut(false)
  }

  const handleMouseLeave = () => {
    setIsFadingOut(true)
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 200)
  }

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setIsMobileMenuClosing(true)
      setTimeout(() => {
        setMobileMenuOpen(false)
        setIsMobileMenuClosing(false)
      }, 300)
    } else {
      setMobileMenuOpen(true)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const linkBaseClasses = `
    text-white hover:text-gray-300
    transition-colors duration-200
  `

  const underlineClasses = `
    relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#fc4052] after:transition-all after:duration-300
    hover:after:w-full
  `

  return (
    <header
      className='fixed top-0 left-0 w-full h-[170px] z-50 bg-gradient-to-b from-black/90 via-black/90 to-transparent/0 lg:to-transparent/0 px-8 lg:px-32 p-0 flex items-end justify-between transition-colors duration-300'
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 95%)",
      }}
    >
      {/* Container for logo and desktop nav */}
      <div className='flex items-center gap-4 h-full pb-6'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/logotextwhite.png'
            alt='Logo'
            width={100}
            height={120}
            priority
            className='mr-2 drop-shadow-xl'
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
            className='relative group'
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
                className={`absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 transition-opacity ease-in-out duration-200 ${
                  isFadingOut ? "opacity-0" : "opacity-100"
                }`}
              >
                <Link
                  href='/energy-analysis'
                  // Text inside dropdown needs to be dark for white background
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#383838] transition-colors duration-200'
                >
                  Energy Analysis
                </Link>
                <Link
                  href='/kundalini'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#383838] transition-colors duration-200'
                >
                  Kundalini
                </Link>
                <Link
                  href='/tantric'
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#383838] transition-colors duration-200'
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
      <nav className='hidden lg:flex items-center gap-4 text-lg lg:text-xl h-full pb-6'>
        {/* <Link
          href='/login'
          className='bg-white text-black border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-80'
        >
          Log in
        </Link> */}
        <Link
          href='/donation'
          className='bg-[#f24932] text-white py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-80'
        >
          Donation
        </Link>
      </nav>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMobileMenu}
        // Moved button out of the flow to use absolute positioning so it doesn't break alignment
        // and is always visible on the top right.
        className='absolute top-8 right-8 lg:hidden p-2 text-white z-50 transition-transform duration-300 hover:bg-white/20 rounded-md focus:outline-none'
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 w-full h-screen bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 text-2xl transition-opacity ease-in-out duration-300 ${
            isMobileMenuClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className='relative group'>
            <Link
              href='/'
              onClick={toggleMobileMenu}
              className='text-white hover:text-gray-400 transition-colors duration-200'
            >
              Home
            </Link>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <span className='text-white font-bold'>Services</span>
            <Link
              href='/energy-analysis'
              onClick={toggleMobileMenu}
              className='text-white hover:text-gray-400 transition-colors duration-200'
            >
              Energy Analysis
            </Link>
            <Link
              href='/kundalini'
              onClick={toggleMobileMenu}
              className='text-white hover:text-gray-400 transition-colors duration-200'
            >
              Kundalini
            </Link>
            <Link
              href='/tantric'
              onClick={toggleMobileMenu}
              className='text-white hover:text-gray-400 transition-colors duration-200'
            >
              Tantric
            </Link>
          </div>
          <div className='relative group'>
            <Link
              href='/about'
              onClick={toggleMobileMenu}
              className='text-white hover:text-gray-400 transition-colors duration-200'
            >
              About
            </Link>
          </div>
          <div className='relative group'>
            <Link
              href='/contact'
              onClick={toggleMobileMenu}
              className='text-white hover:text-gray-400 transition-colors duration-200'
            >
              Contact
            </Link>
          </div>
          <hr className='w-1/2 border-t border-gray-500' />
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
            className='bg-[#fc4052] text-white py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-80'
          >
            Donation
          </Link>
        </div>
      )}
    </header>
  )
}
