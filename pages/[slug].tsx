import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllPosts, getSinglePost } from 'utils/mdx'
import { ParsedUrlQuery } from 'querystring'
import { PostMetadata } from 'types'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import React from 'react'

interface IPostParams extends ParsedUrlQuery {
  slug: string
}

interface SinglePostProps {
  data: PostMetadata
  compiledSource: string
}

const SinglePost: NextPage<SinglePostProps> = ({ data, compiledSource }) => {
  return (
    <div>
      <MDXRemote compiledSource={compiledSource}></MDXRemote>
      <Link href='/'>Back to home page</Link>
    </div>
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

  const { data, compiledSource } = await getSinglePost(slug)

  return {
    props: {
      data,
      compiledSource,
    },
  }
}
