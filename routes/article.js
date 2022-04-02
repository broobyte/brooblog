/*---------
    MODULES
-----------*/

const express = require("express");
const router = express.Router();
const slugify = require("slugify"); // URL slugs.
const marked = require("marked"); // Markdown conversion.
const createDomPurify = require("dompurify"); // HTML security.
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const Article = require("./../models/article");

/*-----------
    FUNCTIONS
-------------*/

router.get("/new", (req, res) => {
  // If user has logged in. (server.js, :69)
  if (req.session.isLoggedIn === true) {
    res.render("new", { article: new Article() });
  } else {
    res.redirect("/login");
  }
});

router.get("/edit", async (req, res) => {
  if (req.session.isLoggedIn === true) {
    // Get all articles.
    const articles = await Article.find().sort({ createdAt: "desc" });
    res.render("editList", { articles: articles });
  } else {
    res.redirect("/login");
  }
});

router.get("/edit/:id", async (req, res) => {
  if (req.session.isLoggedIn === true) {
    // Edit chosen article.
    const article = await Article.findById(req.params.id);
    res.render("edit", { article: article });
  } else {
    res.redirect("/login");
  }
});

router.post("/edit/:id/data", async (req, res) => {
  // Updated schema to pass.
  const editedArticle = {
    $set: {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      slug: slugify(req.body.title, { lower: true, strict: true }),
      sanitisedHTML: dompurify.sanitize(marked.parse(req.body.content)),
    },
  };

  try {
    // Update with new schema.
    await Article.updateOne({ _id: req.params.id }, editedArticle);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete", async (req, res) => {
  if (req.session.isLoggedIn === true) {
    const articles = await Article.find().sort({ createdAt: "desc" });
    res.render("delete", { articles: articles });
  } else {
    res.redirect("/login");
  }
});

router.get("/:slug", async (req, res) => {
  // View chosen article.
  const article = await Article.findOne({ slug: req.params.slug });
  // Failed GET.
  if (article == null) res.redirect("/");
  res.render("view", { article: article });
});

router.post("/", async (req, res) => {
  if (req.session.isLoggedIn === true) {
    let article = new Article({
      // Name attribute.
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
    });

    try {
      // Save to DB.
      article = await article.save();
      // Redirect.
      res.redirect(`/article/${article.slug}`);
    } catch (error) {
      // Return with saved input information.
      res.render("new", { article: article });
    }
  } else {
    res.redirect("/login");
  }
});

router.delete("/:id", async (req, res) => {
  if (req.session.isLoggedIn === true) {
    // Delete article by URL id parameter.
    await Article.findByIdAndDelete(req.params.id);
    res.redirect("/article/delete");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
