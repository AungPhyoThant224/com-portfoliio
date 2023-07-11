import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { coding, maintenance } from "../assets/images";

const Services = () => {
  const services = [
    {
      heading: "WEB DEVELOPMENT",
      description:
        "With a team of experienced professionals, we excel in web development, crafting engaging and user-friendly websites that leave a lasting impression.",
      image: coding,
    },
    {
      heading: "MINTENANCE",
      description:
        "We understand the importance of maintaining web applications to ensure their optimal performance and security.",
      image: maintenance,
    },
  ];
  return (
    <>
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
        OUR SERVICE
      </Heading>
      <Heading
        as={"h3"}
        fontSize={"lg"}
        fontWeight={"medium"}
        textAlign={"center"}
        color={"blackAlpha.400"}
        padding={2}
      >
        Our Diverse Range of Services
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={5}
        alignItems={"center"}
        maxWidth={{ base: "400px", md: "700px" }}
        margin={"auto"}
        paddingTop={10}
        style={{ alignItems: "stretch" }}
      >
        {services.map((service, index) => (
          <Box boxShadow="lg" key={index}>
            <Card height={"100%"} borderRadius={10}>
              <CardBody>
                <Image
                  src={service.image}
                  width={300}
                  height={300}
                  margin={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={"center"} color={"green.300"}>
                    {service.heading}
                  </Heading>
                  <Text fontSize={16}>{service.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Services;
