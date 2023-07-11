import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  Hide,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { menu } from "../assets/images";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnref = React.useRef<HTMLButtonElement>(null);

  return (
    <nav>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Link href="#" style={{ textDecoration: "none" }}>
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
                Valley
              </Text>
            </Box>
          </Link>
        </GridItem>
        <Hide below="md">
          <GridItem>
            <Grid
              templateColumns="repeat(4, 1fr)"
              height={"100%"}
              alignItems={"center"}
              textAlign={"right"}
            >
              <GridItem>
                <Box>
                  <Link href="#services">
                    <Text>Services</Text>
                  </Link>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <Link href="#about">
                    <Text>About</Text>
                  </Link>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <Link href="#team">
                    <Text>Team</Text>
                  </Link>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <Link href="#contact">
                    <Text>Contact</Text>
                  </Link>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Hide>
        <Hide above="md">
          <Box textAlign={"right"} paddingTop={6}>
            <Button
              ref={btnref}
              onClick={onOpen}
              colorScheme=""
              background={"green.300"}
              color={"white"}
              padding={3}
            >
              <Image src={menu} height={"30px"} width={"30px"} />
            </Button>
          </Box>
          <Drawer
            onClose={onClose}
            isOpen={isOpen}
            placement="right"
            finalFocusRef={btnref}
          >
            <DrawerOverlay />
            <DrawerContent>
              <Box textAlign={"right"}>
                <Button
                  onClick={onClose}
                  width={"50px"}
                  height={"50px"}
                  background={"transparent"}
                >
                  <CloseButton size={"lg"} />
                </Button>
              </Box>
              <DrawerHeader>Home</DrawerHeader>
              <DrawerHeader>Service</DrawerHeader>
              <DrawerHeader>About</DrawerHeader>
              <DrawerHeader>Contact</DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Hide>
      </Grid>
    </nav>
  );
};

export default NavBar;
