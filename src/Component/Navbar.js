import { SearchIcon } from '@chakra-ui/icons'
import {
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Container
      as="nav"
      maxW="1300px"
      display="flex"
      justifyContent="space-between"
      boxShadow="lg"
      borderRadius="lg"
      pos="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" w="50px" h="50px" src="/images/btc.svg" alt="image" />
        <Text>Home</Text>
      </Flex>
      <Flex align="center">
        <Text mr="3">Posts</Text> <Text mr="3">Trending</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            w={{ base: '100px', sm: '160px', md: 'auto' }}
            type="tel"
            placeholder="Phone number"
          />
        </InputGroup>
      </Flex>
    </Container>
  )
}

export default Navbar
