"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "/homepage.jpg"

// Reusable component for fade-in effect on scroll
const FadeInSection = ({ children, className }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only trigger the animation if the element is intersecting the viewport
        if (entry.isIntersecting) {
          setVisible(true)
          // Stop observing after the animation has been triggered once
          observer.unobserve(entry.target)
        }
      })
    })

    observer.observe(domRef.current)

    // Cleanup function to disconnect the observer
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

export default function Home() {
  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      {/* Hero Section with Background Image */}
      <div className='relative h-[100vh] w-full'>
        <Image
          src={staticImage}
          alt='Background'
          placeholder='blur'
          fill
          quality={100}
          objectFit='cover'
          sizes='100vw'
          // width='2100'
          // height='1400'
          className='absolute inset-0 object-[47.5%_20%] md:object-[50%_25%]'
          priority
        />
        <div className='absolute inset-0 flex items-center justify-start z-10 px-8 lg:px-32'>
          <div className='flex items-center w-full'>
            <h1 className='imperial-title text-[16vw] md:text-[14vw] lg:text-[7vw] text-white text-left leading-tight drop-shadow-[0_8px_8px_rgba(0,0,0,1)] md:drop-shadow-[0_12px_14px_rgba(0,0,0,1)] flex-1'>
              <span className='block'>Become</span>
              <span className='block'>What</span>
              <span className='block'>You Are</span>
            </h1>
            <h1 className='imperial-title text-[16vw] lg:text-[7vw] text-white text-right leading-tight drop-shadow-[0_8px_8px_rgba(0,0,0,1)] flex-1 lg:block hidden'>
              <span className='block'>SoulFire</span>
              <span className='block'>Ceremony</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Regular Content Section */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <FadeInSection>
          <h2 className='faustina-title text-4xl lg:text-5xl text-center mb-16 font-normal'>
            The Art of Becoming
          </h2>
        </FadeInSection>

        <FadeInSection className='max-w-7xl mx-auto'>
          <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-12'>
            <Image
              src='/homepageintro.jpg'
              alt='introduction image'
              width={800}
              height={800}
              className='w-full md:w-3/8 h-auto mb-8 md:mb-0 rounded-lg shadow-lg'
              priority
            />
            <div className='flex flex-col gap-8 md:w-5/8'>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                The journey back to your eternal flame begins here. <br />{" "}
                <br />
                SoulFire Ceremony is the living dance of life itself, a
                continuous practice of restoring harmony to every element of
                your existence.
                <br /> <br />
                It is the art of awakening the sacred inner fire—the luminous
                current of Kundalini energy—to guide you toward a deeper mastery
                of consciousness.
              </p>
              <Link
                href='/about'
                className='bg-black text-xl text-white border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-60 max-w:[200px] text-center self-start mt-4'
              >
                Learn more
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* What we offer section */}
      <div className='px-8 pt-6 lg:py-16 md:py-24 lg:px-32 bg-white text-black mx-auto flex flex-col'>
        <FadeInSection>
          <h2 className='faustina-title text-4xl lg:text-5xl text-center mb-10 font-normal'>
            What we offer
          </h2>
          <p className='mb-8 text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center'>
            Through our gentle and profound practices, we offer you a path home.
          </p>
        </FadeInSection>

        <div className='flex flex-col gap-16 md:gap-24 mt-10 max-w-7xl mx-auto'>
          {/* Energy Analysis Card */}
          <FadeInSection>
            <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-12 w-full'>
              <Image
                src='/homepage_energyanalysis.jpg'
                alt='energy analysis illustration'
                width={400}
                height={200}
                className='w-full md:w-5/16 h-auto mb-8 md:mb-0 rounded-lg shadow-lg'
                priority
              />
              <div className='flex flex-col gap-8 items-center md:w-3/8'>
                <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center'>
                  Explore a personalized <strong>energy analysis</strong> to
                  understand your unique flow.
                </p>
                <p className='text-large md:text-large lg:text-large xl:text-xl font-extralight text-center px-4'>
                  Unlock your personal energetic blueprint to identify blockages
                  and realign with your true purpose. This is a journey to
                  harness your most potent forces, creating harmony and clarity.
                </p>
                <Link
                  href='/energy-analysis'
                  className='bg-black text-xl text-white border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center'
                >
                  Get yours now
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Kundalini Card */}
          <FadeInSection>
            <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-12 w-full'>
              <Image
                src='/homepage_kundalini.jpg'
                alt='kundalini illustration'
                width={400}
                height={200}
                className='w-full md:w-4/15 h-auto mb-8 md:mb-0 rounded-lg shadow-lg'
                priority
              />
              <div className='flex flex-col gap-8 items-center md:w-3/8 md:order-first'>
                <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center'>
                  Embrace the transformative power of{" "}
                  <strong>Kundalini.</strong>
                </p>
                <p className='text-large md:text-large lg:text-large xl:text-xl font-extralight text-center px-4'>
                  Through movement, dynamic breathwork and meditation, we awaken
                  the luminous current of Kundalini. This ancient practice
                  ignites your inner flame, leading you to a profound state of
                  spiritual awareness and vitality.
                </p>
                <Link
                  href='/kundalini'
                  className='bg-black text-xl text-white border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center'
                >
                  Dive in
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Tantric Card */}
          <FadeInSection>
            <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-12 w-full'>
              <Image
                src='/homepage_tantric.jpg'
                alt='tantric massage illustration'
                width={400}
                height={200}
                className='w-full md:w-3/8 h-auto mb-8 md:mb-0 rounded-lg shadow-lg'
                priority
              />
              <div className='flex flex-col gap-8 items-center md:w-3/8'>
                <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-center'>
                  Find deep healing and connection with our specialized{" "}
                  <strong>tantric meditations.</strong>
                </p>
                <p className='text-large md:text-large lg:text-large xl:text-xl font-extralight text-center px-4'>
                  More than a physical service, tantric meditation is a sacred
                  ritual to dissolve emotional blockages and energetic knots. It
                  is a practice that cultivates deep self-love and a harmonious
                  connection between your body and spirit.
                </p>
                <Link
                  href='/tantric'
                  className='bg-black text-xl text-white border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center'
                >
                  Book now
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <h2 className='faustina-title text-4xl lg:text-5xl text-center mt-30 mb-30 lg:mb-16 font-normal max-w-[1300px] mx-auto'>
            This is a ceremony of remembrance, a humble service to guide you
            back to who you are — the eternal flame.
          </h2>
        </FadeInSection>
      </div>
    </div>
  )
}
