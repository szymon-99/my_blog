import { GetStaticProps, NextPage } from 'next'
import { PostMetadata, TCategory } from 'types'
import { getAllPosts, getCategories } from 'utils/mdx'
import Posts from 'components/Posts'
import Categories from 'components/Categories'

interface BlogPageProps {
  posts: { data: PostMetadata; slug: string }[]
  categories: TCategory[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts, categories }) => {
  return (
    <main>
      <div className='flex justify-center section'>
        <h1 className='text-center gradient-text text-4xl md:text-5xl'>
          All Posts
        </h1>
      </div>

      <Categories categories={categories} />

      <Posts posts={posts} />
    </main>
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
