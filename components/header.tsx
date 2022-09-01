import React from 'react'
import { Box, Heading, Flex, Stack, HStack, VStack, Text, } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <Box
        bg='#6B46C1'
        color='#F7FAFC'
        pt='88.45px'
        px='32px'
        pb='198px'
        textAlign='center'
      >
        <Heading>
          Simple pricing for your business
        </Heading>
        <Text>
          Plans that are carefully crafted to suit your business.
        </Text>

      </Box>

    </>
  )
}

export default Header