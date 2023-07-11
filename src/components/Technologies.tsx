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
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"} paddingTop={10}>
        TECHNOLOGIES
      </Heading>
      <Heading
        as={"h3"}
        fontSize={"lg"}
        fontWeight={"medium"}
        textAlign={"center"}
        color={"blackAlpha.400"}
        padding={2}
      >
        Our technology expertise includes but is not limited to
      </Heading>
      <Box
        paddingTop={{ base: 5, md: 10 }}
        paddingBottom={10}
        margin={"auto"}
        maxWidth={"900px"}
      >
        {languages.map((lan, index) => (
          <Box
            key={index}
            textAlign={"center"}
            justifyContent={"center"}
            marginBottom={5}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }}>
              <Text lineHeight={"80px"} fontWeight={"bold"} fontSize={20}>
                {lan.title}
              </Text>
              <HStack justifyContent={{ base: "center", md: "left" }} gap={5}>
                {lan.images.map((img, idx) => (
                  <Box width={"80px"} height={"80px"} key={idx}>
                    <Image src={img} />
                  </Box>
                ))}
              </HStack>
            </SimpleGrid>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Technologies;
