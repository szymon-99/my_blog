import { FC } from 'react'
import { TCategory } from 'types'

interface PageTitleProps {
  title: string
  category?: TCategory
}

const PageTitle: FC<PageTitleProps> = ({ title, category }) => {
  const palette = {
    Gatsby: 'purple',
    TypeScript: 'blue',
    CSS: 'indigo',
    Node: 'green',
    JavaScript: 'yellow',
    React: 'blue',
  }

  if (!category) {
    return (
      <div className='flex justify-center section'>
        <h1 className='text-4xl md:text-5xl gradient-text from-black to-purple-900'>
          {title}
        </h1>
      </div>
    )
  }

  return (
    <div className='flex justify-center section'>
      <h1
        className={` text-4xl md:text-5xl gradient-text from-${palette[category]}-400 to-${palette[category]}-900`}
      >
        {title}
      </h1>
    </div>
  )
}

export default PageTitle
