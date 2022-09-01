import React from 'react'
import { Box, Heading, Flex, Stack, HStack, VStack, Text, } from '@chakra-ui/react';


const TextBasics = () => {
    return (
        <div>
            <VStack >
                <Heading color='blue.200' fontSize='6xl'>text-basics</Heading>
                <Heading fontSize='4xl' color='red.200' >text-basics</Heading>
                <Heading fontSize='2xl' color='blue.200' >text-basics</Heading>
            </VStack>
            <Text noOfLines={3}>
                "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created.
            </Text>

// Responsive version
            <Text noOfLines={[1, 2, 3]}>
                "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created.
            </Text>
            <Text fontSize='lg'>(lg) In love with React & Next</Text>
            <Text fontSize='md'>(md) In love with React & Next</Text>
            <Text fontSize='sm'>(sm) In love with React & Next</Text>

          <Heading as="h1" color='gray.300'>"as props" does not  work!</Heading> 
            <Heading as="h1">h1</Heading>
            <Heading as="h2">h2</Heading>
            <Heading as="h3">h3</Heading>
            <Heading as="h4">h4</Heading>
            <Heading as="h5">h5</Heading>
            <Heading as="h6">h6</Heading>
        </div>
    )
}

export default TextBasics