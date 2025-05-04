let images = document.querySelectorAll(".gallery img");

images.forEach((img) => {
  img.addEventListener("click", () => {

    img.classList.toggle("zoomed");

    images.forEach((otherImg) => {
      if (otherImg !== img) {
        otherImg.classList.remove("zoomed");
      }
    });
  });
});
