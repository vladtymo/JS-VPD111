// ---------- get data from the server
const api = 'https://jsonplaceholder.typicode.com/users';

async function getDataFromServer(url) {

    // ----- send request to the server
    // HTTP GET: api
    const response = await fetch(api);

    console.log("Status:", response.status); // 200: OK

    const data = await response.json();
    console.log(data);

    for (const i of data) {
        
        userList.innerHTML += ` <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    ${i.name}
                                    <span class="badge bg-primary rounded-pill"><a href='${i.website}'>${i.website}</a></span>
                                </li>`;
    }
}

getDataFromServer(api);