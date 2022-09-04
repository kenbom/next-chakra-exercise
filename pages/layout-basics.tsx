import React from 'react'
import { Box, Heading, Flex, Stack, HStack, VStack, Grid, Center, Square, Text, Spacer, Circle } from '@chakra-ui/react';

const LayoutBasics = () => {
    return (
        <>
            <div>LayoutBasics</div>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <Box w='170px' h='10' bg='blue.500' />
                <Box w='170px' h='10' bg='blue.500' />
                <Box w='170px' h='20' bg='blue.500' />
            </Grid>
            <Flex color='white'>
                <Center w='100px' bg='green.500'>
                    <Text>Box 1</Text>
                </Center>
                <Square bg='blue.500' size='200px'>
                    <Text>Box 2</Text>
                </Square>
                <Circle flex='1' bg='tomato'>
                    <Text>Box 3</Text>
                </Circle>
            </Flex>

            <Box>
                <Text>Flex and Spacer: Full width, equal Spacing</Text>
                <Flex >
                    <Box w='170px' h='10' bg='red.500' />
                    <Spacer />
                    <Box w='170px' h='10' bg='red.500' />
                    <Spacer />
                    <Box w='170px' h='10' bg='red.500' />
                </Flex>

                <Text>
                    Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
                </Text>
                <Grid templateColumns='repeat(3, 1fr)' justifyItems='center'>
                    <Box w='170px' h='10' bg='blue.500' />
                    <Box w='170px' h='10' bg='blue.500' />
                    <Box w='170px' h='10' bg='blue.500' />
                </Grid>

                <Text>
                    HStack: The children have equal spacing but don't span the whole container
                </Text>
                <HStack spacing='1'>
                    <Box w='170px' h='10' bg='teal.500' />
                    <Spacer />
                    <Box w='170px' h='10' bg='teal.500' />
                    <Spacer />
                    <Box w='170px' h='10' bg='teal.500' />
                </HStack>
            </Box>
        </>
    )
}

export default LayoutBasics