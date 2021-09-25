import Link from 'next/link'
import { FC } from 'react'

interface CustomLinkProps {
  href: string
  contained?: true
}

const CustomLink: FC<CustomLinkProps> = ({ href, children, contained }) => {
  return (
    <Link href={href}>
      <a
        className={`btn  border-gray-900 border-2 ${
          contained
            ? 'bg-gray-900 text-gray-200 hover:bg-opacity-80'
            : 'text-gray-900 hover:text-gray-200 hover:bg-gray-900'
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

export default CustomLink
