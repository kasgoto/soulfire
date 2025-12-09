"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "../../../public/energy_analysis.jpg"

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
          // width={2000}
          // height={1802}
          objectFit='cover'
          objectPosition='50% 25%'
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
          {/* What It's For Section */}
          <FadeInSection>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal text-center mb-12'>
              What is an Energy Analysis?
            </h2>
            <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center max-w-5xl mx-auto'>
              An energy analysis is a personalized, deep dive into your unique
              energetic blueprint. It&apos;s a powerful tool to help you
              identify blockages, understand your energetic patterns, and
              realign with your true purpose. This analysis is designed to help
              you harness your most potent forces, creating harmony and clarity
              in your life.
            </p>
          </FadeInSection>

          {/* How It's Done Section */}
          <FadeInSection className='flex flex-col md:flex-row items-center md:gap-12 mt-16'>
            <div className='md:w-1/4'>
              <Image
                src='/energy_analysis_howitworks.jpg'
                alt='Diagram showing energy flow'
                width={500}
                height={500}
                className='w-full h-auto rounded-lg shadow-lg mb-8 md:mb-0'
              />
            </div>
            <div className='md:w-3/4 flex flex-col gap-6 text-center md:text-left'>
              <h3 className='faustina-title text-3xl lg:text-4xl font-normal'>
                How It Works
              </h3>
              <p className='text-xl md:text-2xl lg:text-2xl font-extralight'>
                Energy Analysis is about meeting you where you are. This
                60-minute session begins with gentle breathing and relaxation,
                allowing you to settle into your body and arrive in the present
                moment. From there, I’ll guide you through a few reflective
                questions to gain insight into the current state of your
                physical, emotional and mental body. Throughout the session,
                I’ll use a variety of energy tools and sound healing techniques
                to help bring your energy field into balance and harmony.
              </p>
              <p className='text-xl md:text-2xl lg:text-2xl font-extralight'>
                Together, we’ll uncover where your energy may be out of
                alignment and explore the next steps toward restoring balance,
                clarity and flow.
              </p>
            </div>
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
            <Link
              href='#' // You can replace this with a booking URL
              className='bg-black text-xl text-white border border-gray-300 py-4 px-10 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center'
            >
              Get Yours Now
            </Link>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
