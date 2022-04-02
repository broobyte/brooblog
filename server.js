/*---------
    MODULES
-----------*/

const express = require("express");
const session = require("express-session"); // Session keys for login.
const mongoose = require("mongoose");
const methodOverride = require("method-override"); // Sending certain method types. (DEL, PUT)
const bcrypt = require("bcrypt"); // Encrypting passwords.
require("dotenv").config();

const Article = require("./models/article");
const User = require("./models/user");
const articleRouter = require("./routes/article");

/*---------
    GLOBALS
-----------*/

const app = express();
mongoose.connect(process.env.MONGOOSE_URI);

// Middleware.

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // Allow access to static files.
app.use(express.urlencoded({ extended: false })); // JSON.
app.use(methodOverride("_method")); // URL method option parameter.
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
    resave: false,
  })
);
app.use("/article", articleRouter);

/*-----------
    FUNCTIONS
-------------*/

// Index.

app.get("/", async (req, res) => {
  // Get 8 documents from collection in order of creation.
  const articles = await Article.find().sort({ createdAt: "desc" }).limit(8);
  // Pass these documents (yellow) as a variable (red) to HTML.
  res.render("index", { articles: articles });
});

// Login.

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  // Find a user where username (Schema) matches input.
  const user = await User.findOne({ username: req.body.username });
  // Failed.
  if (user === null) {
    return res.redirect("/login");
  }
  // Password decryption & comparison.
  const compare = bcrypt.compareSync(req.body.password, user.password);
  if (compare) {
    // Created session cookie for Admin privilege.
    req.session.isLoggedIn = true;
    res.redirect("/");
  } else {
    req.session.isLoggedIn = false;
    res.redirect("/login");
  }
});

app.listen(3000, console.log("Server is initiated at | http://localhost:3000"));
