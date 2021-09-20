import Link from 'next/link'

const WelcomeSection = () => {
  return (
    <section className=' grid gap-4 grid-rows-2 md:grid-rows-1  md:grid-cols-12 md:min-h-screen md:-mt-20'>
      <div className='text-center  flex flex-col justify-center md:col-span-7 md:text-left '>
        <h1 className='text-4xl md:text-6xl'>
          Welcome to
          <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-purple-500 to-purple-900'>
            {' '}
            DEV Blog
          </span>
        </h1>
        <h2 className=' text-xl md:text-2xl text-black font-light text-opacity-40'>
          A place to learn basics of web development
        </h2>
        <div className=' mt-8 flex justify-center md:justify-start md:mt-6'>
          <Link href='/blog'>
            <a className=' btn text-purple-900 border-2 border-purple-900 hover:border-opacity-10 hover:bg-opacity-10 hover:bg-purple-900'>
              Start Learning now
            </a>
          </Link>
        </div>
      </div>
      <div className='   flex items-center justify-center  md:col-span-5 md:h-auto '>
        <img
          className=' w-4/5 max-w-sm  md:w-full md:max-w-none'
          src='/coder.svg'
          alt='coding guy'
        />
      </div>
    </section>
  )
}

export default WelcomeSection
