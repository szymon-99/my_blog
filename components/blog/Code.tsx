import { FC } from 'react'

const Code: FC = ({ children }) => {
  return (
    <code className='p-4 inline-block bg-gray-100  rounded-md shadow'>
      {children}
    </code>
  )
}

export default Code
