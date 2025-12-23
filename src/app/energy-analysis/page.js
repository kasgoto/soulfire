"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "../../../public/energy_analysis.jpg"
import staticLogoPaypal from "../../../public/paypal_logo.svg"
import {
  PAYPAL_ENERGY_ANALYSIS,
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
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 md:translate-y-16"
      }`}
    >
      {children}
    </div>
  )
}

export default function EnergyAnalysisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Close modal when clicking Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsModalOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      {/* Hero Section */}
      <div className='relative h-[60vh] md:h-[90vh] w-full'>
        <Image
          src={staticImage}
          alt='Spiritual energy analysis'
          placeholder='blur'
          fill
          quality={100}
          style={{ objectFit: "cover", objectPosition: "50% 25%" }}
          sizes='100vw'
          className='absolute inset-0'
          priority
        />
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <h1 className='imperial-title text-[12vw] md:text-[8vw] lg:text-[6vw] text-white text-center leading-tight drop-shadow-[0_8px_8px_rgba(0,0,0,1)]'>
            Energy Analysis
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <div className='max-w-7xl mx-auto flex flex-col gap-16'>
          {/* ... (What is Energy Analysis and How It Works sections remain the same) ... */}
          <FadeInSection>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal text-center mb-12'>
              What is an Energy Analysis?
            </h2>
            <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center max-w-5xl mx-auto'>
              An energy analysis is a personalized, deep dive into your unique
              energetic blueprint. It&apos;s a powerful tool to help you
              identify blockages, understand your energetic patterns, and
              realign with your true purpose.
            </p>
          </FadeInSection>

          {/* Pricing and CTA Section */}
          <FadeInSection className='mt-16 text-center'>
            <h3 className='faustina-title text-4xl lg:text-5xl font-normal'>
              Price: <span className='text-gray-600'>$55</span>
            </h3>
            <p className='text-xl md:text-2xl lg:text-2xl font-extralight mt-4 mb-8'>
              Take the first step on your journey to understanding yourself on a
              deeper level.
            </p>

            {/* Changed Link to Button to trigger Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className='inline-block bg-black text-xl text-white border border-gray-300 py-4 px-10 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center'
            >
              Get Yours Now
            </button>
          </FadeInSection>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      {isModalOpen && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'
          onClick={() => setIsModalOpen(false)} // Close when clicking backdrop
        >
          <div
            className='bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl flex flex-col items-center'
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the box
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
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

            <h3 className='faustina-title text-3xl mb-2'>Energy Analysis</h3>
            <p className='text-gray-600 mb-8 font-light'>
              Choose your preferred payment method
            </p>

            {/* PayPal Option */}
            <a
              href={PAYPAL_ENERGY_ANALYSIS}
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

            {/* Venmo Option with QR */}
            <div className='w-full flex flex-col items-center bg-blue-50/50 p-6 rounded-xl border border-blue-100'>
              <Image
                src='/venmo_qr_energy_analysis.png'
                alt='Venmo QR Code'
                width={180}
                height={180}
                className='rounded-lg shadow-sm mb-4'
              />
              <p className='text-sm text-blue-800 font-medium mb-2'>
                Scan with Venmo App
              </p>
              <a
                href={VENMO_APP_LINK}
                className='text-blue-600 font-bold hover:underline'
              >
                @{VENMO_HANDLE}
              </a>
            </div>

            <p className='mt-6 text-xs text-gray-400 text-center italic'>
              Once paid, we will contact you via email to schedule your session.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
