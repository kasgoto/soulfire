"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "/tantic.jpg"

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

export default function TantricPage() {
  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      {/* Hero Section */}
      <div className='relative h-[60vh] md:h-[90vh] w-full'>
        <Image
          src={staticImage}
          alt='Tantric massage illustration'
          placeholder='blur'
          fill
          quality={100}
          objectFit='cover'
          objectPosition='50% 25%'
          sizes='100vw'
          // width={2000}
          // height={1333}
          className='absolute inset-0'
          priority
        />
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <h1 className='imperial-title text-[12vw] md:text-[8vw] lg:text-[6vw] text-white text-center leading-tight drop-shadow-[0_8px_8px_rgba(0,0,0,1)]'>
            Tantric Meditations
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <div className='max-w-7xl mx-auto flex flex-col gap-16'>
          {/* What It Is Section */}
          <FadeInSection>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal text-center mb-12'>
              Beyond the Physical
            </h2>
            <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center max-w-5xl mx-auto'>
              It is a practice that cultivates deep self-love and a harmonious
              connection between your body and spirit. This is not merely a
              physical service, but a journey of profound healing and spiritual
              connection.
            </p>
          </FadeInSection>

          {/* How It's Done Section */}
          <FadeInSection className='flex flex-col md:flex-row items-center md:gap-12 mt-16'>
            <div className='md:w-1/2'>
              <Image
                src='/homepage_tantric.jpg'
                alt='Tantric session in progress'
                width={500}
                height={500}
                className='w-full h-auto rounded-lg shadow-lg mb-8 md:mb-0'
              />
            </div>
            <div className='md:w-1/2 flex flex-col gap-6 text-center md:text-left'>
              <h3 className='faustina-title text-3xl lg:text-4xl font-normal'>
                What a Session Include
              </h3>
              <p className='text-xl md:text-2xl lg:text-2xl font-extralight'>
                Our tantric meditations are a safe and respectful space for
                couples to explore intimacy on a deeper level. We use guided
                touch, breathwork, and presence to help you connect with your
                partner and yourselves in a more profound way.
              </p>
              <p className='text-xl md:text-2xl lg:text-2xl font-extralight'>
                Each session is tailored to your unique needs, focusing on
                communication, trust, and the liberation of energetic flow.
                It&#39;s an opportunity to find new levels of connection and
                harmony together.
              </p>
            </div>
          </FadeInSection>

          {/* Pricing and CTA Section */}
          <FadeInSection className='mt-16 text-center'>
            <h3 className='faustina-title text-4xl lg:text-5xl font-normal mb-8'>
              Couples Tantric Session
            </h3>
            <div className='flex flex-col md:flex-row gap-4 md:gap-32 justify-center'>
              <div className='flex flex-col gap-4 items-center md:mb-16'>
                <h4 className='faustina-title text-3xl font-normal'>
                  Online 1:1
                </h4>
                <p className='text-4xl md:text-5xl text-gray-600 font-extralight'>
                  $35
                </p>
              </div>
              <div className='flex flex-col gap-4 items-center mb-6'>
                <h4 className='faustina-title text-3xl font-normal'>
                  Online couples
                </h4>
                <p className='text-4xl md:text-5xl text-gray-600 font-extralight'>
                  $55
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-24 justify-center'>
              <div className='flex flex-col gap-4 items-center md:mb-16'>
                <h4 className='faustina-title text-3xl font-normal'>
                  In-Person 1:1
                </h4>
                <p className='text-4xl md:text-5xl text-gray-600 font-extralight'>
                  $75
                </p>
              </div>
              <div className='flex flex-col gap-4 items-center mb-6'>
                <h4 className='faustina-title text-3xl font-normal'>
                  In-Person couples
                </h4>
                <p className='text-4xl md:text-5xl text-gray-600 font-extralight'>
                  $135
                </p>
              </div>
            </div>
            <div className='mt-12 md:mt-4'>
              <Link
                href='#' // Replace with your actual booking link
                className='bg-black text-xl text-white border border-gray-300 py-4 px-10 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center mt-12'
              >
                Book Now
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
