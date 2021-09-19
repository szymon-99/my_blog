import { FC } from 'react'

interface NavToggleProps {
  isOpen: boolean
  toggle: () => void
}

const NavToggle: FC<NavToggleProps> = ({ isOpen, toggle }) => {
  return (
    <button
      className='p-3 rounded-full hover:bg-gray-100   md:hidden'
      onClick={toggle}
    >
      <div className='flex flex-col justify-center gap-1 w-6 h-6'>
        <span
          className={`bg-black h-0.5 w-6 rounded-md transition transform ${
            isOpen && 'rotate-45 translate-y-full'
          }`}
        ></span>
        <span
          className={`bg-black h-0.5 w-6 rounded-md transition transform ${
            isOpen && '-rotate-45 -translate-y-full'
          }`}
        ></span>
      </div>
    </button>
  )
}

export default NavToggle
