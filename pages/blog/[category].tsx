import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getCategories, getCategoryPosts } from '../../utils/mdx'
import { ParsedUrlQuery } from 'querystring'
import { IPost, TCategory } from '../../types'
import Posts from 'components/Posts'

interface ICategoryParams extends ParsedUrlQuery {
  category: TCategory
}

interface CategoryPageProps {
  posts: IPost[]
  category: TCategory
}

const CategoryPage: NextPage<CategoryPageProps> = ({ posts, category }) => {
  return (
    <main>
      <div className='flex justify-center section'>
        <h1 className='  gradient-text text-4xl md:text-5xl'>{category}</h1>
      </div>
      <Posts posts={posts} />
    </main>
  )
}

export default CategoryPage

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getCategories().map((category) => ({ params: { category } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { category } = params as ICategoryParams
  const posts = getCategoryPosts(category)

  return {
    props: {
      posts,
      category,
    },
  }
}
