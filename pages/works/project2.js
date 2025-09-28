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
        Placeholder Project 2 <Badge ml={2}>2025</Badge>
      </Heading>

      <Text mb={4} mt={2}>
        This is a placeholder page for Project 2. You can add a full description of your project
        here, including what technologies you used and what problems it solves.
      </Text>

      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <strong>Website:</strong>{' '}
          <Link href="#" isExternal>
            Coming soon <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <strong>Platform:</strong> Web / Mobile
        </ListItem>
        <ListItem>
          <strong>Stack:</strong> React, Next.js, Chakra UI
        </ListItem>
      </List>

      <Image
        borderRadius="lg"
        w="full"
        src="/images/placeholder2.jpg"
        alt="Project 2 Image"
        mt={6}
      />
    </Section>
  </Container>
)

export default Project2

