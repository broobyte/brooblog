/*-----------
    SELECTORS
-------------*/

// Element for user click.
const toggle = document.getElementById("toggle");
const loginUsername = document.getElementById("loginUsername");
const loginUsernameTag = document.getElementById("loginUsernameTag");
const loginUsernameInput = document.getElementById("loginUsernameInput");
const loginPassword = document.getElementById("loginPassword");
const loginPasswordTag = document.getElementById("loginPasswordTag");
const loginPasswordInput = document.getElementById("loginPasswordInput");

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
    loginUsername.style.backgroundColor = "var(--BGsecondaryLight)";
    loginUsernameTag.style.color = "var(--Disabled)";
    loginUsernameInput.style.backgroundColor = "var(--BGsecondaryLight)";
    loginUsernameInput.style.color = "var(--Textlight)";
    loginPassword.style.backgroundColor = "var(--BGsecondaryLight)";
    loginPasswordTag.style.color = "var(--Disabled)";
    loginPasswordInput.style.backgroundColor = "var(--BGsecondaryLight)";
    loginPasswordInput.style.color = "var(--Textlight)";
  } else if (val === "dark") {
    localStorage.setItem("theme", "dark");

    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");

    document.body.style.backgroundColor = "var(--BGprimaryDark)";
    document.body.style.color = "var(--Textdark)";
    loginUsername.style.backgroundColor = "var(--BGsecondaryDark)";
    loginUsernameTag.style.color = "var(--BGprimaryDark)";
    loginUsernameInput.style.backgroundColor = "var(--BGsecondaryDark)";
    loginUsernameInput.style.color = "var(--Textdark)";
    loginPassword.style.backgroundColor = "var(--BGsecondaryDark)";
    loginPasswordTag.style.color = "var(--BGprimaryDark)";
    loginPasswordInput.style.backgroundColor = "var(--BGsecondaryDark)";
    loginPasswordInput.style.color = "var(--Textdark)";
  }
}