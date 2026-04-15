"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "../../../public/kundalini_hero.jpg"
import staticLogoPaypal from "../../../public/paypal_logo.svg"
import {
  PAYPAL_KUNDALINI_1ON1,
  PAYPAL_KUNDALINI_1ON1_ONLINE,
  VENMO_APP_LINK,
  VENMO_HANDLE,
} from "../paymentlinks"

// Reusable component for fade-in effect on scroll
const FadeInSection = ({ children, className }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })
    observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  )
}

export default function KundaliniPage() {
  // We store the data of the "active" session to show in the modal
  const [activeSession, setActiveSession] = useState(null)

  // Configuration for the different price points
  const sessionOptions = {
    inPerson: {
      title: "1:1 In-Person Session",
      price: "$75",
      paypalLink: PAYPAL_KUNDALINI_1ON1,
      qrCode: "/venmo_qr_kundalini.png", // Ensure this image exists in /public
    },
    online: {
      title: "1:1 Online Session",
      price: "$35",
      paypalLink: PAYPAL_KUNDALINI_1ON1_ONLINE,
      qrCode: "/venmo_qr_kundalini_online.png", // Ensure this image exists in /public
    },
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveSession(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      {/* Hero Section */}
      <div className='relative h-[60vh] md:h-[100vh] w-full'>
        <Image
          src={staticImage}
          alt='Kundalini awakening'
          placeholder='blur'
          fill
          quality={100}
          style={{ objectFit: "cover", objectPosition: "50% 47%" }}
          sizes='100vw'
          className='absolute inset-0'
          priority
        />
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <h1 className='imperial-title text-[12vw] md:text-[8vw] lg:text-[6vw] text-white text-center leading-tight drop-shadow-[0_8px_8px_rgba(0,0,0,1)]'>
            Kundalini
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <div className='max-w-5xl mx-auto flex flex-col gap-16'>
          <FadeInSection>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal text-center mb-12'>
              Embrace Your Inner Fire
            </h2>
            <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center max-w-4xl mx-auto'>
              Kundalini is the primal life force—the luminous current of energy
              that resides at the base of your spine. It is a powerful,
              transformative energy that, when awakened, leads to a profound
              state of spiritual awareness and vitality.
            </p>
          </FadeInSection>

          {/* Pricing Section - Updated to Grid for two options */}
          <FadeInSection className='mt-6 text-center'>
            <h3 className='faustina-title text-4xl lg:text-5xl font-normal mb-12'>
              Join a Session
            </h3>

            <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center max-w-4xl mx-auto mb-8 px-6'>
              The session combines: movement, dynamic breathwork, mantra, and
              meditation to create a safe and sacred space for your
              transformation. Each 90 minutes session is a unique journey
              designed to help you release blockages, clear energetic pathways,
              and experience a new level of emotional and spiritual clarity.
            </p>

            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              {/* Option 2: Online */}
              <div className='p-8 border border-gray-100 rounded-3xl bg-gray-50 flex flex-col items-center shadow-sm'>
                <h4 className='faustina-title text-3xl mb-2'>Online</h4>
                <p className='text-4xl font-light mb-6'>$35</p>
                <p className='text-lg font-extralight mb-8 h-12'>
                  Convenient 1:1 virtual session
                </p>
                <button
                  onClick={() => setActiveSession(sessionOptions.online)}
                  className='bg-black text-white py-3 px-8 rounded-full transition-all hover:opacity-70 w-full'
                >
                  Book Online
                </button>
              </div>
              {/* Option 1: In-Person */}
              <div className='p-8 border border-gray-100 rounded-3xl bg-gray-50 flex flex-col items-center shadow-sm'>
                <h4 className='faustina-title text-3xl mb-2'>In-Person</h4>
                <p className='text-4xl font-light mb-6'>$75</p>
                <p className='text-lg font-extralight mb-8 h-12'>
                  Full immersion 1:1 local session
                </p>
                <button
                  onClick={() => setActiveSession(sessionOptions.inPerson)}
                  className='bg-black text-white py-3 px-8 rounded-full transition-all hover:opacity-70 w-full'
                >
                  Book In-Person
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* DYNAMIC PAYMENT MODAL */}
      {activeSession && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'
          onClick={() => setActiveSession(null)}
        >
          <div
            className='bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl flex flex-col items-center'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSession(null)}
              className='absolute top-4 right-4 text-gray-400 hover:text-black transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </button>

            {/* Dynamic Content based on activeSession */}
            <h3 className='faustina-title text-3xl mb-1'>
              Kundalini {activeSession.title}
            </h3>
            <p className='text-gray-500 mb-4 font-light text-center text-sm'>
              Choose your preferred payment method.
            </p>

            <p className='mt-2 mb-6 text-sm text-gray-400 text-center italic'>
              Once paid, contact me via email or DM to schedule your session.{" "}
              <br />
              <a
                href='mailto:soulfireceremony@gmail.com'
                aria-label='Email'
                className='flex justify-center text-center items-center gap-2 text-sm hover:opacity-70 transition-opacity my-1'
              >
                <svg
                  className='w-5 h-5 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.2 8.6 38.6 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
                </svg>
                <span>soulfireceremony@gmail.com</span>
              </a>
              <a
                href='https://www.instagram.com/soulfireceremony'
                aria-label='Instagram'
                target='_blank'
                rel='noopener noreferrer'
                className='flex justify-center text-center items-center gap-2 text-sm hover:opacity-70 transition-opacity'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  className='w-5 h-5 fill-current'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
                <span>SoulFireCeremony</span>
              </a>
            </p>

            {/* Dynamic PayPal Link */}
            <a
              href={activeSession.paypalLink}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full bg-[#0070ba] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 mb-6 hover:bg-[#005ea6] transition-colors'
            >
              <Image
                src={staticLogoPaypal}
                alt=''
                width={20}
                height={20}
                className='brightness-0 invert'
              />
              Pay with PayPal
            </a>

            <div className='flex items-center w-full mb-6'>
              <div className='flex-grow border-t border-gray-200'></div>
              <span className='px-4 text-gray-400 text-sm'>OR</span>
              <div className='flex-grow border-t border-gray-200'></div>
            </div>

            {/* Dynamic Venmo QR */}
            <div className='w-full flex flex-col items-center bg-blue-50/50 p-6 rounded-xl border border-blue-100'>
              <Image
                src={activeSession.qrCode}
                alt='Venmo QR Code'
                width={160}
                height={160}
                className='rounded-lg shadow-sm mb-4'
              />
              <p className='text-xs text-blue-800 font-medium mb-1'>
                Scan to pay via Venmo
              </p>
              <a
                href={VENMO_APP_LINK}
                className='text-blue-600 font-bold hover:underline'
              >
                @{VENMO_HANDLE}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
