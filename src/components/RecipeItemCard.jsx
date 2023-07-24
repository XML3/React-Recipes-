import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

export const RecipeItemCard = ({ item, clickFn }) => {
  const {
    image,
    label,
    url,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
  } = item.recipe;

  const isVegetarian = healthLabels.includes("Vegetarian");
  const isVegan = healthLabels.includes("Vegan");

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
          <Stack size="sm">
            <Flex gap={1} w={["full", "75%"]} flexWrap="wrap" flexDir="column">
              <a href={url} target="_blank" rel="noopener noreferrer">
                View Recipe
              </a>
              {dietLabels && (
                <Text bgColor="blue.200">Diet Label: {dietLabels}</Text>
              )}
              {cautions && (
                <Text bgColor="pink.400" fontWeight="bold">
                  Caution: {cautions}
                </Text>
              )}
              {isVegan ? (
                <Text bgColor="lime">Vegan</Text>
              ) : isVegetarian ? (
                <Text bgColor="lime">Vegetarian</Text>
              ) : null}
              <Text>Meal Type: {mealType}</Text>
              <Text>Dish Type: {dishType}</Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
