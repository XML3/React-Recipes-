import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSearch } from "./components/RecipeSearch";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedItem, setSelectedItem] = useState();

  //new state for filtered recipes
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);
  // handle filter recipe from RecipeSearch
  const handleFilteredRecipes = (recipes) => {
    setFilteredRecipes(recipes);
  };
  return (
    <>
      {selectedItem ? (
        <RecipePage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <>
          <RecipeSearch
            data={data}
            clickFn={setSelectedItem}
            handleFilteredRecipes={handleFilteredRecipes}
          />
          <RecipeListPage
            selectedItem={selectedItem}
            clickFn={setSelectedItem}
            items={filteredRecipes}
          />
        </>
      )}
    </>
  );
};
