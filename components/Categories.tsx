import { FC } from 'react'
import { TCategory } from 'types'
import Link from 'next/link'

interface CategoriesProps {
  categories: TCategory[]
}

const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className='flex flex-wrap  gap-4'>
      {categories.map((category) => {
        return (
          <Link href={'/blog/' + category}>
            <a className=' btn text-purple-900 border-2 border-purple-900 hover:border-opacity-10 hover:bg-opacity-10 hover:bg-purple-900 hover:scale-100'>
              {category}
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default Categories
