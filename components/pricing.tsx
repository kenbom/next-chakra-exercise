import React from 'react'
import { Box, Heading, Flex, Stack, HStack, VStack, Text, Button } from '@chakra-ui/react';



const Pricing = () => {
    return (
        <>
            <Box boxShadow='lg' borderRadius='12px' w='994px' m='auto' mt='-150px' overflow='hidden'>
                <Flex >
                    <Box p='60px' bgColor='#F0EAFB' textAlign='center'>
                        <Text>Preium PRO</Text>
                        <Heading>$329</Heading>
                        <Text>builled just once</Text>
                        <Button mt='24px' bgColor='#6B46C1' color='white' size='lg' w='282px'>Get Started</Button>
                    </Box>
                    <Box p='60px' bg='white'>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        {/* <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Text>Access these features when you get this pricing package for your business.</Text> */}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Pricing