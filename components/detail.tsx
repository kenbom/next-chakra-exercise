import React from 'react'
import {
    Box, Heading, Flex, Stack, HStack, VStack, Text, Button, Input, Select, Checkbox,
    useColorMode

} from '@chakra-ui/react';

const Detail = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <>
            <Box p='40px'>
                <Heading mb='12px'>Your details</Heading>
                <Text mb='42px'>If you already have an account, click here to log in.</Text>
                <Flex gap='10px'>
                    <Box>
                        <Text>First Name</Text>
                        <Input variant='filled' w='272px' mb='24px'></Input>

                    </Box>
                    <Box>
                        <Text>Last Name</Text>
                        <Input variant='filled' w='272px'></Input>
                    </Box>
                </Flex>
                <Text>Address</Text>
                <Input variant='filled' w='556px' mb='24px'></Input>
                <Flex gap='10px'>
                    <Box>
                        <Text>City</Text>
                        <Input variant='filled' w='272px' mb='24px'></Input>

                    </Box>
                    <Box>
                        <Text>Country</Text>
                        <Select variant='filled' w='272px'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                </Flex>
                <Checkbox mb='24px'>Ship to the billing address.</Checkbox>
                <Button onClick={toggleColorMode} w='556px' bgColor='#8AC919'>Place order</Button>
            </Box>
        </>
    )

}


export default Detail