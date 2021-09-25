import { FC } from 'react'
import { TCategory } from 'types'

interface PageTitleProps {
  title: string
  category?: TCategory
}

const PageTitle: FC<PageTitleProps> = ({ title, category }) => {
  const palette = {
    Gatsby: 'from-purple-400 to-purple-900',
    TypeScript: 'from-blue-400 to-blue-900',
    CSS: 'from-indigo-400 to-indigo-900',
    Node: 'from-green-400 to-green-900',
    JavaScript: 'from-yellow-400 to-yellow-900',
    React: 'from-blue-400 to-blue-900',
  }

  if (!category) {
    return (
      <div className='flex justify-center section'>
        <h1 className='text-5xl md:text-6xl gradient-text from-gray-800 to-purple-900'>
          {title}
        </h1>
      </div>
    )
  }

  return (
    <div className='flex justify-center section'>
      <h1
        className={` text-5xl md:text-6xl gradient-text ${palette[category]}`}
      >
        {title}
      </h1>
    </div>
  )
}

export default PageTitle
