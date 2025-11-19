import { Container, Badge, Link, List, ListItem, Heading, Text, Image } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import NextLink from 'next/link'

const Project2 = () => (
  <Container pt={24}>
    <Section>
      <Link as={NextLink} href="/works" color="teal.500">
        Works
      </Link>
      <span> &nbsp; <ChevronRightIcon /> &nbsp; </span>

      <Heading as="h3" display="inline-block" fontSize={24} mb={2}>
        Movie Character Finder <Badge ml={2}>2025</Badge>
      </Heading>

      <Text mb={4} mt={2}>
        A movie discovery application built with React and Vite that lets users search any movie,
        navigate to a full detail page, and explore its main characters and cast. It uses the TMDB
        API to fetch live movie data, posters, ratings, and actor information. The UI is clean,
        modern, and responsive — featuring dedicated detail pages with posters, overviews,
        rating data, and cast cards.
      </Text>

      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <strong>Website:</strong>{' '}
          <Link href="https://movie-character-finder.vercel.app/" isExternal>
            movie-character-finder.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <strong>Platform:</strong> Web
        </ListItem>

        <ListItem>
          <strong>Stack:</strong> React, Vite, Tailwind CSS, TMDB API
        </ListItem>
      </List>

      <Image
        borderRadius="lg"
        w="full"
        src="/images/movie-character-finder.png"
        alt="Movie Character Finder Screenshot"
        mt={6}
      />
    </Section>
  </Container>
)

export default Project2
