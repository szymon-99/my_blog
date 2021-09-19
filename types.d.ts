export type TCategory =
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'Node'
  | 'React'
  | 'Gatsby'

export interface PostMetadata {
  title: string
  readTime: number
  category: TCategory
  date: string
  description: string
  image: string
}

export interface IPost {
  data: PostMetadata
  slug: string
}
