import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

const Prism = ({ children }) => {
  const { className, children: code } = children.props
  const language = className.split('-')[1]
  const formattedCode = code.trim()

  return (
    <Highlight
      {...defaultProps}
      language={language}
      theme={theme}
      code={formattedCode}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className='p-4 relative block my-6 rounded-md shadow md:p-8'
          style={style}
        >
          <span className='absolute right-0 text-xs top-0 bg-purple-900 text-white rounded-bl-lg p-1 uppercase '>
            {language}
          </span>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Prism
