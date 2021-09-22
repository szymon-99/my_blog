import { PageTitle } from 'components'
import Link from 'next/link'

const success = () => {
  return (
    <main className='flex justify-center items-center flex-col space-y-12'>
      <PageTitle title='Success' />
      <div className='text-center'>
        <h2 className='text-2xl md:text-3xl'>Thank you for your message</h2>
        <p className='text-gray-800 text-opacity-80'>
          I will definately write back in two days or even faster.
        </p>
      </div>
      <Link href='/'>
        <a className='btn bg-purple-900 text-white'>Go back to home Page</a>
      </Link>
    </main>
  )
}

export default success
