/*---------
    MODULES
-----------*/

const express = require("express");
const router = express.Router();

/*---------
    IMPORTS
-----------*/

const Article = require("./../models/article");

/*-----------
    FUNCTIONS
-------------*/

//* View.

router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) res.redirect("/");
  res.render("view", { article: article });
});

module.exports = router;
