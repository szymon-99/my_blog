import { CustomLink, PageTitle } from 'components'

const success = () => {
  return (
    <main className='flex justify-center items-center flex-col space-y-12'>
      <PageTitle title='Success' />
      <div className='text-center max-w-lg'>
        <h2 className='text-2xl md:text-3xl'>Thank you for your message</h2>
        <p className='text-gray-800 text-opacity-80'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          voluptate praesentium ipsum labore veritatis, nisi, fugit optio, rerum
          pariatur sunt voluptatum minus eum voluptatem velit!
        </p>
      </div>
      <CustomLink href='/'>Back to home page</CustomLink>
    </main>
  )
}

export default success
