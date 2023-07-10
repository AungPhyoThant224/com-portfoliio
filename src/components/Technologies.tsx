import {
  Box,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  angular,
  figma,
  illustrator,
  laravel,
  mongodb,
  mysql,
  nodejs,
  photoshop,
  react,
  vuejs,
} from "../assets/images";

const Technologies = () => {
  const languages = [
    { title: "Front end :", images: [react, angular, vuejs] },
    { title: "Back end :", images: [laravel, nodejs] },
    { title: "Database :", images: [mysql, mongodb] },
    { title: "UI/UX :", images: [figma, illustrator, photoshop] },
  ];
  return (
    <>
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
        TECHNOLOGIES
      </Heading>
      <Heading
        as={"h3"}
        fontSize={"xl"}
        textAlign={"center"}
        color={"blackAlpha.600"}
      >
        Our technology expertise includes but is not limited to
      </Heading>
      {languages.map((lan, index) => (
        <Box
          key={index}
          maxWidth={"900px"}
          textAlign={"center"}
          justifyContent={"center"}
          margin={"auto"}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Text>{lan.title}</Text>
            <HStack justifyContent={{ base: "center", md: "left" }}>
              {lan.images.map((img, idx) => (
                <Box width={"80px"} height={"80px"} key={idx}>
                  <Image src={img} />
                </Box>
              ))}
            </HStack>
          </SimpleGrid>
        </Box>
      ))}
    </>
  );
};

export default Technologies;
