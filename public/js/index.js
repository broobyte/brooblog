/*-----------
    SELECTORS
-------------*/

// Element for user click.
const toggle = document.getElementById("toggle");
const indexAllTitle = document.getElementById("indexAllTitle");
const indexRecentTitle = document.querySelectorAll("#indexRecentTitle");
const indexSearchWrapper = document.getElementById("indexSearchWrapper");
const indexSearchInput = document.getElementById("indexSearchInput");
const indexSearchIcon = document.getElementById("indexSearchIcon");
const indexSearchResults = document.getElementById("indexSearchResults");
const indexSearchItems = indexSearchResults.getElementsByTagName("li");

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

// Theme logic.
function theme(val) {
  if (val === "light") {
    localStorage.setItem("theme", "light");

    toggle.classList.remove("fa-toggle-on");
    toggle.classList.add("fa-toggle-off");

    document.body.style.backgroundColor = "var(--BGprimaryLight)";
    document.body.style.color = "var(--Textlight)";
    indexAllTitle.style.borderBottom = "1px solid rgba(255, 255, 255, 0.11)";
    indexAllTitle.style.borderBottom = "1px solid rgba(0, 0, 0, 0.11)";
    for (let i = 0; i < indexAllListTitle.length; i++) {
      indexAllListTitle[i].style.color = "var(--Textlight)";
    }
    indexSearchWrapper.style.backgroundColor = "var(--BGprimaryLight)";
    indexSearchWrapper.style.color = "var(--Textlight)";
    indexSearchWrapper.style.border = "1px solid var(--BGprimaryDark)";
    indexSearchInput.style.color = "var(--Textlight)";
    indexSearchIcon.style.color = "var(--Textlight)";
    for (let i = 0; i < indexSearchItems.length; i++) {
      let tag = indexSearchItems[i].getElementsByTagName("a")[0];
      tag.style.backgroundColor = "var(--BGprimaryLight)";
      tag.style.color = "var(--Textlight)";
      tag.style.border = "1px solid var(--BGprimaryDark)";
    }
  } else if (val === "dark") {
    localStorage.setItem("theme", "dark");

    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");

    document.body.style.backgroundColor = "var(--BGprimaryDark)";
    document.body.style.color = "var(--Textdark)";
    indexAllTitle.style.borderBottom = "1px solid rgba(255, 255, 255, 0.11)";
    for (let i = 0; i < indexAllListTitle.length; i++) {
      indexAllListTitle[i].style.color = "var(--Textdark)";
    }
    indexSearchWrapper.style.backgroundColor = "var(--BGprimaryDark)";
    indexSearchWrapper.style.color = "var(--Textdark)";
    indexSearchWrapper.style.border = "1px solid var(--BGprimaryLight)";
    indexSearchInput.style.color = "var(--Textdark)";
    indexSearchIcon.style.color = "var(--Textdark)";
    for (let i = 0; i < indexSearchItems.length; i++) {
      let tag = indexSearchItems[i].getElementsByTagName("a")[0];
      tag.style.backgroundColor = "var(--BGprimaryDark)";
      tag.style.color = "var(--Textdark)";
      tag.style.border = "1px solid var(--BGprimaryLight)";
    }
  }
}

// Search logic.
function searchQuery() {
  indexSearchResults.style.display = "block"; // Show element.

  // Empty input.
  if (indexSearchInput.value == "") {
    indexSearchResults.style.display = "none";
  }

  // Iterate over articles.
  for (let i = 0; i < indexSearchItems.length; i++) {
    let tag = indexSearchItems[i].getElementsByTagName("a")[0]; // Inner a tag.
    let val = tag.textContent || tag.innerText;

    if (val.toUpperCase().indexOf(indexSearchInput.value.toUpperCase()) > -1) {
      indexSearchItems[i].style.display = "";
    } else {
      indexSearchItems[i].style.display = "none";
    }
  }
}
