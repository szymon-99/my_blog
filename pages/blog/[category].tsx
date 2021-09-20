import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getCategories, getCategoryPosts } from '../../utils/mdx'
import { ParsedUrlQuery } from 'querystring'
import { IPost, PostMetadata, TCategory } from '../../types'
import Posts from 'components/Posts'

interface ICategoryParams extends ParsedUrlQuery {
  category: TCategory
}

interface CategoryPageProps {
  posts: IPost[]
}

const CategoryPage: NextPage<CategoryPageProps> = ({ posts }) => {
  return <Posts posts={posts} />
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
    },
  }
}
