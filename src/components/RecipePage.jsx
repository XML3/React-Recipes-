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
  //console.log(filteredTotalNutrients);
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
            w={{ base: "90%", md: "xl" }}
            h="2xl"
            mt={"3rem"}
          >
            <CardBody overflow="auto" m={3}>
              <Image h="md" w="100%" src={image} borderRadius="xl" />

              <Box mt="6" spacing="3">
                <Flex justifyContent="center">
                  <Heading size="lg" mt={4} mb={4}>
                    {label}
                  </Heading>
                </Flex>

                <Text>{mealType}</Text>
                <Text>{dishType}</Text>
                <Text mt={4} fontSize="xl" fontWeight="bold">
                  Health Labels:
                </Text>
                <Text mb={3}>{healthLabels}</Text>

                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                >
                  <Box mb={{ base: 6, md: 0 }}>
                    {isVegan ? (
                      <Text bgColor="lime">Vegan</Text>
                    ) : isVegetarian ? (
                      <Text bgColor="lime">Vegetarian</Text>
                    ) : null}

                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Diet Labels:
                    </Text>
                    <Text bgColor="blue.200">{dietLabels}</Text>

                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Caution:
                    </Text>
                    <Text bgColor="pink.400" mb={6}>
                      {cautions}
                    </Text>
                  </Box>

                  <Box>
                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Total Cooking Time:
                    </Text>
                    <Text> {totalTime} minutes</Text>

                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Servings:
                    </Text>
                    <Text> {servings}</Text>
                  </Box>
                </Flex>

                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    {/* map through ingredientLines and target index of */}
                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Ingredients:
                    </Text>
                    <ul>
                      {ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </Box>

                  <Box>
                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Total Nutrients:
                    </Text>
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
