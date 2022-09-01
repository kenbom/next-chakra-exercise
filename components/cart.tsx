import React from 'react'
import { Box, Heading, Flex, Stack, HStack, VStack, Text, Button, Spacer, Icon } from '@chakra-ui/react';

const Cart = () => {
    return (
        <>
            <Box p='40px'>
                <Heading>あなたのカート</Heading>
                <Text mb='42px'>If price is too hard on your eyes, try changing the theme.</Text>
                <HStack mb='24px'>
                    <Icon ></Icon>
                    <Box>
                        <Text>Penny board</Text>
                        <Text>PN1234</Text>
                    </Box>
                    <Spacer/>
                    <Text fontSize='lg' fontWeight='800'>$119.00</Text>
                </HStack>
                <HStack mb='24px'>
                    <Text>Subtotal</Text>
                    <Spacer />
                    <Text fontSize='lg' fontWeight='800'>$119.00</Text>
                </HStack>
                <HStack mb='24px'>
                    <Text>Shipping</Text>
                    <Spacer />
                    <Text fontSize='lg' fontWeight='800'>$19.90</Text>
                </HStack>
                <HStack mb='24px'>
                    <Text>Taxes</Text>
                    <Spacer />
                    <Text fontSize='lg' fontWeight='800'>$23.00</Text>
                </HStack>
                <HStack>
                    <Text>Total</Text>
                    <Spacer />
                    <Heading>$119.00</Heading>
                </HStack>

            </Box>
        </>
    )
}

export default Cart