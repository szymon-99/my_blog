import { FC } from 'react'
import Header from './Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* main content */}
      <main className='page-width pt-16 md:pt-20 '>{children}</main>
      {/* gooter */}
      <footer>All rights resesrved</footer>
    </>
  )
}

export default Layout
