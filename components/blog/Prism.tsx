import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import { FC } from 'react'

interface MDXtag {
  props: {
    className: string
    children: string
  }
}

const Prism: FC = ({ children }) => {
  const preProps = children as MDXtag
  const { className, children: code } = preProps.props
  const language = className.split('-')[1]
  const formattedCode = code.trim()

  return (
    <Highlight
      {...defaultProps}
      language={language as Language}
      theme={theme}
      code={formattedCode}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className='p-4 relative block my-6 rounded-md shadow md:p-8'
          style={style}
        >
          <span className='absolute right-0 text-xs top-0 bg-purple-600 text-white rounded-bl-lg p-1 lowercase '>
            {language}
          </span>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={i} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Prism
