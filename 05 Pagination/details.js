const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log("Product ID:", id);

const url = `https://dummyjson.com/products/${id}`;

async function getProduct() {

    const res = await fetch(url);
    const product = await res.json();

    console.log(product);

    titleEl.innerHTML = product.title;
    subtitleEl.innerHTML = product.price + "$";
    descriptionEl.innerHTML = product.description;
    categoryEl.innerHTML = product.category;
    imageEl.setAttribute('src', product.images[0]);
}

getProduct();