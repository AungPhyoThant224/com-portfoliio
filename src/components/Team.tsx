import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { person1, person2 } from "../assets/images";

const Team = () => {
  const team = [
    { name: "Mohan Lar", position: "Founder/CEO", picture: person1 },
    { name: "Gangadar", position: "Founder/CTO", picture: person1 },
    { name: "Aung Phyo Thant", position: "Junior Developer", picture: person1 },
    { name: "Chawbe Lar", position: "Junior Developer", picture: person1 },
    {
      name: "Soe Phyu Phyu Htun",
      position: "Junior Developer",
      picture: person2,
    },
    { name: "Thihan Win Htet", position: "Junior Developer", picture: person1 },
  ];
  return (
    <>
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
        OUR TEAM
      </Heading>
      <SimpleGrid
        paddingTop={10}
        columns={{ sm: 2, md: 3, lg: 3 }}
        spacing={8}
        maxWidth={{ sm: "500px", md: "900px" }}
        margin={"auto"}
        style={{ alignItems: "stretch" }}
      >
        {team.map((member, index) => (
          <Box
            data-aos="fade-up"
            key={index}
            boxShadow={"lg"}
            borderRadius={8}
            background={"white"}
            margin={"auto"}
            textAlign={"center"}
            padding={5}
            height={"100%"}
          >
            <Image src={member.picture} />
            <Text fontSize={20} paddingTop={3} fontWeight={"medium"}>
              {member.name}
            </Text>
            <Text color={"blackAlpha.600"}>{member.position}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Team;
