import { FC } from 'react'
import { IPost } from 'types'
import Image from 'next/image'
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
    <section className=' section gap-16 grid sm:gap-12 sm:grid-cols-2 xl:grid-cols-3'>
      {posts.map((post, index) => {
        const { data, slug } = post

        return (
          <article
            key={index}
            className=' shadow-md rounded-md cursor-pointer transition group overflow-hidden hover:shadow-lg'
            onClick={() => router.push('/' + slug)}
          >
            <header className='pt-ratio relative '>
              <Image src={data.image} layout='fill' className='object-cover' />
            </header>
            <div className='p-6 grid gap-4'>
              <h4 className=' font-medium text-2xl lg:text-3xl '>
                {data.title}
              </h4>
              <p className='  text-black text-opacity-80'>{data.description}</p>
              <div className=' flex justify-between'>
                <Link href={'/' + slug}>
                  <a className=' text-black flex items-center group-hover:text-purple-900'>
                    Read More
                    <span className='opacity-0 text-xl ml-2 group-hover:opacity-100 transition'>
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
