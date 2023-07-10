import { Heading } from "@chakra-ui/react";

const Technologies = () => {
  const languages = [{ title: "Front end :", images: [] }];
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
    </>
  );
};

export default Technologies;
