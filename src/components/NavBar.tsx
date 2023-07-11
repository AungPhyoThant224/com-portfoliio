import {
  Box,
  Button,
  Drawer,
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
import { close, menu } from "../assets/images";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { title: "Services", link: "#services" },
    { title: "About", link: "#about" },
    { title: "Team", link: "#team" },
    { title: "Contact", link: "#contact" },
  ];

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
              {links.map((link, idx) => (
                <GridItem key={idx}>
                  <Box>
                    <Text>
                      <Link
                        href={link.link}
                        fontSize={18}
                        style={{ textDecoration: "none" }}
                        _hover={{
                          fontWeight: "500",
                        }}
                      >
                        {link.title}
                      </Link>
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Hide>
        <Hide above="md">
          <Box textAlign={"right"} paddingTop={6}>
            <Button
              onClick={onOpen}
              colorScheme=""
              background={"green.300"}
              color={"white"}
              padding={3}
            >
              <Image src={menu} height={6} width={6} />
            </Button>
          </Box>
          <Drawer
            onClose={onClose}
            isOpen={isOpen}
            placement="right"
            returnFocusOnClose={false}
          >
            <DrawerOverlay />
            <DrawerContent>
              <Box textAlign={"right"}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                  background={"transparent"}
                  padding={3}
                >
                  <Image src={close} width={6} height={6} />
                </Button>
              </Box>
              {links.map((link, idx) => (
                <DrawerHeader key={idx}>
                  <Link href={link.link} style={{ textDecoration: "none" }}>
                    {link.title}
                  </Link>
                </DrawerHeader>
              ))}
            </DrawerContent>
          </Drawer>
        </Hide>
      </Grid>
    </nav>
  );
};

export default NavBar;
