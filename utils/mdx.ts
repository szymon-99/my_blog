import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
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

  return postsMeta.sort((a, b) => {
    return Date.parse(b.data.date) - Date.parse(a.data.date)
  })
}

export const getSinglePost = async (slug: string) => {
  const { data, content } = getFrontmatterData(slug + '.mdx')

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const { code } = await bundleMDX(content, {
    cwd: process.cwd(),
    esbuildOptions(options) {
      options.platform = 'node'
      return options
    },
  })

  return { data, code }
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
  const posts = getAllPosts()

  return posts.filter((post) => post.data.category === category)
}
