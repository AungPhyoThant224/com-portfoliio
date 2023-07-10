import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Link to={"/"}>
            <Box
              textAlign={"center"}
              width={"fit-content"}
              paddingTop={5}
              paddingBottom={6}
            >
              <Text fontSize={"xl"} color={"green.300"} fontWeight={"bold"}>
                Varoon
              </Text>
              <Text
                fontSize={"xl"}
                color={"green.300"}
                fontWeight={"bold"}
                lineHeight={0.5}
              >
                Vally
              </Text>
            </Box>
          </Link>
        </GridItem>
        <GridItem>
          <Grid
            templateColumns="repeat(4, 1fr)"
            height={"100%"}
            alignItems={"center"}
            textAlign={"right"}
          >
            <GridItem>
              <Box>
                <Text>Home</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Text>Services</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Text>About</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Text>Contact</Text>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default NavBar;
