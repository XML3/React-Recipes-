import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  //console.log(data.hits[0].recipe.label);

  // Extracted data.hits and placed in recipes variable
  const recipes = data.hits;

  return (
    <>
      <Center
        gap={8}
        h="full"
        flexDir="column"
        bgColor="gray.900"
        color="whitesmoke"
      >
        <Heading fontSize={"6xl"}>Recipe Checker</Heading>
        <SimpleGrid columns={4} gap={8}>
          {/* Mapped throught recipe object as the "item" prop for RecipeItemCard and used unique Key prop for each recipe item (index or recipe URL) */}
          {recipes.map((item, index) => (
            <RecipeItemCard key={item.recipe.url} item={item} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
