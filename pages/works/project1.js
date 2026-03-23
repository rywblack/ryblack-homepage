import { Container, Badge, Link, List, ListItem, Heading, Text, Image, UnorderedList } from '@chakra-ui/react'
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
        A full-stack web application that allows users to build, preview, and download professional resumes in real-time. Users sign in with Google or GitHub, create multiple resumes, and have their work automatically saved to the cloud — so nothing is lost between sessions.
      </Text>

      <Heading as="h4" fontSize={18} mb={2}>Key Features</Heading>
      <UnorderedList ml={4} mb={4} spacing={2}>
        <ListItem><strong>Live PDF Preview</strong> — See your resume update in real-time as you type, with a side-by-side editor and PDF viewer</ListItem>
        <ListItem><strong>Instant PDF Download</strong> — Export your resume as a professionally formatted PDF with one click</ListItem>
        <ListItem><strong>Cloud Persistence</strong> — Resumes are automatically saved to a PostgreSQL database with a 2-second debounce, so your work is never lost</ListItem>
        <ListItem><strong>Multi-Resume Support</strong> — Create, manage, and switch between multiple resumes from a central dashboard — perfect for tailoring resumes to different roles</ListItem>
        <ListItem><strong>OAuth Authentication</strong> — Secure sign-in with Google or GitHub accounts</ListItem>
        <ListItem><strong>Customizable Sections</strong> — Personal info, professional summary, education, certifications, work experience, projects, and a flexible skills section with a custom title</ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={18} mb={2}>Tech Stack</Heading>
      <UnorderedList ml={4} mb={4} spacing={2}>
        <ListItem><strong>Frontend:</strong> React 19, Tailwind CSS v4</ListItem>
        <ListItem><strong>Framework:</strong> Next.js 15 (App Router)</ListItem>
        <ListItem><strong>PDF Generation:</strong> @react-pdf/renderer</ListItem>
        <ListItem><strong>Authentication:</strong> NextAuth.js v5 (Google &amp; GitHub OAuth)</ListItem>
        <ListItem><strong>Database:</strong> Neon PostgreSQL (serverless)</ListItem>
        <ListItem><strong>Deployment:</strong> Vercel</ListItem>
      </UnorderedList>

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
      </List>

      <Image
        borderRadius="lg"
        w="full"
        src="/images/resumeMaker.png"
        alt="Resume Maker Screenshot"
        mt={6}
      />
    </Section>
  </Container>
)

export default Project1

