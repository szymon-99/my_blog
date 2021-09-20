import { GetStaticProps, NextPage } from 'next'
import { PostMetadata, TCategory } from 'types'
import { getAllPosts, getCategories } from 'utils/mdx'
import { PageTitle, Categories, Posts } from 'components'

interface BlogPageProps {
  posts: { data: PostMetadata; slug: string }[]
  categories: TCategory[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts, categories }) => {
  return (
    <main>
      <PageTitle title='All Posts' />

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
