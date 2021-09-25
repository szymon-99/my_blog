import { FC } from 'react'
import { IPost } from 'types'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/router'
import CategoryLabel from './CategoryLabel'

interface PostsProps {
  posts: IPost[]
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const router = useRouter()

  return (
    <section className=' section gap-16 grid md:gap-12 md:grid-cols-2 '>
      {posts.map((post, index) => {
        const { data, slug } = post

        return (
          <article
            key={index}
            className=' shadow-md bg-gray-100 rounded-lg cursor-pointer transition group  hover:shadow-lg'
            onClick={() => router.push('/' + slug)}
          >
            <div className='p-6 grid gap-6 lg:p-10 lg:gap-8'>
              <h4 className='font-medium text-2xl lg:text-4xl '>
                {data.title}
              </h4>

              <p className='  text-black text-opacity-80'>{data.description}</p>
              <div className=' flex justify-between'>
                <Link href={'/' + slug}>
                  <a className=' text-black  flex items-center group-hover:text-purple-900'>
                    Read More
                    <span className='opacity-0 font-bold text-xl ml-2 group-hover:opacity-100 transition'>
                      <BsArrowRight />
                    </span>
                  </a>
                </Link>

                <CategoryLabel category={data.category} />
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Posts
