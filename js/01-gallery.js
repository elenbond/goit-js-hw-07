import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(gallery);

const images = galleryItems.map(image => {
    const createImageItem = document.createElement("div");
    createImageItem.classList.add("gallery__item");

    const createImageLink = document.createElement("a");
    createImageLink.classList.add("gallery__link");
    createImageLink.href = image.original;

    const createImage = document.createElement("img");
    createImage.classList.add("gallery__image");
    createImage.src = image.preview;
    createImage.dataset.source = image.original;
    createImage.alt = image.description;
    
    createImageLink.append(createImage);
    createImageItem.append(createImageLink);
    return createImageItem;
});
gallery.append(...images);


const onSelectedImageClick = (event) => {
    event.preventDefault();
    if (event.target.tagName !== "IMG") {
        return;
    }
    const onSelectedImageEscape = (event) => {
        event.preventDefault();
        if (event.code === 'Escape') {
            return instance.close();
        }
    }
    const instance = basicLightbox.create(
        `<div class = "modal">
            <img src="${event.target.dataset.source}"
            alt = "${event.target.alt}"
             height = "700"
            >
        </div>`,
        {
            onShow: () => {
                gallery.addEventListener("keydown", onSelectedImageEscape);
            },
            onClose: () => {
                gallery.removeEventListener("keydown", onSelectedImageEscape);
            },
        }
    );

    instance.show();
}
gallery.addEventListener("click", onSelectedImageClick);

console.log(galleryItems);