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
    url,
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
          <Card bgColor="whitesmoke" borderRadius="xl" w="3xl" h="3xl">
            <CardBody overflow="auto">
              <Image h="sm" w="50%" src={image} borderRadius="xl" />
              <Box mt="6" spacing="3">
                <Heading size="md" mt={4}>
                  {label}
                </Heading>

                <Text>{mealType}</Text>
                <Text>{dishType}</Text>
                <Text>Health Labels: {healthLabels}</Text>
                <Text>Diet Labels: {dietLabels}</Text>
                <Text bgColor="pink.400">Caution: {cautions}</Text>

                {isVegan ? (
                  <Text bgColor="lime">Vegan</Text>
                ) : isVegetarian ? (
                  <Text bgColor="lime">Vegetarian</Text>
                ) : null}

                {/* map through ingredientLines and target index of */}
                <Text mt={4} fontSize="xl" fontWeight="bold">
                  Ingredients:
                </Text>
                <ul>
                  {ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>

                <Text mt={4}>Total Cooking Time: {totalTime} minutes</Text>
                <Text>Servings: {servings}</Text>

                <Text mt={4} fontSize="xl" fontWeight="bold">
                  Total Nutrients:
                </Text>
                {/* convert totalNutrients object into an array of key-value pairs */}
                <ul>
                  {/* iterate through each key-value pair in the array/destructure the key-value pair into separate variables */}
                  {Object.entries(filteredTotalNutrients).map(
                    ([key, value]) => (
                      <li key={key}>
                        {value.label}: {value.quantity.toFixed(2)} {value.unit}
                      </li>
                    )
                  )}
                </ul>
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
