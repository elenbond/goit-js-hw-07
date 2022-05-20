import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(gallery);

const imagesList = galleryItems
    .map(image => {
    const { preview, original, description } = image;
    const imageItem = `<a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" src = "${preview}" 
    alt = "${description}"/>
    </a>`;
    return imageItem;
    })
    .join("");
gallery.insertAdjacentHTML("afterbegin", imagesList);

let ligthbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: "250ms",
});
console.log(ligthbox);

console.log(galleryItems);