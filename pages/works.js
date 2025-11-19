// pages/works.js
import { Container, Heading, SimpleGrid, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'

const Works = () => {
  return (
    <Container pt={24}>
      <Heading as="h3" fontSize={24} mb={6}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* Project 1 */}
        <Section>
          <LinkBox cursor="pointer">
            <Image
              src="/images/resumeMaker.png"
              alt="Resume Maker"
              borderRadius="lg"
              mb={2}
            />
            <LinkOverlay as={NextLink} href="/works/project1">
              <Heading fontSize={20} mt={2}>
                Resume Maker
              </Heading>
            </LinkOverlay>
            <Text fontSize="sm" color="gray.500">
              A React + Vite app for building and downloading polished PDF resumes instantly.
            </Text>
          </LinkBox>
        </Section>

        {/* Project 2 — Movie Character Finder (unchanged original) */}
        <Section delay={0.1}>
          <LinkBox cursor="pointer">
            <Image
              src="/images/movie-character-finder.png"
              alt="Movie Character Finder"
              borderRadius="lg"
              mb={2}
            />
            <LinkOverlay as={NextLink} href="/works/project2">
              <Heading fontSize={20} mt={2}>
                Movie Character Finder
              </Heading>
            </LinkOverlay>
            <Text fontSize="sm" color="gray.500">
              Search any movie, open a dedicated detail page, and explore its main characters and cast using the TMDB API.
            </Text>
          </LinkBox>
        </Section>

        {/* Project 3 — Smart Notes App */}
        <Section delay={0.2}>
          <LinkBox cursor="pointer">
            <Image
              src="/images/smartnotes.png"
              alt="Smart Notes App"
              borderRadius="lg"
              mb={2}
            />
            <LinkOverlay as={NextLink} href="/works/project3">
              <Heading fontSize={20} mt={2}>
                Smart Notes App
              </Heading>
            </LinkOverlay>
            <Text fontSize="sm" color="gray.500">
              A clean and modern note-taking app with tagging, searching, pinning,
              and a mock AI summarizer — built with React + Vite and deployed on Vercel.
              Live Demo: https://smart-notes-app-two.vercel.app/
            </Text>
          </LinkBox>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
