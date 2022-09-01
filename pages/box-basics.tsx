import type { NextPage } from 'next'
import { Box, Heading, Flex, Stack, HStack, VStack } from '@chakra-ui/react';

const BoxBasics: NextPage = () => {
    return (
        <>
            <Box mx="auto" mt={3} ml={3} >
                <Flex justifyContent='center'>
                    <Heading color='blue.200' >Hello chakra!</Heading>
                </Flex>
            </Box>
            <Flex flexDir='row' justifyContent= 'center' alignItems= 'center' gap='6px'>
                <Box bg='green.400' w='120px' h='120px'>This is Box1</Box>
                <Box bg='green.400' w='240px' h='60px'>This is Box2</Box>
                <Box bg='green.400' w='120px' h='120px'>This is Box3</Box>
            </Flex> 
            <Flex flexDir='column' gap='6px'  alignItems='center'>
                <Box bg='green.400' w='120px' h='120px'>This is Box1</Box>
                <Box bg='green.400' w='120px' h='120px'>This is Box2</Box>
                <Box bg='green.400' w='120px' h='120px'>This is Box3</Box>
            </Flex>
            <HStack spacing='9px'  justifyContent='center' mt='6px'>
                <Box bg='green.400' w='120px' h='120px'>This is Box1</Box>
                <Box bg='green.400' w='120px' h='120px'>This is Box2</Box>
                <Box bg='green.400' w='120px' h='120px'>This is Box3</Box>
            </HStack>
            <VStack spacing='9px' mt='6px' >
                <Box bg='green.400' w='120px' h='120px'>This is Box1</Box>
                <Box bg='green.400' w='120px' h='120px'>This is Box2</Box>
                <Box bg='green.400' w='120px' h='120px'>This is Box3</Box>
            </VStack>
        </>
    )
}

export default BoxBasics