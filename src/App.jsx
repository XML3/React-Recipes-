import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSearch } from "./components/RecipeSearch";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";
import { Box, Center, Heading, Image } from "@chakra-ui/react";
import recipe from "/img/recipe_bowl.png";

export const App = () => {
  const header = "Recipe Checker";
  // Your state code here
  const [selectedItem, setSelectedItem] = useState();
  //new state for filtered recipes
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

  // handle filter recipe from RecipeSearch
  const handleFilteredRecipes = (recipes) => {
    setFilteredRecipes(recipes);
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
    <Box bgColor={"gray.900"} w={"100%"} h={"100%"}>
      <Box
        w={{ base: "50%", sm: "25%", md: "10%" }}
        h={"auto"}
        bgColor={"gray.900"}
        position={"relative"}
        top={{ base: "10px", sm: "50", md: "100px" }}
        left={{ base: "25%", sm: "10%", md: "20%" }}
        mb={{ base: "1rem", sm: "1rem", md: 0 }}
      >
        <Image
          src={recipe}
          alt="wisk and bowl"
          w={{ base: "75px", sm: "75%", md: "200px" }}
          h={"auto"}
        />
      </Box>

      <Center
        w={"100%"}
        h="150hv"
        flexDir="column"
        bgColor="gray.900"
        color="whitesmoke"
      >
        <Heading
          as="h1"
          fontFamily={orbitronFontFamily}
          fontWeight={orbitronWeight.bold}
          fontSize={["3xl", "4xl", "6xl"]}
          position={"relative"}
          left={{ base: "10%", sm: "10%", md: 0 }}
        >
          {header}
        </Heading>

        {selectedItem ? (
          <RecipePage item={selectedItem} clickFn={setSelectedItem} />
        ) : (
          <>
            <RecipeSearch
              items={filteredRecipes}
              clickFn={setSelectedItem}
              //feedback from Winc: fixing search bug, the following will bring the items back when back-spacing
              originalItems={data.hits}
              handleFilteredRecipes={handleFilteredRecipes}
            />
            <RecipeListPage
              selectedItem={selectedItem}
              clickFn={setSelectedItem}
              items={filteredRecipes}
            />
          </>
        )}
      </Center>
    </Box>
  );
};
