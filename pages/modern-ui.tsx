import React from 'react'
import { Box, Heading, Flex, Stack, HStack, VStack, Text, Button } from '@chakra-ui/react';
import Detail from '../components/detail';
import Cart from '../components/cart';

const ModernUi = () => {
    return (
        <>
            <Flex flexWrap='wrap' justifyContent='center' mt='80px'>
                <Box w='640px' h='740'>
                    <Detail />
                </Box>
                <Box bgColor='#F7FAFC' w='640px' h='740'>
                    <Cart />

                </Box>
            </Flex>

        </>
    )
}
export default ModernUi