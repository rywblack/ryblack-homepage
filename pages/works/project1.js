import { Container, Badge, Link, List, ListItem, Heading, Text, Image } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import NextLink from 'next/link'

const Project1 = () => (
  <Container pt={24}>
    <Section>
      <Link as={NextLink} href="/works" color="teal.500">
        Works
      </Link>
      <span> &nbsp; <ChevronRightIcon /> &nbsp; </span>
      <Heading as="h3" display="inline-block" fontSize={24} mb={2}>Resume Maker<Badge ml={2}>2025</Badge>
      </Heading>

      <Text mb={4} mt={2}>
             A full-featured resume builder made with React and Vite that lets users fill out forms and generate a downloadable, professional PDF instantly.
</Text>

      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <strong>Website:</strong>{' '}
          <Link href="https://resume-maker-eta-nine.vercel.app/" isExternal>
            resume-maker-eta-nine.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <strong>Platform:</strong> Web / Mobile
        </ListItem>
        <ListItem>
          <strong>Stack:</strong> React, Vite, @react-pdf/renderer
        </ListItem>
      </List>

      <Image
        borderRadius="lg"
        w="full"
        src="/images/placeholder1.jpg"
        alt="Project 1 Image"
        mt={6}
      />
    </Section>
  </Container>
)

export default Project1

