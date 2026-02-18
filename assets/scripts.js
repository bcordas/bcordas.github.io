(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  // Theme from localStorage
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } else {
    root.setAttribute("data-theme", "dark");
  }

  const setIcon = () => {
    const t = root.getAttribute("data-theme");
    toggle.textContent = t === "dark" ? "🌙" : "☀️";
  };
  setIcon();

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIcon();
  });
})();
