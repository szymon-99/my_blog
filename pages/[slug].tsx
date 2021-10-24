import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllPosts, getSinglePost } from 'utils/mdx'
import { ParsedUrlQuery } from 'querystring'
import { PostMetadata } from 'types'
import React from 'react'
import { CustomLink, PageTitle } from 'components'
import { mdxComponents } from 'utils/constants'
import { getMDXComponent } from 'mdx-bundler/client'

interface IPostParams extends ParsedUrlQuery {
  slug: string
}

interface SinglePostProps {
  data: PostMetadata
  code: string
}

const SinglePost: NextPage<SinglePostProps> = ({ data, code }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <PageTitle title={data.title} category={data.category} />
      <main className=' max-w-3xl mx-auto section'>
        <Component components={mdxComponents} />
        <div className='mt-12 md:mt-18'>
          <CustomLink href='/blog'>Back to posts</CustomLink>
        </div>
      </main>
    </>
  )
}

export default SinglePost

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPosts().map((post) => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IPostParams

  const { data, code } = await getSinglePost(slug)

  return {
    props: {
      data,
      code,
    },
  }
}
