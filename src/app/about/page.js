"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "../../../public/about_hero.jpg"

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

export default function AboutPage() {
  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      {/* Hero Section */}
      <div className='relative h-[100vh] md:h-[100vh] w-full'>
        <Image
          src={staticImage}
          alt='About Soulfire Ceremony illustration'
          placeholder='blur'
          fill
          quality={100}
          objectFit='cover'
          objectPosition='50% 51%'
          sizes='100vw'
          className='absolute inset-0'
          // width={2000}
          // height={2000}
          priority
          
        />
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <h1 className='imperial-title text-[12vw] md:text-[8vw] lg:text-[6vw] text-white text-center leading-tight drop-shadow-[0_8px_8px_rgba(0,0,0,1)]'>
            About SoulFire Ceremony
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <div className='max-w-5xl mx-auto flex flex-col gap-16'>
          {/* Intro Section */}
          <FadeInSection className='flex flex-col md:flex-row items-center md:gap-12'>
            <div className='md:w-2/6'>
              <Image
                src='/logotext.png'
                alt='logo'
                width={400}
                height={400}
                className='w-auto h-auto mb-8 md:mb-0 max-h-[400px]'
              />
            </div>
            <div className='md:w-4/6 flex flex-col gap-6 text-center md:text-left'>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                SoulFire Ceremony is the living dance of life itself — the
                shadow and the light. I created it to be a continuous mastery of
                consciousness, the very foundation of our quality of life.
              </p>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                This ceremony is a remembrance. It is the art of restoring
                harmony to every element of existence by awakening and feeding
                the sacred inner fire – the primal life force, the luminous
                current of Kundalini energy.
              </p>
            </div>
          </FadeInSection>

          {/* Personal Story Section */}
          <FadeInSection className='flex flex-col items-center md:gap-12 mt-16'>
            <div className='flex flex-col gap-6 text-center md:text-left'>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                A little about me:
              </p>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                I&#39;d like to humbly introduce myself and tell my story in a
                few words. I have an intense desire for learning, knowing and
                exploring this world, embracing the unknown and freedom that
                comes with it. This feeling of liberation when on top of a
                mountain or when standing in front of a pyramid. Something
                bigger than oneself is what drives me. At an early age, I
                started traveling the world, graduated with a business degree,
                moved to the United States, and began my journey of spiritual
                enlightenment. I&#39;m grateful to walk this path of light. I
                know what it means to wander searching for truth, yourself and
                higher purpose. Many years ago, I stepped into a room full of
                light and kept coming back. Today, I carry this torch of light
                and share it with anyone who is looking for it.
              </p>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                For the past nine years, I have practiced Kundalini Yoga, and
                now I am honored to teach it. I&#39;ve always valued a personal
                connection to a student, since I believe heart-to-heart
                connection is the most effective way of passing knowledge. I
                also enjoy teaching in groups, as there is a great power in
                coming together.
              </p>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                For those that come in couples, I have a special offering - a
                journey of merging in love and connection. Couples tantric
                meditations are designed to meet one another beyond form,
                uniting you at a soul level.
              </p>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                With deep gratitude, I offer this from my heart to yours.
              </p>
              <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight'>
                -Albina
              </p>
            </div>
            <div className='mt-6'>
              <Image
                src='/about_flame.jpeg'
                alt='A hand holding a flame'
                width={500}
                height={500}
                className='w-full h-auto rounded-lg shadow-lg mb-2 md:mb-0'
              />
            </div>
          </FadeInSection>

          {/* CTA Buttons */}
          <FadeInSection className='flex flex-col items-center gap-6 mt-16 text-center'>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal'>
              Find Your Path
            </h2>
            <p className='text-xl md:text-2xl lg:text-2xl font-extralight max-w-3xl'>
              Explore our core offerings and begin your journey back to
              yourself.
            </p>
            <div className='flex flex-col md:flex-row gap-6 mt-8 w-full justify-center'>
              <Link
                href='/kundalini'
                className='bg-black text-xl text-white border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center mx-auto md:mx-0'
              >
                Kundalini
              </Link>
              <Link
                href='/energy-analysis'
                className='bg-black text-xl text-white border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center mx-auto md:mx-0'
              >
                Spiritual Analysis
              </Link>
              <Link
                href='/tantric'
                className='bg-black text-xl text-white border border-gray-300 py-2 px-6 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center mx-auto md:mx-0'
              >
                Tantric Massages
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
