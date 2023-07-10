import { Box } from "@chakra-ui/layout";
import { As } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  maxWidth: string;
  background: string;
  as: As;
  children: ReactNode;
}

const Section = ({ maxWidth, background, as, children }: Props) => {
  return (
    <>
      <Box backgroundColor={background} as={as}>
        <Box maxWidth={maxWidth} margin={"auto"} paddingX={5}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Section;
