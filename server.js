/*---------
    MODULES
-----------*/

const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

/*---------
    IMPORTS
-----------*/

const Article = require("./models/article");
const articleRouter = require("./routes/article");

/*---------
    GLOBALS
-----------*/

const app = express();
mongoose.connect(process.env.MONGOOSE_URI);

//* Middleware.

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/article", articleRouter);

/*-----------
    FUNCTIONS
-------------*/

//* Index.

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" }).limit(8);
  res.render("index", { articles: articles });
});

app.listen(
  process.env.PORT || 3000,
  console.log("Server is initiated at | http://localhost:3000")
);
