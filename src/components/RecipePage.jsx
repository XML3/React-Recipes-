import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
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
  } = item.recipe;

  const isVegetarian = healthLabels.includes("Vegetarian");
  const isVegan = healthLabels.includes("Vegan");

  return (
    <>
      <Center bgColor="gray.900" h="100vh" flexDirection="column">
        <Heading m={6} fontWeight="bold" fontSize="6xl" color="whitesmoke">
          Recipe Checker
        </Heading>
        <Card bgColor="whitesmoke" borderRadius="xl" w="3xl" h="3xl">
          <CardBody>
            <Image h="sm" w="50%" src={image} borderRadius="xl" />
            <Stack mt="6" spacing="3">
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
            </Stack>
          </CardBody>
        </Card>
        <Button
          mt={6}
          w="fit-content"
          bgColor="yellow.300"
          onClick={() => clickFn()}
        >
          Back to Recipe Home Page
        </Button>
      </Center>
    </>
  );
};
