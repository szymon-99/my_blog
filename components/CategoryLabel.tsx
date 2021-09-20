import { FC } from 'react'
import { TCategory } from 'types'

interface CategoryLabelProps {
  category: TCategory
}

const CategoryLabel: FC<CategoryLabelProps> = ({ category }) => {
  return (
    <div
      className={` px-3 py-1 rounded shadow text-xs text-white ${
        category === 'TypeScript'
          ? 'bg-blue-700'
          : category === 'JavaScript'
          ? ' bg-yellow-500'
          : category === 'Gatsby'
          ? 'bg-purple-800 '
          : category === 'CSS'
          ? 'bg-blue-600 '
          : category === 'Node'
          ? 'bg-green-700'
          : category === 'React'
          ? 'bg-blue-500 '
          : ''
      }`}
    >
      {category}
    </div>
  )
}

export default CategoryLabel
