import type { NextPage, GetStaticProps } from 'next'
import { getAllPosts } from 'utils/mdx'
import { WelcomeSection, Posts, CustomLink } from 'components'
import { IPost } from 'types'

interface IHomeProps {
  posts: IPost[]
}

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <>
      <WelcomeSection />

      <div className='flex justify-center section'>
        <h3 className='font-bold text-3xl md:text-4xl  relative text-gray-900'>
          LatestPosts
          <span className='absolute h-1 bg-purple-700 -bottom-1/4 left-0 w-1/5 rounded-md'></span>
        </h3>
      </div>
      <main>
        <Posts posts={posts} />
      </main>

      <div className='flex justify-center mt-16'>
        <CustomLink href='/blog'>All Posts</CustomLink>
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().slice(0, 6)

  return {
    props: {
      posts,
    },
  }
}
