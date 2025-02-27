import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { Box, Center, Heading } from "@chakra-ui/react";

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
      //Change item to originalItems, to avoid going back to filterd items
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
  const robotoSlabFont = "Roboto Slab, serif";

  return (
    <Center flexDir="column" gap={4} mt={"5rem"} mb={1}>
      <Heading
        as="h2"
        fontSize={{ base: "16px", sm: "24px", md: "30px" }}
        fontFamily={orbitronFontFamily}
        fontWeight={500}
        letterSpacing={1.2}
        color={"gray.900"}
      >
        Search for a recipe:
      </Heading>
      <TextInput
        changeFn={handleChange}
        w={{ base: "95%", sm: "85vw", md: "50vw" }}
        h={{ base: "3.3vh", sm: "4vh", md: "5vh" }}
        mb={{ base: "50px", sm: "75px", md: "100px" }}
        borderColor={"#0f0f0f"}
        fontFamily={robotoSlabFont}
        placeHolder={"Search for recipes here..."}
      />
    </Center>
  );
};
