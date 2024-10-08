import { Box, Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ items, clickFn }) => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 3 });

  return (
    <Box bgColor="gray.900" color="whitesmoke" minH="100vh">
      <Flex align="center" justify="center" minH="100vh">
        {/* <Heading fontSize={"6xl"}>Recipe Checker</Heading> */}

        <SimpleGrid columns={columns} gap={8}>
          {/* Mapped throught recipe object as the "item" prop for RecipeItemCard and used unique Key prop for each recipe item (index or recipe URL) */}
          {items.map((item) => (
            <RecipeItemCard
              key={item.recipe.url}
              item={item}
              clickFn={clickFn}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
