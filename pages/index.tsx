import type { NextPage, GetStaticProps } from 'next'
import { getAllPosts } from 'utils/mdx'
import Link from 'next/link'

interface IHomeProps {
  posts: {
    data: {
      [key: string]: any
    }
    slug: string
  }[]
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <>
      <div className='min-h-screen'>
        {posts.map((post) => {
          return (
            <div key={post.slug}>
              <h1 className='text-2xl font-bold'>{post.data.title}</h1>
              <Link href={'/' + post.slug}>{post.slug}</Link>
            </div>
          )
        })}
      </div>
      <Link href='/blog'>Go to all blog posts</Link>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
