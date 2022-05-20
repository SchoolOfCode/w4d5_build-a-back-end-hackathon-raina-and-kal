// imports
import express from "express";
const router = express.Router();
import recipes from "../libs/recipes-data.js";

// import handling functions
import { getRecipeByID } from "../models/recipe-models.js";
import { getRecipes } from "../models/recipe-models.js";
import { createRecipe } from "../models/recipe-models.js";
import { updateRecipeById } from "../models/recipe-models.js";

// Get request by ID
router.get("/:id", function (req, res) {
  const responseObject = getRecipeByID(req.params.id);
  res.json(responseObject);
});

// POST handler
router.post("/", function (req, res) {
  const responseObject = createRecipe(req.body);
  res.json(responseObject);
});

// Put request to replace whole object
router.put("/", function (req, res) {
  const responseObject = updateRecipeById(req.body);
  res.json(responseObject);
});

// Delete request to replace whole object
router.delete("/", function (req, res) {
  let deleteId = Number(req.body.id);
  for (let i = 0; i < recipes.length; i++) {
    if (deleteId === recipes[i].id) {
      let deletedRecipe = recipes[i];
      recipes.splice([i], [i]);
      const responseObject = {
        success: "true",
        message: `Deleted recipe with ID: ${deleteId}`,
        data: recipes,
        deletedRecipe,
      };
      res.json(responseObject);
    }
  }
});

// Default handler for /recipes
router.get("/", function (req, res) {
  const responseObject = getRecipes();
  res.json(responseObject);
});

//export
export { router as recipesRouter };
