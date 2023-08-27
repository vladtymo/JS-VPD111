// ------------ get page elements
const createBtn = document.getElementById('create-btn');
const clearBtn = document.getElementById('clear-btn');

const nameIn = document.querySelector('#nameInput');
const priceIn = document.querySelector('#priceInput');

const tBody = document.querySelector('#product-table tbody');

createBtn.onclick = () => {
    //alert("Clicked");

    // let item = {
    //     id: 1, 
    //     name: nameIn.value,
    //     price: priceIn.value
    // };
    let item = new Product(nameIn.value, priceIn.value);

    console.log(item);

    addProductToTable(item);
};

clearBtn.onclick = () => {
    tBody.innerHTML = "";
    Product.count = 0;
};

function addProductToTable(item) {
    tBody.innerHTML += `<tr>
                            <th scope="row">${item.id}</th>
                            <td>${item.name}</td>
                            <td>${item.price}$</td>
                        </tr>`;
}

class Product {
    static count = 10;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = ++Product.count;
    }
}