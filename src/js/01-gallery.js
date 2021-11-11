import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems);

gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
  )
  .join("");

gallery.addEventListener("click", onPictureClick);
function onPictureClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) return;
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
}

// window.addEventListener("keydown", onKeydown);
// function onKeydown(e) {
//   if (e.code === "Escape") {
//     instance.close();
//   }
// }
