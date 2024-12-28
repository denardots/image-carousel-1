// Función que muestra la imagen de la galería
const showImage = index => specialImg.src = gallery[index].src;

// Cuando tenemos una lista de elementos podemos utilizar el operador spread para convertirlos directamente en un array
const gallery = [...document.querySelectorAll(".gallery__img")];
const special = document.getElementById("special");
const specialImg = document.getElementById("specialImg");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const closeButton = document.getElementById("closeButton");

let indexImg = 0;

// Recorremos el array para agregar listeners a cada imagen de la galería
gallery.forEach((img, index) => {
  // Listener que permite mostrar la imagen seleccionada
  img.addEventListener("click", () => {
    indexImg = index;
    showImage(indexImg);
    special.style.display = "flex";
  });
});

// Listener que permite mostrar la imagen anterior
leftArrow.addEventListener("click", () => {
  indexImg = (indexImg - 1 + gallery.length) % gallery.length;
  showImage(indexImg);
});

// Listener que permite mostrar la imagen siguiente
rightArrow.addEventListener("click", () => {
  indexImg = (indexImg + 1) % gallery.length;
  showImage(indexImg);
});

// Listener que cierra la imagen seleccionada
closeButton.addEventListener("click", () => special.style.display = "none");

// Listener que cierra la imagen seleccionada al hacer click en el espacio vacío
special.addEventListener("click", event => {
  if (event.target === special) {
    special.style.display = "none";
  }
});