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
        columns={{ sm: 1, md: 2, lg: 3 }}
        gap={5}
        alignContent={"center"}
      >
        {team.map((member, index) => (
          <Box
            key={index}
            boxShadow={"lg"}
            borderRadius={8}
            background={"white"}
            maxWidth={"250px"}
            margin={"auto"}
            textAlign={"center"}
          >
            <Image src={member.picture} />
            <Text>{member.name}</Text>
            <Text>{member.position}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Team;
