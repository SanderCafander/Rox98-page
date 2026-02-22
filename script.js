const menu = document.getElementById("menu");
const hamburgerBtn = document.getElementById("hamburgerBtn");

const panelIds = ["panel-spark", "panel-equipo", "panel-contacto"];

function openMenu(){
  menu.hidden = false;
  document.body.classList.add("is-locked");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  hamburgerBtn.classList.add("is-open");
}

function closeMenu(){
  menu.hidden = true;
  document.body.classList.remove("is-locked");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  hamburgerBtn.classList.remove("is-open");
}

hamburgerBtn.addEventListener("click", () => {
  if (menu.hidden) openMenu();
  else closeMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !menu.hidden) closeMenu();
});

// Tabs + “ir a Contacto”
function showPanel(id){
  panelIds.forEach(pid => {
    const el = document.getElementById(pid);
    if (el) el.hidden = (pid !== id);
  });

  document.querySelectorAll(".segmented__btn").forEach(btn => {
    const active = btn.dataset.panel === id;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
}

document.addEventListener("click", (e) => {
  const tab = e.target.closest(".segmented__btn");
  if (tab && tab.dataset.panel) {
    showPanel(tab.dataset.panel);
    return;
  }

  const goto = e.target.closest("[data-goto]");
  if (goto && goto.dataset.goto) {
    showPanel(goto.dataset.goto);
    return;
  }
});
