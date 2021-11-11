import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      `
  )
  .join("");
// gallery.addEventListener("click", onPictureClick);
var lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: "250",
});
