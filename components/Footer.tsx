import Link from 'next/link'
import { GiMoebiusTriangle } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer className='page-width grid'>
      <div className=''>
        <p>
          <span className=''>
            <GiMoebiusTriangle />
          </span>
          Dev Blog is a place for beginner web developers to
        </p>
      </div>
    </footer>
  )
}

export default Footer
