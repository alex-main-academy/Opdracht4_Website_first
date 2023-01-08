const backdropElement = document.querySelector(".backdrop");
const menuButtonOpenElement = document.querySelector(".js-menu-open");
const menuButtonCloseElement = document.querySelector(".js-menu-close");

const handleOpenMenu = () => {
  document.body.style.overflow = "hidden";
  backdropElement.style.cssText = `
        opacity: 1;
        transform: translate(0);
    `;
};

const handleCloseMenu = () => {
  document.body.style.overflow = "visible";
  backdropElement.style.cssText = `
        opacity: 0;
        transform: translate(-100%);
    `;
};

menuButtonOpenElement.addEventListener("click", handleOpenMenu);
menuButtonCloseElement.addEventListener("click", handleCloseMenu);
