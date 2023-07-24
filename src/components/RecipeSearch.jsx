import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipeSearch = ({ data, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((item) => {
    const { label, dietLabels, cautions, healthLabels } = item.recipe;
    return label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for a recipe:</label>
      <TextInput changeFn={handleChange} w={200} mb={8} />
      <RecipeListPage clickFn={clickFn} items={matchedRecipes} />
    </>
  );
};
