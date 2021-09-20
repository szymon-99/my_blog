import type { NextPage, GetStaticProps } from 'next'
import { getAllPosts } from 'utils/mdx'
import Link from 'next/link'
import WelcomeSection from 'components/WelcomeSection'
import { IPost } from 'types'
import Posts from 'components/Posts'

interface IHomeProps {
  posts: IPost[]
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <>
      <WelcomeSection />

      <h3 className='section text-2xl md:text-3xl text-center font-bold'>
        Latest Posts
      </h3>
      <main>
        <Posts posts={posts.slice(0, 6)} />
      </main>

      <div className='flex justify-center mt-16'>
        <Link href='/blog'>
          <a className=' btn bg-purple-900 text-white'>Go to all blog posts</a>
        </Link>
      </div>
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
