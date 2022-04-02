/*-----------
    SELECTORS
-------------*/

// Element for user click.
const toggle = document.getElementById("toggle");

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
  } else if (val === "dark") {
    localStorage.setItem("theme", "dark");

    toggle.classList.remove("fa-toggle-off");
    toggle.classList.add("fa-toggle-on");

    document.body.style.backgroundColor = "var(--BGprimaryDark)";
    document.body.style.color = "var(--Textdark)";
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
