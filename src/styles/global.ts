import { globalCss, styled } from '.'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    border: `none`,
    boxSizing: `border-box`,

    '*::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },

    '*::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },

    '*::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '$full',
    },

    '*::-webkit-scrollbar-thumb:hover': {
      background: '#999',
    },
  },
  body: {
    background: `$background`,
    color: `$black`,
    fontFamily: `$default`,
  },
  'h1, h2, h3, h4': {
    color: `$black`,
  },
  'button, a, li': {
    cursor: `pointer`,
  },
  article: {
    maxWidth: `$1120`,
    py: `$72`,
    margin: `0 auto`,
  },
  a: {
    textDecoration: `none`,
    fontSize: `$20`,
    fontFamily: `$subtitle`,
    transition: `color .2s`,
    color: `$black`,
    wordBreak: 'break-word',
    '&:hover': {
      color: `$backgroundYellow !important`,
    },
  },
  'p, li': {
    px: `$12`,
  },
})

export const StyledMain = styled(`main`, {
  display: `flex`,
  alignItems: `center`,
  flexFlow: `column nowrap`,
  minHeight: `calc(100vh - 400px)`,
  paddingBottom: `$105`,
})

export const StyledTitle = styled(`h1`, {
  textAlign: `center`,
  wordBreak: 'break-word',

  px: `$20`,
  '@md': {
    fontSize: `$32 !important`,
    px: `$12`,
  },

  variants: {
    type: {
      title: {
        fontFamily: `$title`,
        fontWeight: `700`,
        fontSize: `$52`,
        lineHeight: `$space$52`,
      },
      logo: {
        fontFamily: `$logo`,
        fontWeight: `400`,
        fontSize: `$44`,
        lineHeight: `$space$105`,
      },
      mobile: {
        fontSize: `$32`,
        lineHeight: `$space$44`,
      },
    },
  },

  defaultVariants: {
    type: `title`,
  },
})

export const StyledSubtitle = styled(`h2`, {
  fontSize: `$24`,
  textAlign: `center`,
  px: `$20`,
  maxWidth: `400px`,
  lineHeight: `$space$32`,
  position: `relative`,
  wordBreak: 'break-word',

  variants: {
    type: {
      subtitle: {
        fontFamily: `$subtitle`,
        fontWeight: `400`,
        '@md': {
          fontSize: '$20 !important',
        },
      },
      articleTitle: {
        fontFamily: `$articleTitle`,
        fontWeight: `500`,

        '@md': {
          fontSize: '$20 !important',
        },
      },
      h2: {
        fontFamily: `$title`,
        fontWeight: `700`,
        fontSize: `$52`,
        lineHeight: `$space$52`,
        whiteSpace: 'nowrap',
        '@md': {
          fontSize: '$20',
          whiteSpace: 'normal',
        },
      },
    },
  },

  defaultVariants: {
    type: `articleTitle`,
  },
})
