const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

const showModal = () => {
  if (!(modalShadow.style.display === "block")) {
    modalShadow.style.display = "block";
  } else {
    modalShadow.style.display = "none";
  }

  modalShadow.classList.toggle("modal-animation");
};
