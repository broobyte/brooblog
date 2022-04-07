/*-----------
    SELECTORS
-------------*/

// Element for user click.
const toggle = document.getElementById("toggle");
const editTitle = document.getElementById("editTitle");
const editTitleTag = document.getElementById("editTitleTag");
const editTitleInput = document.getElementById("editTitleInput");
const editDescription = document.getElementById("editDescription");
const editDescriptionTag = document.getElementById("editDescriptionTag");
const editDescriptionInput = document.getElementById("editDescriptionInput");
const editContent = document.getElementById("content");

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
    editTitle.style.backgroundColor = "var(--BGsecondaryLight)";
    editTitleTag.style.color = "var(--Disabled)";
    editTitleInput.style.backgroundColor = "var(--BGsecondaryLight)";
    editTitleInput.style.color = "var(--Textlight)";
    editDescription.style.backgroundColor = "var(--BGsecondaryLight)";
    editDescriptionTag.style.color = "var(--Disabled)";
    editDescriptionInput.style.backgroundColor = "var(--BGsecondaryLight)";
    editDescriptionInput.style.color = "var(--Textlight)";
    editContent.style.backgroundColor = "var(--BGsecondaryLight)";
    editContent.style.color = "var(--Textlight)";
  } else if (val === "dark") {
    localStorage.setItem("theme", "dark");

    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");

    document.body.style.backgroundColor = "var(--BGprimaryDark)";
    document.body.style.color = "var(--Textdark)";
    editTitle.style.backgroundColor = "var(--BGsecondaryDark)";
    editTitleTag.style.color = "var(--BGprimaryDark)";
    editTitleInput.style.backgroundColor = "var(--BGsecondaryDark)";
    editTitleInput.style.color = "var(--Textdark)";
    editDescription.style.backgroundColor = "var(--BGsecondaryDark)";
    editDescriptionTag.style.color = "var(--BGprimaryDark)";
    editDescriptionInput.style.backgroundColor = "var(--BGsecondaryDark)";
    editDescriptionInput.style.color = "var(--Textdark)";
    editContent.style.backgroundColor = "var(--BGsecondaryDark)";
    editContent.style.color = "var(--Textdark)";
  }
}
