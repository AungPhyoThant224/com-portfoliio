import { Image } from "@chakra-ui/image";
import { Box, SimpleGrid, Heading } from "@chakra-ui/layout";
import typing from "./../assets/vector/typing.webp";
import { Button } from "@chakra-ui/button";

const Landing = () => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={3}
        alignItems={"center"}
      >
        <Box>
          <Heading as={"h1"} fontSize={"4xl"}>
            We look forward to{" "}
            <span style={{ color: "#68D391" }}>collaborating with you</span> and
            turning your ideas into reality.
          </Heading>
          <Button
            colorScheme=""
            background={"green.300"}
            color={"white"}
            marginY={2}
          >
            Tell us your idea
          </Button>
        </Box>
        <Box>
          <Image src={typing} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Landing;
