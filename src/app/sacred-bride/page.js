"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "../../../public/tantric_alt.jpg"
import staticLogoPaypal from "../../../public/paypal_logo.svg"
import { PAYPAL_TANTRIC, VENMO_APP_LINK, VENMO_HANDLE } from "../paymentlinks"

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
            Sacred Bride Ceremony
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <div className='max-w-7xl mx-auto flex flex-col gap-16'>
          {/* What It Is Section */}
          <FadeInSection>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal text-center mb-12'>
              A Luxury Wellness Experience for Bachelorette Celebrations.
            </h2>
            <div className='flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto'>
              <div className='md:w-1/4 w-full'>
                <Image
                  src='/sacred_bride_about.jpg'
                  alt='Sacred Bride Ceremony'
                  width={362}
                  height={640}
                  className='w-full h-auto rounded-lg shadow-lg mb-8 md:mb-0'
                />
              </div>
              <div className='md:w-3/4'>
                <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight text-left max-w-5xl mx-auto'>
                  Celebrate the bride with an experience that is meaningful,
                  joyful, and unforgettable. The Sacred Bride Ceremony is a
                  private wellness experience designed for bachelorette groups
                  who want to create a deeper connection before the wedding day.
                  Rather than another activity on the itinerary, this is an
                  opportunity to slow down, laugh, reflect, and celebrate the
                  bride through movement, breath, intention, and shared ritual.
                  Whether your group is looking for a peaceful morning after a
                  night out or a unique way to begin the weekend, each ceremony
                  is thoughtfully customized to create an experience that
                  everyone can enjoy—regardless of yoga experience.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* How It's Done Section */}
          <FadeInSection className='mt-16 max-w-6xl mx-auto px-4 md:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start'>
              {/* Left Column */}
              <div className='flex flex-col items-start w-full'>
                <h3 className='faustina-title text-3xl lg:text-4xl font-normal mb-6 text-left'>
                  Your Experience May Include
                </h3>
                {/* Removed list-inside and added list-outside pl-5 for proper hanging indent */}
                <div className='text-lg lg:text-xl font-extralight text-left w-full'>
                  <ul className='list-disc list-outside pl-5 space-y-2.5'>
                    <li>Gentle Kundalini-inspired movement</li>
                    <li>Guided breathwork</li>
                    <li>Meditation and deep relaxation</li>
                    <li>
                      Intention-setting for the bride and her next chapter
                    </li>
                    <li>Group connection exercises</li>
                    <li>Journaling and reflection</li>
                    <li>Sound healing</li>
                    <li>Oracle card inspiration (optional)</li>
                    <li>A beautiful closing blessing for the bride</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className='flex flex-col items-start w-full'>
                <h3 className='faustina-title text-3xl lg:text-4xl font-normal mb-6 text-left'>
                  Perfect For
                </h3>
                <div className='text-lg lg:text-xl font-extralight text-left w-full'>
                  <ul className='list-disc list-outside pl-5 space-y-2.5'>
                    <li>Bachelorette parties</li>
                    <li>Bridal weekends</li>
                    <li>Girls’ getaways</li>
                    <li>Wedding wellness weekends</li>
                    <li>Birthday celebrations</li>
                    <li>Women’s retreats</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className='mt-16'>
            <div className='flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto'>
              <div className='md:w-1/4'>
                <Image
                  src='/sacred_bride_cta.jpg'
                  alt='Sacred Bride Ceremony'
                  width={362}
                  height={640}
                  className='w-full h-auto rounded-lg shadow-lg mb-8 md:mb-0'
                />
              </div>
              <div className='md:w-3/4'>
                <h3 className='faustina-title text-3xl lg:text-4xl font-normal mb-6 text-left'>
                  Private & Personalized
                </h3>
                <p className='text-xl md:text-xl lg:text-xl xl:text-2xl font-extralight text-left max-w-5xl mx-auto'>
                  Every ceremony is tailored to your group’s energy,
                  preferences, and comfort level. Sessions can be held at your
                  Airbnb, hotel suite, vacation rental, private residence, or
                  another approved location in the area. <br />
                  <br /> No previous yoga or meditation experience is required.{" "}
                  <br />
                  <br />
                </p>
                <h3 className='faustina-title text-3xl lg:text-4xl font-normal mb-6 text-left'>
                  What’s Included
                </h3>
                <p className='text-xl md:text-xl lg:text-xl xl:text-2xl font-extralight text-left max-w-5xl mx-auto pl-6'>
                  <li>Private facilitator</li>
                  <li>Customized ceremony</li>
                  <li>All yoga mats and props (if needed)</li>
                  <li>Curated music</li>
                  <li>A memorable experience created just for your group</li>
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Pricing and CTA Section */}
          <FadeInSection className='mt-16 text-center'>
            <h3 className='faustina-title text-4xl lg:text-5xl font-normal'>
              Duration
            </h3>
            <h4 className=' text-2xl my-8 font-extralight'>
              Choose your experience length based on your group size and
              schedule.
            </h4>
            <div className='flex flex-col md:flex-row gap-4 md:gap-32 justify-center'>
              <div className='flex flex-col gap-4 items-center mb-6'>
                <p className='text-4xl md:text-5xl text-gray-800 font-extralight'>
                  60 minutes
                </p>
              </div>
              <div className='flex flex-col gap-4 items-center mb-6'>
                <p className='text-4xl md:text-5xl text-gray-800 font-extralight'>
                  90 minutes
                </p>
              </div>
              <div className='flex flex-col gap-4 items-center mb-6'>
                <p className='text-4xl md:text-5xl text-gray-800 font-extralight'>
                  120 minutes
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className='mt-6 text-center'>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal'>
              Begin Your Celebration with Intention
            </h2>
            <h3 className='faustina-title text-3xl my-8 font-extralight'>
              Give the bride a gift she’ll remember long after the wedding day—a
              meaningful experience that brings everyone together and celebrates
              this new chapter with presence, joy, and connection.
            </h3>
          </FadeInSection>

          <FadeInSection className='mt-6 text-center flex flex-col items-center gap-2'>
            <h3 className='text-xl md:text-2xl my-4 font-extralight'>
              To book, please contact me via email:
            </h3>
            <a
              href='mailto:soulfireceremony@gmail.com'
              aria-label='Email'
              className='flex items-center gap-2 hover:opacity-70 transition-opacity text-lg md:text-xl'
            >
              <svg
                className='w-8 h-8 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.6 27.2 8.6 38.6 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
              </svg>
              <span>soulfireceremony@gmail.com</span>
            </a>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
