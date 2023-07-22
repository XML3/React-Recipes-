import { Center } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  //console.log(data.hits[0].recipe.label);

  return (
    <>
      <Center h="100vh" flexDir="column" bgColor="gray.900"></Center>
      <RecipeItemCard item={item} key={item.hits} />
    </>
  );
};
