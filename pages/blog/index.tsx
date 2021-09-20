import { GetStaticProps, NextPage } from 'next'
import { PostMetadata, TCategory } from 'types'
import { getAllPosts, getCategories } from 'utils/mdx'
import Link from 'next/link'
import Posts from 'components/Posts'
import Categories from 'components/Categories'

interface BlogPageProps {
  posts: { data: PostMetadata; slug: string }[]
  categories: TCategory[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts, categories }) => {
  return (
    <>
      <h1 className='section-title'>All Posts</h1>

      <Posts posts={posts} />

      <Categories categories={categories} />
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
