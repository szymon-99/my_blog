import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getCategories, getCategoryPosts } from '../../utils/mdx'
import { ParsedUrlQuery } from 'querystring'
import { PostMetadata, TCategory } from '../../types'

interface ICategoryParams extends ParsedUrlQuery {
  category: TCategory
}

interface CategoryPageProps {
  posts: PostMetadata[]
}

const CategoryPage: NextPage<CategoryPageProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <>
            <h1>{post.title}</h1>
            <p>
              read time: {post.readTime}, date: {post.date}
            </p>
            <h3>{post.category}</h3>
          </>
        )
      })}
    </div>
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
    },
  }
}
