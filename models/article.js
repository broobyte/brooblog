const mongoose = require("mongoose");
const marked = require("marked"); // Markdown conversion.
const slugify = require("slugify"); // URL slugs.
const createDomPurify = require("dompurify"); // HTML security.
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  sanitisedHTML: {
    type: String,
    required: true,
  },
});

// Function ran before Schema is created.
articleSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  if (this.content) {
    this.sanitisedHTML = dompurify.sanitize(marked.parse(this.content));
  }

  // Run next middleware.
  next();
});

module.exports = mongoose.model("Article", articleSchema);
