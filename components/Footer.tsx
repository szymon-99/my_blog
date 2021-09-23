import Link from 'next/link'
import { GiMoebiusTriangle } from 'react-icons/gi'
import { footerLinks } from 'utils/constants'

const Footer = () => {
  return (
    <footer className='page-width grid section py-8 relative gap-8 md:grid-cols-2'>
      {/* fake border */}
      <span className='absolute top-0 w-full h-0.5 bg-purple-900 rounded-md md:w-1/12'></span>

      <div className='text-center grid gap-8 px-8 md:text-left md:px-0'>
        <Link href='/'>
          <a className='text-2xl text-black '>
            <span className='inline-flex items-center font-bold mr-1'>
              DEV
              <GiMoebiusTriangle />
            </span>
            blog
          </a>
        </Link>

        <p className='text-black text-opacity-60'>
          DEV blog is a place created for upcoming frontend developers to help
          them build their own projects by providing a valuable lessons about
          different web technologies
        </p>

        <p>Created by Szymon Prusak</p>
      </div>
      <div className='flex flex-col space-y-6 items-center md:justify-between md:items-end'>
        <Link href='/contact'>
          <a className='btn-primary  '>Contact</a>
        </Link>
        <div className='flex space-x-6'>
          {footerLinks.map((link) => {
            return (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                className='text-2xl text-black transition transform hover:text-purple-900 hover:scale-105'
              >
                {link.icon}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
