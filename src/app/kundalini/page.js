"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

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

export default function KundaliniPage() {
  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      {/* Hero Section */}
      <div className='relative h-[60vh] md:h-[100vh] w-full'>
        <Image
          src='/kundalini_hero.jpg'
          alt='Kundalini awakening'
          fill
          quality={100}
          objectFit='cover'
          objectPosition='50% 47%'
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

      {/* Main Content Section */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <div className='max-w-5xl mx-auto flex flex-col gap-16'>
          {/* What It Is Section */}
          <FadeInSection>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal text-center mb-12'>
              Embrace Your Inner Fire
            </h2>
            <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center max-w-4xl mx-auto'>
              Kundalini is the primal life force—the luminous current of energy
              that resides at the base of your spine. It is a powerful,
              transformative energy that, when awakened, leads to a profound
              state of spiritual awareness and vitality. Our practice is a
              gentle, guided process of awakening this inner fire to ignite a
              deeper connection to yourself.
            </p>
          </FadeInSection>

          {/* How It's Done Section */}
          <FadeInSection className='flex flex-col md:flex-row-reverse items-center md:gap-12 mt-16'>
            <div className='md:w-1/3'>
              <Image
                src='/kundalini_includes.jpg'
                alt='Kundalini session in progress'
                width={500}
                height={500}
                className='w-full h-auto rounded-lg shadow-lg mb-8 md:mb-0'
              />
            </div>
            <div className='md:w-2/3 flex flex-col gap-6 text-center md:text-left'>
              <h3 className='faustina-title text-3xl lg:text-4xl font-normal'>
                What a Session Includes
              </h3>
              <p className='text-xl md:text-2xl lg:text-2xl font-extralight'>
                Our sessions combine movement, dynamic breathwork, mantra, and
                meditation to create a safe and sacred space for your
                transformation. Each session is a unique journey designed to
                help you release blockages, clear energetic pathways, and
                experience a new level of emotional and spiritual clarity.
              </p>
              <p className='text-xl md:text-2xl lg:text-2xl font-extralight'>
                Through this practice, you can cultivate a deep sense of peace,
                increase your mental clarity, and unlock a reservoir of inner
                strength you may not have known you had.
              </p>
            </div>
          </FadeInSection>

          {/* Pricing and CTA Section */}
          <FadeInSection className='mt-16 text-center'>
            <h3 className='faustina-title text-4xl lg:text-5xl font-normal'>
              Price: <span className='text-gray-600'>$75 per 1:1 session</span>
            </h3>
            <p className='text-xl md:text-2xl lg:text-2xl font-extralight mt-4 mb-8'>
              Take the first step toward awakening your true self.
            </p>
            <Link
              href='#' // Replace with your actual booking link
              className='bg-black text-xl text-white border border-gray-300 py-4 px-10 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center'
            >
              Book a Session
            </Link>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
