import recipes from "../libs/recipes-data.js";

// GET ALL RECIPES
export function getRecipes() {
  return {
    success: "true",
    message: `This is all of the recipes`,
    data: recipes,
  };
}

// GET A RECIPE BY ID
export function getRecipeById(id) {
  id = Number(id); // Need to convert to a number
  for (let i = 0; i < recipes.length; i++) {
    if (id === recipes[i].id) {
      return {
        success: "true",
        message: `This is recipe with ID: ${id}`,
        data: recipes[i],
      };
    }
  }
}

// CREATE A RECIPE

export function createRecipe(userInput) {
  recipes.push(userInput);
  console.log(recipes);
  return {
    success: "true",
    message: `This is the new list of recipes`,
    data: recipes,
  };
}

// UPDATE A RECIPE BY ID

export function updateRecipeById(update) {
  let updateId = Number(update.id);
  for (let i = 0; i < recipes.length; i++) {
    if (updateId === recipes[i].id) {
      recipes[i] = update;
      return {
        success: "true",
        message: `Replaced recipe with ID: ${updateId}`,
        data: recipes,
      };
    }
  }
}

// DELETE A RECIPE BY ID
export function deleteRecipeById(id) {
  id = Number(id);
  for (let i = 0; i < recipes.length; i++) {
    if (id === recipes[i].id) {
        let deletedRecipe = recipes[i];
        recipes.splice([i], [i]);
        return {
        success: "true",
        message: `Deleted recipe with ID: ${id}`,
        data: recipes, deletedRecipe,
       };
    }
  }
}
