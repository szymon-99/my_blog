import { FC } from 'react'

const H2: FC = ({ children }) => {
  return (
    <h2 className=' my-8 text-2xl md:text-3xl font-bold text-black'>
      {children}
    </h2>
  )
}
const H3: FC = ({ children }) => {
  return (
    <h3 className=' my-6 text-xl md:text-2xl font-bold text-black'>
      {children}
    </h3>
  )
}
const H4: FC = ({ children }) => {
  return (
    <h4 className=' my-6 text-lg md:text-xl font-bold text-black'>
      {children}
    </h4>
  )
}

export { H2, H3, H4 }
