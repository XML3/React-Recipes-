import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSearch } from "./components/RecipeSearch";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";
import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { Navigation } from "./components/Navigation";

export const App = () => {
  const header = "Recipe Checker";
  const recipeImage = "./img/recipe_home.jpg";

  // Your state code here
  const [selectedItem, setSelectedItem] = useState();
  //new state for filtered recipes
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

  const [isHomePage, setIsHomePage] = useState(true);

  // handle filter recipe from RecipeSearch
  const handleFilteredRecipes = (recipes) => {
    setFilteredRecipes(recipes);
    setIsHomePage(false);
  };

  const handlleSelectedRecipes = (recipe) => {
    setSelectedItem(recipe);
    setIsHomePage(false);
  };

  const handleBackToHome = () => {
    setSelectedItem(null);
    setIsHomePage(true);
  };

  //FONT ORBITRON
  const orbitronFontFamily = "Orbitron, sans-serif";
  const robotoSlabFont = "Roboto Slab, serif";

  return (
    <Box bgColor={"whitesmoke"} w={"100%"} h={"100%"}>
      <Navigation />
      <Box
        w={"100%"}
        // bgColor={"gray.900"}
        display={"flex"}
        align={"flex-end"}
        justifyContent={"center"}
      >
        <Flex display={"flex"} align={"flex-end"} justifyContent={"flex-start"}>
          <Image
            src={recipeImage}
            objectFit={"cover"}
            alt="image of kitchen counter"
            minWidth={"100%"}
            maxH={{ base: "100%", sm: "100%", md: "80vh", "2xl": "85vh" }}
            position="relative"
            top={{ base: 0, sm: 0, md: 0, "2xl": "1%" }}
            p={{ base: 2, sm: 4, md: 6, "2xl": 0 }}
            py={{ "2xl": 2 }}
            borderTop="25px solid #0f0f0f"
            borderBottom="10px solid #0f0f0f"

            // mixBlendMode={"exclusion"}
          />

          <Heading
            as="h1"
            fontFamily={orbitronFontFamily}
            fontWeight={900}
            fontSize={["28px", "4xl", "100px"]}
            position={"relative"}
            right={"90%"}
            bottom={{ base: "0.5rem", sm: "1.5rem", md: "3rem" }}
            bg="rgba(0, 0, 0, 0.02)"
            color={"gray.900"}
            zIndex={100}
          >
            {header}
          </Heading>
        </Flex>
      </Box>

      {isHomePage && (
        <Box textAlign="center" maxW="80%" mx="auto" mb={2}>
          <Heading
            as="h1"
            fontSize={{ base: "20px", sm: "28px", md: "36px" }}
            fontFamily="Orbitron, sans-serif"
            fontWeight={600}
            letterSpacing={1.5}
            color="gray.900"
            mb={2}
            mt={"4rem"}
          >
            Find Your Perfect Recipe
          </Heading>
          <Box
            fontSize={{ base: "14px", sm: "16px", md: "18px" }}
            color="gray.700"
            fontFamily={robotoSlabFont}
          >
            Looking for something delicious? Search by name, diet type, health
            benefits, or ingredients to discover the perfect recipe for any
            occasion.
          </Box>
        </Box>
      )}

      <Box>
        <Center
          w={"100%"}
          flexDir="column"
          bgColor="whitesmoke"
          color="gray.900"
        >
          {selectedItem ? (
            <RecipePage item={selectedItem} clickFn={handleBackToHome} />
          ) : (
            <>
              <RecipeSearch
                items={filteredRecipes}
                clickFn={handlleSelectedRecipes}
                originalItems={data.hits}
                handleFilteredRecipes={handleFilteredRecipes}
              />
              <RecipeListPage
                selectedItem={selectedItem}
                clickFn={handlleSelectedRecipes}
                items={filteredRecipes}
              />
            </>
          )}
        </Center>
      </Box>
    </Box>
  );
};
