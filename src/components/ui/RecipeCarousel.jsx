import React, { useEffect, useState } from "react";
import { RecipeItemCard } from "../RecipeItemCard";
import { Box, useBreakpointValue, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion Box wrapper to animate sliding effect
const MotionBox = motion(Box);

export const RecipeCarousel = ({ items, clickFn }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Dynamically adjust the number of cards shown per slide
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, "2xl": 3 });

  // const left = "./img/left_or.svg";
  // const right = "./img/right_or.svg";

  // Calculate total width of the carousel
  const totalWidth = items.length * (100 / columns);

  // Smoothly scroll the carousel
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 0.2) % totalWidth); // Slow, continuous movement
    }, 50); // Update every 100ms for smoother movement

    return () => clearInterval(scrollInterval); // Clear interval on component unmount
  }, [totalWidth]);

  return (
    <Box position="relative" w="100%" overflow="hidden">
      {/* Navigation buttons (optional) */}
      <Box
        position="absolute"
        top="50%"
        left="10px"
        zIndex="10"
        cursor="pointer"
        transform="translateY(-50%)"
        color={"#e84213"}
      >
        {/* Left Arrow */}
        {/* <Image
          src={left}
          boxSize={{ base: "45px", sm: "50px", md: "60px", "2xl": "65px" }}
          objectFit="scale-down"
          alt="Left arrow carousel"
          _hover={{ transform: "scale(1.10)" }}
        /> */}
      </Box>
      <Box
        position="absolute"
        top="50%"
        right="10px"
        zIndex="10"
        cursor="pointer"
        transform="translateY(-50%)"
        color={"#e84213"}
      >
        {/* Right Arrow */}
        {/* <Image
          src={right}
          boxSize={{ base: "45px", sm: "50px", md: "60px", "2xl": "65px" }}
          alt="Right arrow carousel"
          _hover={{ transform: "scale(1.10)" }}
        /> */}
      </Box>

      {/* Carousel container */}
      <Box display="flex" alignItems="center" justifyContent="center">
        {/* MotionBox to animate the carousel sliding */}
        <MotionBox
          display="flex"
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          animate={{ x: `-${scrollPosition}%` }} // Continuous horizontal scroll
          width={{ base: "100%", md: "100%", "2xl": "70%" }}
          minW={{ base: "100vw", md: "100vw", "2xl": "70vw" }}
        >
          {items.map((item) => (
            <Box
              key={item.recipe.url}
              flexShrink={0}
              width={`${100 / columns}%`}
            >
              <RecipeItemCard item={item} clickFn={clickFn} />
            </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};
