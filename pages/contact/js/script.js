const formElement = document.querySelectorAll(".contact__form");
const submitModalElement = document.querySelector(".submit");

const handleOpenModal = (event) => {
  event.preventDefault();

  submitModalElement.style.display = "block";

  setTimeout(() => {
    submitModalElement.style.display = "none";
  }, 2000);
};

formElement.forEach((item) => {
  item.addEventListener("submit", handleOpenModal);
});
