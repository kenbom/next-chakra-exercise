import React from 'react'
import { Text, Box, Heading, Flex, Stack, HStack, VStack, Button, Center, Square } from '@chakra-ui/react';

const PseudoProps = () => {
    return (
        <>
            <VStack bg="green.400" w='320px' h="320px" m='auto' mt='10px' spacing='10'>
                <Text fontSize="32px" >This is a Box.</Text>
                <Box mt='200px' >
                    <Button _hover={{ bgColor: 'blue' }} >Click Me</Button>
                </Box>
            </VStack>
            <Box bg="green.400" w='320px' h="320px" m='auto' mt='10px'>
                <Text fontSize="32px" >This is a Box.</Text>
                <Box mt='200px' >
                    <Button _hover={{ bgColor: 'blue' }} >Click Me</Button>
                </Box>
            </Box>
            

        </>)
}


export default PseudoProps