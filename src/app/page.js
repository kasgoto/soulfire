import Image from "next/image"

export default function Home() {
  return (
    <div className='w-full font-[var(--font-imperial-script)]'>
      {/* Hero Section with Background Image */}
      <div className='relative h-[100vh] w-full '>
        <Image
          src='/homepage.jpg'
          alt='Background'
          fill
          quality={100}
          objectFit='cover'
          objectPosition='50% 25%'
          sizes='100vw'
          className='absolute inset-0'
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
            {/* <div className='ml-auto w-[30%] max-w-[350px] items-center hidden md:flex'>
              <Image
                src='/logo.png'
                alt='Logo'
                width={350}
                height={350}
                sizes='30vw'
                className='w-full h-auto drop-shadow-[0_12px_48px_rgba(0,0,0,0.95)]'
                priority
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* Regular Content Section */}
      <div className='bg-white text-black px-8 py-24 lg:px-32'>
        <h2 className='text-4xl lg:text-5xl font-bold text-center mb-16'>
          The Art of Becoming
        </h2>
        {/* Corrected Layout: Centered container with max-width */}
        <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-8 max-w-7xl mx-auto'>
          <Image
            src='/homepageintro.jpeg'
            alt='introduction image'
            width={400}
            height={200}
            className='w-full md:w-3/8 h-auto mb-8 md:mb-0 rounded-lg shadow-lg'
            priority
          />
          <div className='flex flex-col gap-8 md:w-5/8'>
            <p className='text-2xl md:text-2xl lg:text-2xl xl:text-3xl'>
              The journey back to your eternal flame begins here. <br /> <br />
              SoulFire Ceremony is the living dance of life itself, a continuous
              practice of restoring harmony to every element of your existence.
              <br /> <br />
              It is the art of awakening the sacred inner fire—the luminous
              current of Kundalini energy—to guide you toward a deeper mastery
              of consciousness.
            </p>
          </div>
        </div>
      </div>
      <p className='text-lg mb-8'>
        Through our gentle and profound practices, we offer you a path home.
        Explore a personalized <strong>energy analysis</strong> to understand
        your unique flow, embrace the transformative power of{" "}
        <strong>Kundalini</strong>, or find deep healing and connection with our
        specialized <strong>tantric massages</strong>.
      </p>
      <p className='text-lg'>
        This is a ceremony of remembrance, a humble service to guide you back to
        who you are—your home.
      </p>
    </div>
  )
}
