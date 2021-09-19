import { GetStaticProps, NextPage } from 'next'
import { PostMetadata, TCategory } from 'types'
import { getAllPosts, getCategories } from 'utils/mdx'
import Link from 'next/link'

interface BlogPageProps {
  posts: { data: PostMetadata; slug: string }[]
  categories: TCategory[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts, categories }) => {
  return (
    <>
      <div>
        {posts.map((post) => {
          const { title, description } = post.data
          return (
            <div key={post.slug}>
              <h1>{title}</h1>
              <h3>{description}</h3>
              <Link href={`/${post.slug}`}>Read more</Link>
            </div>
          )
        })}
      </div>
      <div style={{ marginTop: '200px' }}>
        {categories.map((category) => {
          return <Link href={`/blog/${category}`}>{category}</Link>
        })}
      </div>
    </>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()
  const categories = getCategories()

  return {
    props: {
      posts,
      categories,
    },
  }
}
