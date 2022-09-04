import React from "react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  HStack,
  VStack,
  Grid,
  Center,
  Square,
  Text,
  Spacer,
  Circle,
  SimpleGrid,
  GridItem,
  Divider,
} from "@chakra-ui/react";

const SimpleGrig = () => {
  return (
    <>
      <SimpleGrid columns={3} spacing={10} gap="20px" p='20px'>
        <GridItem colSpan={2} bg="tomato" h='15px'></GridItem>
        <Box bg="tomato" h='30'></Box>
        <GridItem colSpan={3} bg="tomato" height="80px"></GridItem>
        <Box bg="tomato" height="80px"></Box>
        {/* <Box bg="tomato" height="80px"></Box> */}
      </SimpleGrid>
      <Box m="20px" bgColor="black">
        <Divider />
      </Box>
      <Grid
        templateAreas={`"header header header"
                        "nav main nav2"
                        "footer footer footer"
                        `}
        gridTemplateRows={"1fr 100px 1fr"}
        gridTemplateColumns={"3 1fr"}
        m="20px"
      >
        <GridItem pl="2" area={"header"} bgColor="gray.200">
          header
        </GridItem>
        <GridItem pl="2" area={"nav"} bgColor="blue.200">
          nav
        </GridItem>
        <GridItem pl="2" area={"main"} bgColor="green.200">
          main
        </GridItem>
        <GridItem pl="2" area={"nav2"} bgColor="yellow.200">
          nav2
        </GridItem>
        <GridItem pl="2" area={"footer"} bgColor="gray.200">
          footer
        </GridItem>
      </Grid>
    </>
  );
};

export default SimpleGrig;
