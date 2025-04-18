import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSearch } from "./components/RecipeSearch";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";
import { Navigation } from "./components/Navigation";
import { NavigationFooter } from "./components/NavigationFooter";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpoint,
} from "@chakra-ui/react";

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

  //Random Recipe
  const handleRandomRecipe = () => {
    if (filteredRecipes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    setSelectedItem(filteredRecipes[randomIndex]);
    setIsHomePage(false);
  };
  //Only random Vegan or Vegetarian
  const handleRandomRecipeByLabel = () => {
    const filteredByLabel = filteredRecipes.filter((item) => {
      const healthLabels = item.recipe.healthLabels || [];
      return (
        healthLabels.some((label) => label.toLowerCase() === "vegan") ||
        healthLabels.some((label) => label.toLowerCase() === "vegetarian")
      );
    });

    if (filteredByLabel.length === 0) {
      console.log("No recipe found with Vegan or Vegetarian labels");
    }

    const randomIndex = Math.floor(Math.random() * filteredByLabel.length);
    setSelectedItem(filteredByLabel[randomIndex]);
    setIsHomePage(false);
  };

  //FONT ORBITRON
  const orbitronFontFamily = "Orbitron, sans-serif";
  const robotoSlabFont = "Roboto Slab, serif";
  const bebasFont = "Bebas Neue, sans-serif";

  return (
    <Box bgColor={"whitesmoke"} w={"100%"} h={"100%"}>
      <Navigation clickFn={handleBackToHome} />
      <Box
        w={"100%"}
        display={"flex"}
        align={"flex-start"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Flex>
          <Image
            src={recipeImage}
            objectFit={"cover"}
            alt="image of kitchen counter"
            minWidth={"99vw"}
            maxH={{ base: "100%", sm: "100%", md: "80vh", "2xl": "85vh" }}
            position="relative"
            top={{ base: 0, sm: 0, md: 0, "2xl": "1%" }}
            p={{ base: 2, sm: 4, md: 6, "2xl": 0 }}
            py={{ "2xl": 2 }}
            borderTop="25px solid #0f0f0f"
            borderBottom="10px solid #0f0f0f"
          />

          <Heading
            display={"flex"}
            flexDir={"row"}
            flexWrap={"wrap"}
            textAlign={"left"}
            justifyContent={"flex-start"}
            as="h1"
            fontFamily={orbitronFontFamily}
            fontWeight={600}
            fontSize={["28px", "4xl", "90px"]}
            w={{ base: "45%", sm: "40%", md: "45%", "2xl": "30%" }}
            position={"absolute"}
            top={{ base: "17%", sm: "35%", md: "38%", lg: "42%", xl: "42%" }}
            left={{ base: "4%", sm: "5%", md: "6%", lg: "6%", xl: "5.5%" }}
            bg="rgba(0, 0, 0, 0.02)"
            zIndex={100}
            color={"gray.900"}
          >
            {header}
          </Heading>
          <Box
            display={"flex"}
            flexDir={"row"}
            flexWrap={"wrap"}
            w={{ base: 0, sm: "70%", md: "100%" }}
            maxWidth={{ base: 0, sm: "400px", md: "500px" }}
            position={"absolute"}
            top={{ base: "50%", sm: "60%", md: "70%", lg: "70%", xl: "70%" }}
            left={{ base: "4%", sm: "5%", md: "6.5%", lg: "6%", xl: "6%" }}
            textAlign={"flex-start"}
          >
            <Text
              fontFamily={robotoSlabFont}
              fontWeight={400}
              fontSize={{
                base: "0px",
                sm: "12px",
                md: "16px",
                lg: "16px",
                "2xl": "18px",
              }}
              color={"gray.900"}
              sx={{ textShadow: "0.5px 0.5px 1px gray" }}
            >
              {" "}
              Staring at your kitchen, unsure what to cook? Not sure if you want
              something comforting or adventurous? No worries – let us surprise
              you with a random recipe and take the guesswork out of dinner
              tonight. Ready for a culinary adventure? Let’s get cooking!
            </Text>
          </Box>
          {/* RANDOM RECIPES Buttons*/}
          <Flex
            display={"flex"}
            flexDir={"row"}
            justifyContent={"start"}
            alignContent={"center"}
            alignItems={"center"}
            width={{ base: "90%", sm: "70%", md: "70%", lg: "70%", xl: "70%" }}
            position={"absolute"}
            zIndex={100}
            top={{ base: "72%", sm: "81%", md: "86%", lg: "85%", "2xl": "90%" }}
            left={{ base: "4%", sm: "5%", md: "6%", lg: "6%", xl: "6%" }}
            gap={{
              base: "55px",
              sm: "40px",
              md: "50px",
              lg: "60px",
              xl: "60px",
            }}
          >
            <Button
              fontSize={{ base: "12px", sm: "14px", md: "18px", "2xl": "16px" }}
              fontFamily={bebasFont}
              fontWeight={400}
              color={"#0f0f0f"}
              px={{ base: "30px", sm: "50px", "2xl": "70px" }}
              py={{ base: "5px", sm: "3px", "2xl": "20px" }}
              onClick={handleRandomRecipe}
              bgColor="#D83F14"
              _hover={{
                color: "#0f0f0f",
                bgColor: "transparent",
                border: "2px solid #0f0f0f",
              }}
            >
              SURPRISE ME!
            </Button>
            <Button
              fontSize={{ base: "12px", sm: "14px", md: "18px", "2xl": "16px" }}
              fontFamily={bebasFont}
              fontWeight={400}
              color={"#0f0f0f"}
              px={{ base: "20px", sm: "50px", "2xl": "70px" }}
              py={{ base: "5px", sm: "3px", "2xl": "20px" }}
              onClick={handleRandomRecipeByLabel}
              bgColor="#A5B58A"
              border="1px solid #0f0f0f"
              _hover={{
                color: "#0f0f0f",
                bgColor: "transparent",
                border: "2px solid #0f0f0f",
              }}
            >
              VEGGIE SURPRISE!
            </Button>
          </Flex>
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
      <NavigationFooter />
    </Box>
  );
};
