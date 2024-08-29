import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Center,
  useBreakpointValue,
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
      <Flex alignItems="center" justify="center">
        <Card
          bgColor="whitesmoke"
          borderRadius="xl"
          w={{ base: "100%", sm: "100%", md: "100%" }}
          h="auto" //30
          onClick={() => clickFn(item)}
          cursor="pointer"
          _hover={{ transform: "scale(1.01)" }}
        >
          <CardBody>
            <Flex alignItems="center" justify="center">
              <Image
                h="200px"
                w="200px"
                src={image}
                borderRadius="xl"
                alt={label}
              />
            </Flex>
            <Heading size={{ base: "sm", sm: "sm", md: "xs" }} mt={4} mb={4}>
              {label}
            </Heading>
            <Stack
              size={{ base: "sm", sm: "xs", md: "xs" }}
              fontSize={{ base: "16px", sm: "14px", md: "14px" }}
            >
              <Flex
                gap={1}
                w={["full", "75%"]}
                flexWrap="wrap"
                flexDir="column"
              >
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
      </Flex>
    </>
  );
};
