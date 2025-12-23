"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import staticImage from "../../../public/tantric.jpg"
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
                What a Session Includes
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

          <FadeInSection>
            <p className='text-xl md:text-xl lg:text-xl xl:text-2xl font-extralight text-left max-w-8xl mx-auto'>
              Tantric sessions are offered as a safe, respectful, and
              intentional space for individuals and couples to explore intimacy,
              self-awareness, and energetic connection on a deeper level. Each
              session lasts 90 minutes.
              <br />
              <br /> I serve as a space holder for your soul’s liberation,
              guiding the process while honoring consent, boundaries, and
              presence. This work is designed to unite body and spirit through
              conscious awareness, grounded structure, and embodied experience.
              <br />
              <br /> To create a precise and personalized practice, each
              individual or couple is asked to provide their birth time, date,
              and place. This information allows me to generate individual
              astrological charts and, for couples, a synastry chart, which form
              the energetic and relational foundation of the session. The
              practice is therefore not purely intuitive—it is intentionally
              structured around your unique energetic blueprint and relationship
              dynamics.
              <br />
              <br />
              Based on these charts, each session is carefully designed to
              support your specific needs, patterns, and potential for growth.
              During the session, I may draw upon the following tantric tools:
              <br />
              <ul className='list-disc list-inside mt-4 space-y-2'>
                <li>Breathwork</li>
                <li>Conscious speech and intention</li>
                <li>Mindful, consent-based touch</li>
                <li>Sound and vibration</li>
                <li>Aromas (smell)</li>
                <li>Taste awareness</li>
                <li>Sight and eye-gazing practices</li>
              </ul>
              <br />
              <br />
              These modalities work together to deepen self-love, restore
              energetic flow, and support embodied presence.
              <br />
              <br />
              While the structure of the practice is chart-based, I remain
              attuned to your current emotional state, energy, and vibration.
              Intuition is used as a responsive tool—to adapt pacing, emphasis,
              or specific techniques in real time—ensuring the experience
              remains supportive, aligned, and alive in the present moment.
              <br />
              <br />
              Each session is uniquely tailored, with a focus on:
              <br />
              <ul className='list-disc list-inside mt-4 space-y-2'>
                <li>Conscious communication</li>
                <li>Trust and emotional safety</li>
                <li>Liberation of blocked or stagnant energy</li>
                <li>Harmonizing individual and relational dynamics</li>
              </ul>
              <br />
              <br />
              <br />
              <p className='text-center'>
                This work offers an opportunity to access new levels of
                connection, harmony, and intimacy—within yourself and, when
                shared, with one another.
              </p>
            </p>
          </FadeInSection>

          {/* Pricing and CTA Section */}
          <FadeInSection className='mt-16 text-center'>
            <h3 className='faustina-title text-4xl lg:text-5xl font-normal mb-8'>
              Tantric Sessions
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
              <button
                onClick={() => setIsModalOpen(true)}
                className='inline-block bg-black text-xl text-white border border-gray-300 py-4 px-10 rounded-full transition-opacity duration-200 hover:opacity-60 max-w-xs text-center'
              >
                Book Now
              </button>
            </div>
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

            <h3 className='faustina-title text-3xl mb-2'>Tantric Session</h3>
            <p className='text-gray-600 mb-8 font-light'>
              Choose your preferred payment method
            </p>

            {/* PayPal Option */}
            <a
              href={PAYPAL_TANTRIC}
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
                src='/venmo_qr_tantric.png'
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
