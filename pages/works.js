// pages/works.js
import { Container, Heading, SimpleGrid, Box, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
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
              src="/images/placeholder1.jpg"
              alt="Project 1"
              borderRadius="lg"
              mb={2}
            />
            <LinkOverlay as={NextLink} href="/works/project1">
              <Heading fontSize={20} mt={2}>
                Placeholder Project 1
              </Heading>
            </LinkOverlay>
            <Text fontSize="sm" color="gray.500">
              A short description of your first project goes here.
            </Text>
          </LinkBox>
        </Section>

        {/* Project 2 */}
        <Section delay={0.1}>
          <LinkBox cursor="pointer">
            <Image
              src="/images/placeholder2.jpg"
              alt="Project 2"
              borderRadius="lg"
              mb={2}
            />
            <LinkOverlay as={NextLink} href="/works/project2">
              <Heading fontSize={20} mt={2}>
                Placeholder Project 2
              </Heading>
            </LinkOverlay>
            <Text fontSize="sm" color="gray.500">
              Another placeholder description for the second project.
            </Text>
          </LinkBox>
        </Section>

        {/* Project 3 */}
        <Section delay={0.2}>
          <LinkBox cursor="pointer">
            <Image
              src="/images/placeholder3.jpg"
              alt="Project 3"
              borderRadius="lg"
              mb={2}
            />
            <LinkOverlay as={NextLink} href="/works/project3">
              <Heading fontSize={20} mt={2}>
                Placeholder Project 3
              </Heading>
            </LinkOverlay>
            <Text fontSize="sm" color="gray.500">
              One more project card to fill space until your real work is done.
            </Text>
          </LinkBox>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works

