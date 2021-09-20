import { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />

      <div className='page-width pt-16 md:pt-20'>{children}</div>

      <Footer />
    </>
  )
}

export default Layout
