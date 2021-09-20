import { FC } from 'react'
import { IPost } from 'types'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/router'
import CategoryLabel from './CategoryLabel'

interface PostProps {
  post: IPost
}

const Post: FC<PostProps> = ({ post }) => {
  const { data, slug } = post

  const router = useRouter()
  return (
    <article
      key={data.title}
      className=' shadow-md rounded-md cursor-pointer transition group overflow-hidden hover:shadow-lg'
      onClick={() => router.push('/' + slug)}
    >
      <header className='h-56 md:h-48 relative '>
        <Image src={data.image} layout='fill' className='object-cover' />
      </header>
      <div className='p-6 grid gap-4'>
        <div className='flex justify-between'>
          <h4 className=' font-medium text-2xl lg:text-3xl '>{data.title}</h4>
          <p className='text-black text-opacity-80 text-sm'>{data.date}</p>
        </div>
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
}

export default Post
