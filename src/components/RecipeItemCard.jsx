import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

export const RecipeItemCard = ({ item, clickFn }) => {
  return (
    <>
      <Card
        borderRadius="xl"
        w="sm"
        h="30rem"
        onClick={() => clickFn(item)}
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
      >
        <CardBody>
          <Image h={64} w="sm" src={item.image} borderRadius="xl" />
        </CardBody>
      </Card>
    </>
  );
};
