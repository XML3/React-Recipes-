import { Box, Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";
import { RecipeCarousel } from "../components/ui/RecipeCarousel";

export const RecipeListPage = ({ items, clickFn }) => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 3 });

  return (
    <Box
      border={"1px solid #0f0f0f"}
      p={2}
      maxW={{ base: "100%", sm: "100%", md: "80%" }}
      mb={"3rem"}
    >
      <Box bgColor="gray.900" color="whitesmoke" minH="80vh">
        <Flex align="center" justify="center" minH="80vh">
          {/* <Heading fontSize={"6xl"}>Recipe Checker</Heading> */}

          {/* <SimpleGrid columns={columns} gap={0}> */}
          {/* Mapped throught recipe object as the "item" prop for RecipeItemCard and used unique Key prop for each recipe item (index or recipe URL) */}
          {/* {items.map((item) => (
            <RecipeItemCard
              key={item.recipe.url}
              item={item}
              clickFn={clickFn}
            />
          ))}
        </SimpleGrid> */}
          <RecipeCarousel items={items} clickFn={clickFn} />
        </Flex>
      </Box>
    </Box>
  );
};
