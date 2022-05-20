import express from "express";

import { html } from "./config.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// route to recipes.js
app.use("/", function (req, res, next){
  console.log(req.body);
  next();
})



// route to recipes.js
import recipesRouter from  = require("/router/recipes.js");
app.use("/recipes", recipesRouter);




/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
