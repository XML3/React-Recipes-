import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

export const RecipeItemCard = ({ item, clickFn }) => {
  const { image, label, url } = item.recipe;
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
        </CardBody>
      </Card>
    </>
  );
};
