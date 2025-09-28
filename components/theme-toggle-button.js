import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const MotionSpan = motion.span

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={colorMode === 'light' ? 'purple' : 'orange'}
      onClick={toggleColorMode}
    >
      <AnimatePresence mode="wait" initial={false}>
        <MotionSpan
          key={colorMode} // 👈 key is based on actual mode now
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </MotionSpan>
      </AnimatePresence>
    </IconButton>
  )
}

export default ThemeToggleButton

