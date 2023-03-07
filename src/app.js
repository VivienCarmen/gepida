const tbody = document.querySelector("#tbody");
const saveButton = document.querySelector("#saveButton");
const nameInput = document.querySelector("#name");
const quantityInput = document.querySelector("#quantity");
const useInput = document.querySelector("#use");
const priceInput = document.querySelector("#price");

const editidInput = document.querySelector("#editid");
const editnameInput = document.querySelector("#editname");
const editquantityInput = document.querySelector("#editquantity");
const edituseInput = document.querySelector("#edituse");
const editpriceInput = document.querySelector("#editprice");

const saveEditButton = document.querySelector('#saveEditButton');

const biciklik = [
    { id: 1, name: 'cassin',     quantity: 28, use: 'offroad',        price: 557900 },
    { id: 2, name: 'Alboin 900', quantity: 28, use: 'trekking',       price: 519900 },
    { id: 3, name: 'Asgard',     quantity: 29, use: 'technikás utak', price: 519900 },
    { id: 4, name: 'Ruga',       quantity: 29, use: 'hegyi',          price: 372900 },
    { id: 5, name: 'Reptila',    quantity: 28, use: 'városi',         price: 308900 },
    { id: 6, name: 'Sirmium',    quantity: 29, use: 'hegyi',          price: 264900 },
  ];


function generateTbody() {
    biciklik.forEach((bicikli) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdUse = document.createElement('td');
        let tdQuantity = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.textContent = bicikli.name;
        tdQuantity.textContent = bicikli.quantity;
        tdUse.textContent = bicikli.use;
        tdPrice.textContent = bicikli.price;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdQuantity);
        tr.append(tdUse);
        tr.append(tdPrice);        
        tr.append(generateTdDelete(bicikli.id));
        tr.append(generateTdEdit(bicikli))
    });
}
generateTbody();

function generateTdDelete(id) {
    let td = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Törlés";
    button.classList = "btn btn-warning";
    button.addEventListener('click', () => {
        console.log(id);
        let index = 0;
        let count = 0;
        biciklik.forEach((gy) => {
            if(gy.id == id) {
                index = count;
            }
            count++;
        });
        console.log(index);
        biciklik.splice(index, 1);
        tbody.textContent = "";
        generateTbody();
    });
    td.append(button);
    return td;
}


function generateTdEdit(bicycle) {
    let td = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Szerkesztés";
    button.classList = "btn btn-primary";
    
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#editModal');

    button.addEventListener('click', () => {
        console.log('működik');
        console.log(bicycle.name);
        editidInput.value = bicycle.id;
        editnameInput.value = bicycle.name;
        editquantityInput.value = bicycle.quantity;
        edituseInput.value = bicycle.use;
        editpriceInput.value = bicycle.price;

    });
    td.append(button);
    return td;
}



saveButton.addEventListener('click', () => {
    
    let name =  nameInput.value;
    let quantity = quantityInput.value;
    let use = useInput.value;
    let price = priceInput.value;
    let bicikli = { 
        name:     name, 
        quantity: quantity, 
        use:      use,
        price:    price
    };
    biciklik.push(bicikli);
    console.log(biciklik);
    tbody.textContent = '';
    generateTbody();
    clearFieldOnAddModel();
});

function clearFieldOnAddModel() {
    nameInput.value = '';
    quantityInput.value = '';
    useInput.value = '';
    priceInput.value = '';
}


saveEditButton.addEventListener('click', () => {

    let id = editidInput.value;
    let name = editnameInput.value;
    let quantity = editquantityInput.value;
    let use = edituseInput.value;
    let price = editpriceInput.value;

    biciklik.forEach((bicikli) => {
        if (bicikli.id == id ) {
            bicikli.name = name;
            bicikli.quantity = quantity;
            bicikli.use = use
            bicikli.price = price;
        }
    });
    tbody.textContent = '';
    generateTbody();
    
});