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
        fontSize={"xl"}
        textAlign={"center"}
        color={"blackAlpha.600"}
      >
        Our Diverse Range of Services
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={3}
        alignItems={"center"}
      >
        {services.map((service, index) => (
          <Box boxShadow="md" key={index}>
            <Card>
              <CardBody>
                <Image src={service.image} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{service.heading}</Heading>
                  <Text>{service.description}</Text>
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
