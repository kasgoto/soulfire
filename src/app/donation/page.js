import Image from "next/image"
import staticLogoPaypal from "../../../public/paypal_logo.svg"
import staticLogoVenmo from "../../../public/venmo_qr.png"
import Link from "next/link"
import { PAYPAL_ME_LINK, VENMO_APP_LINK, VENMO_HANDLE } from "../paymentlinks"

export default function DonationSection() {
  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      <div className='bg-gray-50 text-black px-8 pt-46 pb-20 lg:px-32 h-full'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Header */}
          <h2 className='faustina-title text-5xl lg:text-6xl font-normal mb-6 text-[#fc4052]'>
            Support My Mission
          </h2>

          {/* Introductory Text */}
          <p className='text-xl md:text-2xl font-extralight mb-12'>
            Your generosity helps me continue sharing the healing energy of the
            Soulfire Ceremony with the world. Every contribution, big or small,
            supports my ongoing work and community outreach.
          </p>

          {/* Donation Options Container */}
          <div className='flex flex-col md:flex-row justify-center items-stretch gap-8'>
            {/* PayPal Card */}
            <div className='flex flex-col items-center p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2'>
              <Image
                src={staticLogoPaypal}
                alt='PayPal Logo'
                width={125}
                height={150}
                priority={false}
                className='mb-4'
              />
              <p className='text-lg mb-6'>
                Use PayPal for a quick and secure transfer.
              </p>
              <Link
                href={`${PAYPAL_ME_LINK}`}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto bg-[#fc4052] text-white font-semibold py-3 px-8 rounded-full transition-opacity duration-200 hover:opacity-90 shadow-md'
              >
                Donate via PayPal
              </Link>
            </div>

            {/* Venmo Card */}
            <div className='flex flex-col items-center p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2'>
              <Image
                src={staticLogoVenmo}
                placeholder='blur'
                alt='Venmo QR'
                width={125}
                height={125}
                priority={false}
                className='mb-4'
              />
              <p className='text-lg mb-6'>
                Send your contribution directly using your Venmo app.
              </p>
              <p className='mt-2 text-sm text-gray-600 pb-4'>
                Venmo Handle: @{VENMO_HANDLE}
              </p>
              <Link
                // The URL scheme 'venmo://' attempts to open the Venmo app on mobile
                href={`${VENMO_APP_LINK}`}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto bg-[#fc4052] text-white font-semibold py-3 px-8 rounded-full transition-opacity duration-200 hover:opacity-90 shadow-md'
              >
                Donate via Venmo
              </Link>
            </div>
          </div>

          {/* Optional: Alternative Contact/Gratitude */}
          <p className='text-lg mt-12 text-gray-700'>
            I am deeply grateful for your contributions and belief in my work.
            Thank you!
          </p>
        </div>
      </div>
    </div>
  )
}
