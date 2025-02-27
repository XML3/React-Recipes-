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
      <Flex alignItems="center" justify="center" px={4} py={8}>
        <Card
          bgColor="whitesmoke"
          borderRadius="xl"
          w={{ base: "90%", sm: "95%", md: "90%", "2xl": "90%" }}
          h="100%"
          onClick={() => clickFn(item)}
          cursor="pointer"
          _hover={{ transform: "scale(1.01)" }}
        >
          <CardBody>
            <Flex alignItems="center" justify="center">
              <Image
                objectFit={"cover"}
                h={{ base: "200px", sm: "200px", md: "200px", "2xl": "250px" }}
                w={{ base: "250px", sm: "250px", md: "300px", "2xl": "300px" }}
                border="1px solid black"
                p={2}
                src={image}
                borderRadius="xl"
                alt={label}
              />
            </Flex>
            <Heading size={{ base: "xs", sm: "14px", md: "xs" }} mt={4} mb={4}>
              {label}
            </Heading>
            <Stack
              size={{ base: "sm", sm: "xs", md: "xs" }}
              fontSize={{ base: "14px", sm: "14px", md: "14px", "2xl": "14px" }}
            >
              <Flex
                gap={1}
                w={["full", "100%"]}
                flexWrap="wrap"
                flexDir="column"
              >
                <Text py={"2px"} px={"10px"} fontWeight={"700"}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    View Recipe
                  </a>
                </Text>
                {dietLabels && (
                  <Text bgColor="#6A92A3" py={"2px"} px={"10px"}>
                    Diet Label: {dietLabels}
                  </Text>
                )}
                {cautions && (
                  <Text
                    bgColor="#e84213"
                    fontWeight="600"
                    py={"2px"}
                    px={"10px"}
                  >
                    Caution: {cautions}
                  </Text>
                )}
                {isVegan ? (
                  <Text bgColor="#98A882" py={"2px"} px={"10px"}>
                    Vegan
                  </Text>
                ) : isVegetarian ? (
                  <Text bgColor="#98A882">Vegetarian</Text>
                ) : null}
                <Text py={"2px"} px={"10px"}>
                  Meal Type: {mealType}
                </Text>
                <Text py={"2px"} px={"10px"}>
                  Dish Type: {dishType}
                </Text>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};
