import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { TCategory, PostMetadata } from 'types'

const POSTS_PATH = path.join(process.cwd(), 'posts')

const getFrontmatterData = (fileName: string) => {
  const source = fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf-8')

  const { data, content } = matter(source)

  return { data: data as PostMetadata, content }
}

export const getAllPosts = () => {
  const files = fs.readdirSync(POSTS_PATH)

  const postsMeta = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '')

    const { data } = getFrontmatterData(fileName)

    return { data, slug }
  })

  return postsMeta
}

export const getSinglePost = async (slug: string) => {
  const { data, content } = getFrontmatterData(slug + '.mdx')

  const { compiledSource } = await serialize(content)

  return { data, compiledSource }
}

export const getCategories = () => {
  const files = fs.readdirSync(POSTS_PATH)

  const categories = files.map((filename) => {
    const { data } = getFrontmatterData(filename)

    return data.category
  })

  return [...new Set(categories)]
}

export const getCategoryPosts = (category: TCategory) => {
  const files = fs.readdirSync(POSTS_PATH)

  const posts = getAllPosts()

  return posts.filter((post) => post.data.category === category)
}
