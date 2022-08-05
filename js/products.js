const products = [
  {
    name: "Fancy Product",
    price: 40,
    soldOut: true,
  },
  {
    name: "Another Product",
    soldOut: false,
  },
  {
    name: "Cheap Product",
    price: 10,
    soldOut: true,
  },
];

let productsList = document.querySelector(".container");

let html = "";

for (let i = 0; i < products.length; i++) {
  let price = "Unknown";

  if (products[i].price) {
    price = products[i].price;
  }

  html += `<div>
            <h4 style="color: green">${products[i].name}</h4>
            <p>Price: ${price}</p>
            </div>`;

  //if (products[i].soldOut) {
  //  html += `<h4 style="color: red">${products[i].name}</h4>`;
  //}
}

productsList.innerHTML = html;
