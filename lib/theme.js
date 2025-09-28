import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const styles = {
  global: props => ({
    'html': {
      transitionProperty: 'background-color, color, border-color',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out'
    },
    'body': {
      bg: mode('#f0e7db', '#202023')(props),
      transitionProperty: 'background-color, color, border-color',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out'
    },
    '*': {
      transitionProperty: 'background-color, color, border-color',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out'
    }
  })
}
const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginbottom: 4,
     }
   }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
   }
}

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true 
}

const theme = extendTheme({
  config, styles, components, colors, fonts
})

export default theme
