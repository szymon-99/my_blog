import { FC } from 'react'

const Anchor: FC = ({ children, ...props }) => {
  return (
    <a
      {...props}
      target='_blank'
      className='block text-base underline text-black font-medium'
    >
      {children}
    </a>
  )
}

export default Anchor
