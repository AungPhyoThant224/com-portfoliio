import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  facebook,
  globe,
  linkedin,
  location,
  mail,
  phone,
  twitter,
} from "../assets/images";

const Footer = () => {
  const contact = [
    {
      text: "Kandaw, Mogok, Mandalay, Myanmar",
      icon: location,
      clickable: false,
      link: "#",
    },
    {
      text: "job@varoonvalley.com",
      icon: mail,
      clickable: true,
      link: "mailto: job@varoonvalley.com",
    },
    { text: "+959 458 311 581", icon: phone, clickable: false, link: "#" },
  ];

  const social = [
    { text: "Facebook", icon: facebook, link: "#" },
    { text: "Linked In", icon: linkedin, link: "#" },
    { text: "Twitter", icon: twitter, link: "#" },
    { text: "varronvalley.com", icon: globe, link: "#" },
  ];

  const quick = [
    { text: "Home", link: "#" },
    { text: "Service", link: "#" },
    { text: "About", link: "#" },
    { text: "Contact", link: "#" },
  ];

  return (
    <footer>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }}>
        <Box>
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
          <Text>&copy; 2023 Varoon Valley.</Text>
        </Box>
        <Box>
          <Heading as={"h3"}>Contact</Heading>
          {contact.map((con, idx) => (
            <Link href={con.link} key={idx}>
              <HStack>
                <Image src={con.icon} />
                <Text>{con.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
        <Box>
          <Heading as={"h3"}>Social</Heading>
          {social.map((soc, idx) => (
            <Link href={soc.link} key={idx}>
              <HStack>
                <Image src={soc.icon} />
                <Text>{soc.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
        <Box>
          <Heading as={"h3"}>Quick Links</Heading>
          {quick.map((qui, idx) => (
            <Link href={qui.link} key={idx}>
              <HStack>
                <Text>{qui.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </SimpleGrid>
    </footer>
  );
};

export default Footer;
