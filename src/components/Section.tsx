import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  maxWidth: string;
  background: string;
  children: ReactNode;
}

const Section = ({ maxWidth, background, children }: Props) => {
  return (
    <>
      <Box backgroundColor={background}>
        <Box maxWidth={maxWidth} margin={"auto"} paddingX={5}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Section;
