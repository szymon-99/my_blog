import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  Code,
  Headings,
  PrismSetup,
  Blockquote,
  Paragraph,
  Anchor,
} from 'components/blog'

export const mdxComponents = {
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  pre: PrismSetup,
  inlineCode: Code,
  blockquote: Blockquote,
  p: Paragraph,
  a: Anchor,
}

interface NavLink {
  label: string
  href: string
}

interface FooterLink {
  href: string
  icon: JSX.Element
}

export const navLinks: NavLink[] = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'blog',
    href: '/blog',
  },
  {
    label: 'contact',
    href: '/contact',
  },
]

export const footerLinks: FooterLink[] = [
  { href: 'https://www.linkedin.com/', icon: <FaLinkedin /> },
  { href: 'https://github.com/szymon-99', icon: <FaGithub /> },
]
