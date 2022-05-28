// imports
import express from "express";
const router = express.Router();
import recipes from "../libs/recipes-data.js";

// import handling functions
import { getRecipeById, getRecipes, createRecipe, updateRecipeById, deleteRecipeById } from "../models/recipe-models.js";

// Get request by ID
router.get("/:id", function (req, res) {
  const responseObject = getRecipeById(req.params.id);
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
  const responseObject = deleteRecipeById(req.body.id)
  res.json(responseObject);
});

// Default handler for /recipes
router.get("/", function (req, res) {
  const responseObject = getRecipes();
  res.json(responseObject);
});

//export
export { router as recipesRouter };
