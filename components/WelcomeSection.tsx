import Link from 'next/link'

const WelcomeSection = () => {
  return (
    <section className='-mt-16 grid gap-4 grid-rows-2 lg:grid-rows-1  lg:grid-cols-12 min-h-screen md:-mt-20'>
      <div className='text-center self-end  flex flex-col justify-center lg:self-auto lg:col-span-7 lg:text-left '>
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
        <div className=' mt-8 flex justify-center lg:justify-start md:mt-6'>
          <Link href='/blog'>
            <a className=' btn-primary'>Start Learning now</a>
          </Link>
        </div>
      </div>
      <div className='   flex items-center justify-center  lg:col-span-5 lg:h-auto '>
        <img
          className=' w-4/5 max-w-sm  lg:w-full lg:max-w-none'
          src='/coder.svg'
          alt='coding guy'
        />
      </div>
    </section>
  )
}

export default WelcomeSection
