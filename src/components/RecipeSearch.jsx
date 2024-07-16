import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { Center, Heading } from "@chakra-ui/react";

//Feedback from Winc: include the new `originalItems` passed in the RecipeSearch in App as prop.  This fixes the search bug
export const RecipeSearch = ({
  items,
  handleFilteredRecipes,
  originalItems,
}) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setSearchField(searchValue);

    if (searchValue === "") {
      //Change item to originalItems, so it does not go back to the filterd items
      handleFilteredRecipes(originalItems);
    } else {
      //filter Recipes (searchField)
      const matchedRecipes = items.filter((item) => {
        const { label, dietLabels, cautions, healthLabels } = item.recipe;
        return (
          label.toLowerCase().includes(searchValue.toLowerCase()) ||
          dietLabels.some((label) =>
            label.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
          cautions.some((caution) =>
            caution.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
          healthLabels.some((label) =>
            label.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      });
      //function call from App
      handleFilteredRecipes(matchedRecipes);
    }
  };

  //FONT ORBITRON
  const orbitronFontFamily = "Orbitron, sans-serif";
  const orbitronWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  return (
    <Center flexDir="column" gap={4} mt={8} mb={6}>
      <Heading
        as="h2"
        fontSize={{ base: "22px", sm: "24px", md: "36px" }}
        fontFamily={orbitronFontFamily}
        fontWeight={orbitronWeight.medium}
      >
        Search for a recipe:
      </Heading>
      <TextInput
        changeFn={handleChange}
        w={{ base: 200, sm: 250, md: 400 }}
        mb={{ base: "50px", sm: "75px", md: "100px" }}
      />
    </Center>
  );
};
