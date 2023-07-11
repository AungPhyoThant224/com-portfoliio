import { SimpleGrid, Image, Heading, Button, Box } from "@chakra-ui/react";
import { typing } from "../assets/images";

const Landing = () => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        paddingTop={{ base: 5, md: 0 }}
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
            as={"a"}
            colorScheme=""
            background={"green.300"}
            color={"white"}
            marginY={2}
            href="#contact"
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
