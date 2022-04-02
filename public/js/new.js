/*-----------
    SELECTORS
-------------*/

// Element for user click.
const toggle = document.getElementById("toggle");
const newTitle = document.getElementById("newTitle");
const newTitleTag = document.getElementById("newTitleTag");
const newTitleInput = document.getElementById("newTitleInput");
const newDescription = document.getElementById("newDescription");
const newDescriptionTag = document.getElementById("newDescriptionTag");
const newDescriptionInput = document.getElementById("newDescriptionInput");
const newContent = document.getElementById("content");

/*---------
    GLOBALS
-----------*/

// Default theme load.
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light"); // Default theme.
} else {
  theme(localStorage.getItem("theme")); // User theme.
}

// User click.
toggle.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "light") {
    theme("dark"); // Switch theme.
  } else {
    theme("light"); // Switch theme.
  }
});

/*-----------
    FUNCTIONS
-------------*/

// Set theme.
function theme(val) {
  if (val === "light") {
    localStorage.setItem("theme", "light");

    toggle.classList.remove("fa-toggle-on");
    toggle.classList.add("fa-toggle-off");

    document.body.style.backgroundColor = "var(--BGprimaryLight)";
    document.body.style.color = "var(--Textlight)";
    newTitle.style.backgroundColor = "var(--BGsecondaryLight)";
    newTitleTag.style.color = "var(--Disabled)";
    newTitleInput.style.backgroundColor = "var(--BGsecondaryLight)";
    newTitleInput.style.color = "var(--Textlight)";
    newDescription.style.backgroundColor = "var(--BGsecondaryLight)";
    newDescriptionTag.style.color = "var(--Disabled)";
    newDescriptionInput.style.backgroundColor = "var(--BGsecondaryLight)";
    newDescriptionInput.style.color = "var(--Textlight)";
    newContent.style.backgroundColor = "var(--BGsecondaryLight)";
    newContent.style.color = "var(--Textlight)";
  } else if (val === "dark") {
    localStorage.setItem("theme", "dark");

    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");

    document.body.style.backgroundColor = "var(--BGprimaryDark)";
    document.body.style.color = "var(--Textdark)";
    newTitle.style.backgroundColor = "var(--BGsecondaryDark)";
    newTitleTag.style.color = "var(--BGprimaryDark)";
    newTitleInput.style.backgroundColor = "var(--BGsecondaryDark)";
    newTitleInput.style.color = "var(--Textdark)";
    newDescription.style.backgroundColor = "var(--BGsecondaryDark)";
    newDescriptionTag.style.color = "var(--BGprimaryDark)";
    newDescriptionInput.style.backgroundColor = "var(--BGsecondaryDark)";
    newDescriptionInput.style.color = "var(--Textdark)";
    newContent.style.backgroundColor = "var(--BGsecondaryDark)";
    newContent.style.color = "var(--Textdark)";
  }
}

// Animate elements.
function animate(el, animation, delay, speed, repeat) {
  el.classList.add("animate__animated");
  el.classList.add(`animate__${animation}`);
  el.classList.add(`animate__${delay}`);
  el.classList.add(`animate__${speed}`);
  el.classList.add(`animate__${repeat}`);
  el.addEventListener("animationend", () => {
    el.classList.remove("animate__animated");
    el.classList.remove(`animate__${animation}`);
    el.classList.remove(`animate__${delay}`);
    el.classList.remove(`animate__${speed}`);
    el.classList.remove(`animate__${repeat}`);
  });
}
