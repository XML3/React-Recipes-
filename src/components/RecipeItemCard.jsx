import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

export const RecipeItemCard = ({ item, clickFn }) => {
  const { image, label, url, dietLabels, cautions, mealType, dishType } =
    item.recipe;

  return (
    <>
      <Card
        bgColor="whitesmoke"
        borderRadius="xl"
        w="sm"
        h="30rem"
        onClick={() => clickFn(item)}
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
      >
        <CardBody>
          <Image h={64} w="sm" src={image} borderRadius="xl" alt={label} />
          <Heading size="md" mt={4}>
            {label}
          </Heading>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
          {dietLabels && <Text bgColor="lime">Diet Label: {dietLabels}</Text>}
          {cautions && (
            <Text bgColor="pink.400" fontWeight="bold">
              Caution: {cautions}
            </Text>
          )}

          <Text>Meal Type: {mealType}</Text>
          <Text>Dish Type: {dishType}</Text>
        </CardBody>
      </Card>
    </>
  );
};
