import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getCategories, getCategoryPosts } from '../../utils/mdx'
import { ParsedUrlQuery } from 'querystring'
import { IPost, TCategory } from '../../types'
import { CustomLink, PageTitle, Posts } from 'components'

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
      <PageTitle title={category} category={category} />

      <Posts posts={posts} />

      <div className='mt-16 text-center md:text-left'>
        <CustomLink href='/blog'>Back to Posts</CustomLink>
      </div>
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
