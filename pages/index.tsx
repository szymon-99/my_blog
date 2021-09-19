import type { NextPage, GetStaticProps } from 'next'
import { getAllPosts } from 'utils/mdx'
import Link from 'next/link'
import WelcomeSection from 'components/WelcomeSection'
import { IPost, PostMetadata } from 'types'
import Posts from 'components/Posts'

interface IHomeProps {
  posts: IPost[]
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <>
      <WelcomeSection />

      <Posts posts={posts.slice(0, 6)} />

      <div className='flex justify-center mt-16'>
        <Link href='/blog'>
          <a className=' transition px-4 py-2 rounded-md border-2 bg-purple-900 text-white hover:bg-opacity-90 hover:scale-105 transform '>
            Go to all blog posts
          </a>
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
