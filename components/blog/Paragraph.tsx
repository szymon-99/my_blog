import { FC } from 'react'

const Paragraph: FC = ({ children }) => {
  return <p className='text-base text-black text-opacity-80 my-6'>{children}</p>
}

export default Paragraph
