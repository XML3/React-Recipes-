import { useState } from "react";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ items, clickFn, handleFilteredRecipes }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);

    //filter Recipes (searchField)
    const matchedRecipes = items.filter((item) => {
      const { label, dietLabels, cautions, healthLabels } = item.recipe;
      return label.toLowerCase().includes(searchField.toLowerCase());
    });
    //function call from App
    handleFilteredRecipes(matchedRecipes);
  };

  return (
    <>
      <label>Search for a recipe:</label>
      <TextInput changeFn={handleChange} w={200} mb={8} />
    </>
  );
};
