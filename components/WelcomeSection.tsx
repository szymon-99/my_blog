const WelcomeSection = () => {
  return (
    <section className=' mt-16 grid gap-4 md:h-96 md:grid-cols-12 md:mt-24'>
      <div className='text-center  md:col-span-7 md:text-left md:flex md:flex-col md:justify-center'>
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
      </div>
      <div className=' h-48 sm:h-56 flex items-center  justify-center md:col-span-5 md:h-auto'>
        <img className=' w-full h-full' src='/coder.svg' alt='coding guy' />
      </div>
    </section>
  )
}

export default WelcomeSection
