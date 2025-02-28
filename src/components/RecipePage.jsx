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
  const bebasFont = "Bebas Neue, sans-serif";

  return (
    <Center
      bgColor="whitesmoke"
      h={{ base: "100vh", sm: "110vh", md: "160vh", "2xl": "180vh" }}
      flexDirection="column"
      minW={"100%"}
    >
      <Center border={"1px solid #0f0f0f"} p={{ base: 0, sm: 2 }}>
        <Flex
          bgColor="gray.900"
          justifyContent="center"
          alignItems="center"
          h="100%"
          w={{ base: "100%", md: "100%", "2xl": "100%" }}
          px={{ base: 0, sm: 0, md: 0, "2xl": "300px" }}
          paddingTop={{ base: "50px", sm: "80px", md: "70px" }}
          paddingBottom={{ base: "90px", sm: "100px", md: "100px" }}
        >
          <Card
            bgColor="whitesmoke"
            borderRadius="xl"
            w={{ base: "90%", sm: "70%", md: "60%", "2xl": "100%" }}
            h={{ base: "80vh", sm: "80vh", md: "80%" }}
          >
            <CardBody
              overflow="auto"
              m={3}
              w={{ base: "90%", sm: "100%", md: "95%", "2xl": "600px" }}
              h={{ base: "80vh", sm: "80vh", md: "80%" }}
            >
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
                    fontFamily={bebasFont}
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
        bottom={{ base: "6%", sm: "8%", md: "12%", "2xl": "7%" }}
        fontSize={{ base: "14px", sm: "14px", md: "16px" }}
        w="fit-content"
        bgColor="#D4A759"
        color="gray.900"
        onClick={() => clickFn()}
      >
        Back to Home Page
      </Button>
    </Center>
  );
};
//comment
