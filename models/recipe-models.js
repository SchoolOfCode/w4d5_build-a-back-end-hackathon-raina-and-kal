import recipes from "../libs/recipes-data.js";


// GET ALL RECIPES
export function getRecipes() {
   
}




// GET A RECIPE BY ID
export function getRecipeByID(id) {
  id = Number(id); // Need to convert to a number
  for (let i = 0; i < recipes.length; i++) {
      if (id === recipes[i].id) {
       const responseObject = {
          success: "true",
          message: `This is recipe with ID: ${id}`,
          data: recipes[i],
       };
    return responseObject;
    }
  }
}

// CREATE A RECIPE



export function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID



export function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID



export function deleteRecipeByID(id) {}
