import { RecipeListPage } from "./pages/RecipeListPage";
// import { RecipeSearch } from "./components/RecipeSearch";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedItem, setSelectedItem] = useState();

  return (
    <>
      {selectedItem ? (
        <RecipePage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <RecipeListPage selectedItem={selectedItem} clickFn={setSelectedItem} />
      )}
      {/* <RecipeSearch data={data} clickFn={setSelectedItem} /> */}
      {/* Recipe Search is rendering the page twice, chek and fix */}
    </>
  );
};
