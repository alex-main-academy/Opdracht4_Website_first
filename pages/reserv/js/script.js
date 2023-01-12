const mobileFormElement = document.querySelector(".ticket__form--mobile");
const desktopFormElement = document.querySelector(".ticket__form--desktop");
const submitModalElement = document.querySelector(".submit");

const handleOpenModal = (event) => {
  event.preventDefault();

  submitModalElement.style.display = "block";

  setTimeout(() => {
    submitModalElement.style.display = "none";
  }, 2000);
};

mobileFormElement.addEventListener("submit", handleOpenModal);
desktopFormElement.addEventListener("submit", handleOpenModal);
