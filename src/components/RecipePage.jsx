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
    <Center bgColor="gray.900" h="150vh" flexDirection="column" minW={"100%"}>
      <Box
        position={"relative"}
        bottom={{ base: "19%", sm: "20%", md: "8%", "2xl": "7.8%" }}
        borderTop={"15px solid whitesmoke"}
        w={"100%"}
      ></Box>
      <Center>
        <Flex
          bgColor="gray.900"
          justifyContent="center"
          alignItems="center"
          h="100%"
          w={{ base: "100%", "2xl": "75%" }}
        >
          <Card
            bgColor="whitesmoke"
            borderRadius="xl"
            w={{ base: "90%", sm: "70%", md: "60%", "2xl": "50%" }}
            h={{ base: "80vh", sm: "80vh", md: "80%" }}
            position={"relative"}
            bottom={{ base: "22%", sm: "20%", md: "10%", "2xl": "3%" }}
          >
            <CardBody overflow="auto" m={3}>
              <Flex align={"center"} justifyContent={"center"}>
                <Image
                  objectFit={"cover"}
                  h={{
                    base: "200px",
                    sm: "250px",
                    md: "350px",
                    "2xl": "400px",
                  }}
                  w={{
                    base: "300px",
                    sm: "350px",
                    md: "550px",
                    "2xl": "550px",
                  }}
                  src={image}
                  border="1px solid black"
                  p={2}
                  borderRadius="xl"
                />
              </Flex>

              <Box spacing="3">
                <Flex justifyContent="center">
                  <Heading
                    size="sm"
                    mt={{ base: 4, sm: 5, md: 6 }}
                    mb={{ base: 7, sm: 2, md: 4 }}
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "24px",
                      "2xl": "32px",
                    }}
                    fontWeight={800}
                  >
                    {label}
                  </Heading>
                </Flex>

                <Text
                  fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                  fontWeight={600}
                >
                  {mealType}
                </Text>
                <Text
                  fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                  fontWeight={600}
                >
                  {dishType}
                </Text>
                <Text
                  mt={4}
                  mb={2}
                  fontSize={{ base: "16px", sm: "18px", md: "16px" }}
                  fontWeight="bold"
                >
                  Health Labels:
                </Text>
                <Text mb={3} fontSize={{ base: "14px", md: "16px" }}>
                  {healthLabels}
                </Text>

                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                >
                  <Box mb={{ base: 6, md: 0 }}>
                    {isVegan ? (
                      <Text
                        bgColor="#98A882"
                        fontSize={{ base: "14px", sm: "14px", md: "16px" }}
                        py={"2px"}
                        px={"10px"}
                      >
                        Vegan
                      </Text>
                    ) : isVegetarian ? (
                      <Text
                        bgColor="#98A882"
                        fontSize={{ base: "14px", sm: "14px", md: "16px" }}
                        py={"2px"}
                        px={"10px"}
                      >
                        Vegetarian
                      </Text>
                    ) : null}

                    <Text
                      mt={4}
                      fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Diet Labels:
                    </Text>
                    <Text
                      bgColor="#6A92A3"
                      fontSize={{ base: "14px", sm: "14px", md: "16px" }}
                      py={"2px"}
                      px={"10px"}
                    >
                      {dietLabels}
                    </Text>

                    <Text
                      mt={4}
                      fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Caution:
                    </Text>
                    <Text
                      bgColor="#e84213"
                      mb={6}
                      fontSize={{ base: "14px", sm: "14px", md: "16px" }}
                      py={"2px"}
                      px={"10px"}
                      fontWeight={600}
                    >
                      {cautions}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      mt={4}
                      fontSize={{ base: "16px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Total Cooking Time:
                    </Text>
                    <Text fontSize={{ base: "14px", md: "16px" }}>
                      {" "}
                      {totalTime} minutes
                    </Text>

                    <Text
                      mt={4}
                      fontSize={{ base: "16px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Servings:
                    </Text>
                    <Text fontSize={{ base: "14px", sm: "14px", md: "16px" }}>
                      {" "}
                      {servings}
                    </Text>
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
                      fontSize={{ base: "16px", sm: "18px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Ingredients:
                    </Text>
                    <Text fontSize={{ base: "14px", sm: "14px", md: "16px" }}>
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
                      fontSize={{ base: "16px", sm: "16px", md: "16px" }}
                      fontWeight="bold"
                    >
                      Total Nutrients:
                    </Text>
                    <Text fontSize={{ base: "14px", sm: "14px", md: "16px" }}>
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
        position={"relative"}
        bottom={{ base: "9%", sm: 0, md: "12%", "2xl": "7%" }}
        w="fit-content"
        bgColor="#D4A759"
        color="gray.900"
        onClick={() => clickFn()}
      >
        Back to Recipe Home Page
      </Button>
    </Center>
  );
};
//comment
