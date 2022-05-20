// imports
import express from "express";
const router = express.Router();
import recipes from "../libs/recipes-data.js";

// Get request by ID
router.get("/:id", function (req, res) {
  let id = Number(req.params.id); // Need to convert to a number
  for (let i = 0; i < recipes.length; i++) {
    if (id === recipes[i].id) {
      const responseObject = {
        success: "true",
        message: `This is recipe with ID: ${id}`,
        data: recipes[i],
      };
      res.json(responseObject);
    }
  }
});

// POST handler
router.post("/", function (req, res) {
  let userInput = req.body;
  recipes.push(userInput);
  console.log(recipes);
  const responseObject = {
    success: "true",
    message: `This is the new list of recipes`,
    data: recipes,
  };
  res.json(responseObject);
});

// Default handler for /recipes
router.get("/", function (req, res) {
  const responseObject = {
    success: "true",
    message: `This is all of the recipes`,
    data: recipes,
  };
  res.json(responseObject);
});

// Put request to replace whole object
router.put("/", function (req, res) {
  let update = req.body;
  let updateId = Number(update.id);
  for (let i = 0; i < recipes.length; i++) {
    if (updateId === recipes[i].id) {
      recipes[i] = update;
      const responseObject = {
        success: "true",
        message: `Replaced recipe with ID: ${updateId}`,
        data: recipes,
      };
      res.json(responseObject);
    }
  }
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

//export
export { router as recipesRouter };
