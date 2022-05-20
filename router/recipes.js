import express from "express";
const router = express.Router();
import recipes from "../libs/recipes-data.js"

// Get request by ID 
router.get("/:id", function (req, res) {
    let id =  Number(req.params.id);  // Need to convert to a number
    console.log(id);
    console.log(recipes);
    for (i = 0; i < recipes.length; i++) {

    }


})





module.exports = recipesRouter;
