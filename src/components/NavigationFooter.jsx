import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const NavigationFooter = () => {
  const Mylogo = "/img/orange_logo_smaller.svg";
  const bebasFont = "Bebas Neue, sans-serif";

  return (
    <>
      <Box
        bgColor={"whitesmoke"}
        minW={"100%"}
        maxH={"100px"}
        position={"relative"}
        z-index={10000}
        p={1.5}
        borderTop={"2px solid #0f0f0f"}
      >
        <Flex
          display={"flex"}
          direction={"row"}
          wrap={"wrap"}
          align={{ base: "center", sm: "center", md: "center" }}
          position={"relative"}
          justifyContent={{ base: "center", sm: "center" }}
          gap={{ base: "0", sm: "2px", md: "30%", "2px": "10px" }}
          right={{ base: 0, sm: 0 }}
        >
          {/* LOGO Section */}
          <Box
            mb={{ base: 0, sm: 0, md: 0 }}
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
          >
            {" "}
            <Image
              src={Mylogo}
              boxSize={{ base: "45px", sm: "50px", md: "60px", "2xl": "65px" }}
              objectFit="scale-down"
              alt="logo"
              _hover={{ transform: "scale(1.08)" }}
            />
          </Box>
          <Text
            fontFamily={bebasFont}
            fontSize={{ base: "11px", sm: "14px", "2xl": "14px" }}
          >
            ©2023 Xagly Montilva : Mock Recipe Checker
          </Text>
        </Flex>
      </Box>
    </>
  );
};
