(() => {
  const refs = {
    openMenuBtn: document.querySelector(".button-open-mobile-menu"),
    closeMenuBtn: document.querySelector(".button-close-mobile-menu"),
    menu: document.querySelector(".mobile-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();