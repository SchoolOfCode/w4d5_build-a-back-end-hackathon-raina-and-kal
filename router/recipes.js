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

// Set up POST handler

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

// Set up default handler for /recipes

router.get("/", function (req, res) {
  const responseObject = {
    success: "true",
    message: `This is all of the recipes`,
    data: recipes,
  };
  res.json(responseObject);
});

export { router as recipesRouter };
