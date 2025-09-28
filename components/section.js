// components/section.js
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

// Allow framer-motion props (like initial, animate) to pass through Chakra's wrapper
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition'
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section

