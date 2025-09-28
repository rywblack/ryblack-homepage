import { Container, Box, Heading, Image, Text, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container pt={24}>
      {/* Hero section */}
      <Box mb={6}>
        <Heading as="h2" variant="page-title" mb={2}>
          Ry Black
        </Heading>
        <Text fontSize="lg">
          Front-End Developer | Crafting Clean & Responsive Web Experiences
        </Text>
      </Box>

      <Box display="flex" justifyContent="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          boxSize="150px"
          objectFit="cover"
          borderRadius="full"
          src="/images/profile.JPEG"
          alt="Profile Image"
        />
      </Box>

      {/* Work Section 👇 */}
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" mt={10} mb={4}>
          Work
        </Heading>
        <Paragraph>
          I'm a front-end developer with a passion for building responsive,
          elegant, and intuitive user interfaces. I love crafting clean code,
          exploring modern frameworks, and learning new technologies to bring
          ideas to life on the web.
        </Paragraph>

        {/* 👇 Button to Works page */}
        <Box align="center" my={6}>
          <NextLink href="/works" passHref>
            <Button colorScheme="teal">My Portfolio</Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page

