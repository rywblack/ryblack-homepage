import { Container, Badge, Link, List, ListItem, Heading, Text, Image } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import NextLink from 'next/link'

const Project3 = () => (
  <Container pt={24}>
    <Section>
      <Link as={NextLink} href="/works" color="teal.500">
        Works
      </Link>
      <span> &nbsp; <ChevronRightIcon /> &nbsp; </span>

      <Heading as="h3" display="inline-block" fontSize={24} mb={2}>
        Smart Notes App <Badge ml={2}>2025</Badge>
      </Heading>

      <Text mb={4} mt={2}>
        A modern note-taking application built with React and Vite. Users can create, edit, delete,
        search, tag, and pin notes, all stored locally in the browser for instant access. The app
        includes a mock AI-style summarizer, a clean centered layout, and a responsive design that
        looks great on both desktop and mobile. Deployed on Vercel for fast, reliable hosting.
      </Text>

      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <strong>Website:</strong>{' '}
          <Link href="https://smart-notes-app-two.vercel.app/" isExternal>
            smart-notes-app-two.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <strong>Platform:</strong> Web
        </ListItem>

        <ListItem>
          <strong>Stack:</strong> React, Vite, JavaScript, CSS, LocalStorage
        </ListItem>
      </List>

      <Image
        borderRadius="lg"
        w="full"
        src="/images/smartnotes.png"
        alt="Smart Notes App Screenshot"
        mt={6}
      />
    </Section>
  </Container>
)

export default Project3
