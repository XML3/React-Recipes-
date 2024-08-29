import {
  Center,
  Image,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

export const RecipePage = ({ item, clickFn }) => {
  const {
    image,
    label,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
    ingredientLines,
    totalTime,
    //destructure, new variable named servings
    yield: servings,
    totalNutrients,
  } = item.recipe;

  const isVegetarian = healthLabels.includes("Vegetarian");
  const isVegan = healthLabels.includes("Vegan");

  //new object containing desired nutrients
  const filteredTotalNutrients = {
    ENERC_KCAL: totalNutrients.ENERC_KCAL,
    PROCNT: totalNutrients.PROCNT,
    FAT: totalNutrients.FAT,
    CHOCDF: totalNutrients.CHOCDF,
    CHOLE: totalNutrients.CHOLE,
    NA: totalNutrients.NA,
  };

  return (
    <Center bgColor="gray.900" h="100vh" flexDirection="column">
      <Center>
        <Flex
          bgColor="gray.900"
          justifyContent="center"
          alignItems="center"
          h="calc(100vh - 100px)"
          w="100%"
        >
          <Card
            bgColor="whitesmoke"
            borderRadius="xl"
            w={{ base: "90%", sm: "70%", md: "33vw" }}
            h={{ base: "80vh", sm: "80vh", md: "80vh" }}
            mt={"3rem"}
          >
            <CardBody overflow="auto" m={3}>
              <Flex align={"center"} justifyContent={"center"}>
                <Image
                  h="200px"
                  w={{ base: "100%", sm: "75%", md: "50%" }}
                  src={image}
                  borderRadius="xl"
                />
              </Flex>

              <Box mt="6" spacing="3">
                <Flex justifyContent="center">
                  <Heading size="sm" mt={4} mb={4}>
                    {label}
                  </Heading>
                </Flex>

                <Text fontSize={{ base: "20px", sm: "18px", md: "16px" }}>
                  {mealType}
                </Text>
                <Text fontSize={{ base: "20px", sm: "18px", md: "16px" }}>
                  {dishType}
                </Text>
                <Text
                  mt={4}
                  fontSize={{ base: "20px", sm: "18px", md: "16px" }}
                  fontWeight="bold"
                >
                  Health Labels:
                </Text>
                <Text mb={3} fontSize="16px">
                  {healthLabels}
                </Text>

                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                >
                  <Box mb={{ base: 6, md: 0 }}>
                    {isVegan ? (
                      <Text bgColor="lime" fontSize="16px">
                        Vegan
                      </Text>
                    ) : isVegetarian ? (
                      <Text bgColor="lime" fontSize="16px">
                        Vegetarian
                      </Text>
                    ) : null}

                    <Text
                      mt={4}
                      fontSize={{ base: "20px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Diet Labels:
                    </Text>
                    <Text bgColor="blue.200" fontSize="16px">
                      {dietLabels}
                    </Text>

                    <Text
                      mt={4}
                      fontSize={{ base: "20px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Caution:
                    </Text>
                    <Text bgColor="pink.400" mb={6} fontSize="16px">
                      {cautions}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mt={4}
                      fontSize={{ base: "20px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Total Cooking Time:
                    </Text>
                    <Text fontSize="16px"> {totalTime} minutes</Text>

                    <Text
                      mt={4}
                      fontSize={{ base: "20px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Servings:
                    </Text>
                    <Text fontSize="16px"> {servings}</Text>
                  </Box>
                </Flex>

                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    {/* map through ingredientLines and target index of */}
                    <Text
                      mt={4}
                      fontSize={{ base: "20px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Ingredients:
                    </Text>
                    <Text fontSize="16px">
                      <ul>
                        {ingredientLines.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mt={4}
                      fontSize={{ base: "20px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Total Nutrients:
                    </Text>
                    <Text fontSize="16px">
                      {/* convert totalNutrients object into an array of key-value pairs */}
                      <ul>
                        {/* iterate through each key-value pair in the array/destructure the key-value pair into separate variables */}
                        {Object.entries(filteredTotalNutrients).map(
                          ([key, value]) => (
                            <li key={key}>
                              {value.label}: {value.quantity.toFixed(2)}{" "}
                              {value.unit}
                            </li>
                          )
                        )}
                      </ul>
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </CardBody>
          </Card>
        </Flex>
      </Center>
      <Button
        mt={6}
        w="fit-content"
        bgColor="yellow.300"
        color="gray.900"
        onClick={() => clickFn()}
      >
        Back to Recipe Home Page
      </Button>
    </Center>
  );
};
//comment
