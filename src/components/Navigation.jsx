import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

export const Navigation = () => {
  const orbitronFontFamily = "Orbitron, sans-serif";
  const recipe = "/img/recipe2.svg";
  return (
    <>
      <Box
        bgColor={"whitesmoke"}
        minW={"100%"}
        maxH={"100px"}
        position={"relative"}
        z-index={10000}
        p={1.5}
      >
        <Flex
          display={"flex"}
          direction={"row"}
          wrap={"wrap"}
          align={{ base: "center", sm: "center", md: "center" }}
          position={"relative"}
          justifyContent={{ base: "center", sm: "space-around" }}
          gap={{ base: "0", sm: "28%", md: "30%", "2xl": "45%" }}
          right={{ base: 0, sm: 0 }}
        >
          {/* LOGO Section */}
          <Box
            mb={{ base: 0, sm: 0, md: 0 }}
            position={"relative"}
            left={{ base: "0rem", sm: 0, md: "-2%", "2xl": "0%" }}
            display={"flex"}
            justifyContent={"start"}
          >
            {" "}
            <Image
              src={recipe}
              boxSize={{ base: "45px", sm: "50px", md: "60px", "2xl": "65px" }}
              objectFit="scale-down"
              alt="logo"
              _hover={{ transform: "scale(1.08)" }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
