import { FC } from 'react'

const Blockquote: FC = ({ children }) => {
  return (
    <blockquote className='p-4  border-l-4 block shadow my-6 bg-gray-100 border-purple-700 rounded-md'>
      {children}
    </blockquote>
  )
}

export default Blockquote
