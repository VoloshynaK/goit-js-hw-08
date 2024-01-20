// Add imports above this linenpm remove
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector(".gallery");

const imgElMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}"/>
            
        </a>
    </li>`).join("");

galleryEl.insertAdjacentHTML("afterbegin", imgElMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});