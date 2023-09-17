// ---------- get data from the server
const api = 'https://dummyjson.com/products';

const pagination = {
    limit: 3,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    }
};

async function getDataFromServer(url) {

    const urlWithParams = url += `?limit=${pagination.limit}&skip=${pagination.skip}`;

    // ----- send request to the server
    // HTTP GET: api
    const response = await fetch(urlWithParams);

    console.log("Status:", response.status); // 200: OK

    const data = await response.json();
    console.log(data);
    
    pagination.total = data.total;
    pagination.next();

    for (const i of data.products) {
        
        userList.innerHTML += `<li class="list-group-item list-group-item-action">
                                    <a href='./details.html?id=${i.id}' class="d-flex justify-content-between align-items-center">
                                        ${i.title}
                                        <span class="badge bg-primary rounded-pill">${i.price}$</span>
                                    </a>
                                </li>`;
    }
}

getDataFromServer(api);

moreBtn.onclick = () => {
    getDataFromServer(api);
};