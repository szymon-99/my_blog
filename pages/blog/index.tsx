import { GetStaticProps, NextPage } from 'next'
import { PostMetadata, TCategory } from 'types'
import { getAllPosts, getCategories } from 'utils/mdx'
import Link from 'next/link'
import Posts from 'components/Posts'

interface BlogPageProps {
  posts: { data: PostMetadata; slug: string }[]
  categories: TCategory[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts, categories }) => {
  return (
    <>
      <Posts posts={posts} />
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
