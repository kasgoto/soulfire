import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      <div className='bg-white text-black px-8 py-24 lg:px-32 mt-32'>
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center'>
          <Image
            src='/contact.jpg'
            alt='Contact Us'
            width={800}
            height={800}
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,...'
            priority
            className='w-full md:w-7/16 h-auto rounded-lg shadow-lg'
          />
          <div className='w-full md:w-9/16 flex flex-col items-center text-center gap-12'>
            <h2 className='faustina-title text-4xl lg:text-5xl font-normal'>
              We&apos;d love to hear from you.
            </h2>
            <p className='text-xl md:text-2xl lg:text-2xl font-extralight'>
              Whether you have a question, a comment, or just want to connect,
              feel free to reach out to us through any of the channels below.
            </p>

            <div className='flex flex-col gap-8 mt-4'>
              {/* Instagram Link */}
              <a
                href='https://www.instagram.com/soulfireceremony'
                aria-label='Instagram'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 text-2xl hover:opacity-70 transition-opacity'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  className='fill-current'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
                <span>soulfireceremony</span>
              </a>

              {/* Facebook Link */}
              <a
                href='https://www.facebook.com/soulfireceremony'
                aria-label='Facebook'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 text-2xl hover:opacity-70 transition-opacity'
              >
                <svg
                  className='w-8 h-8 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
                </svg>
                <span>Soulfire Ceremony</span>
              </a>

              {/* Email Link */}
              <a
                href='mailto:soulfireceremony@gmail.com'
                aria-label='Email'
                className='flex items-center gap-4 text-2xl hover:opacity-70 transition-opacity'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
