// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// Text från en fil som ligger lokalt
// Text från en fil som ligger lokalt
// Text från en fil som ligger lokalt
// Text från en fil som ligger lokalt

// Button 1 Här använder jag en vanlig metod för att skriva till consolen
document
  .getElementById("getTextLocalConsole")
  .addEventListener("click", getTextLocalConsole);

function getTextLocalConsole() {
  fetch("sample.txt")
    // then() betyder ”när hämtningen är klar, gör detta”
    // response innehåller svaret från servern (filens innehåll)
    .then(function (response) {
      // response.text() konverterar svaret från en dataformat till en ren textsträng
      return (
        response
          .text()
          // När texten har hämtats, får vi den i variabeln data
          .then(function (data) {
            console.log(data);
          })
      );
    });
}

// ////////////////////////////////////////////////////////////////////////////////////////////
// Button 2 Här använder jag en arrow metod (lite cleaner) för att skriva till consolen
document
  .getElementById("getTextLocalConsoleArrow")
  .addEventListener("click", getTextLocalConsoleArrow);

function getTextLocalConsoleArrow() {
  fetch("sample.txt")
    .then((response) => response.text())
    .then((data) => console.log(data + " (arrow)"))
    .catch((err) => console.log(err));
}
// ////////////////////////////////////////////////////////////////////////////////////////////
// Button 3 Insert to DOM (arrow method)
document
  .getElementById("getTextLocalDom")
  .addEventListener("click", getTextLocalDom);

function getTextLocalDom() {
  fetch("sample.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => {
      document.getElementById("output").innerHTML = err;
    });
}
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// Hämta från en JSON fil som ligger lokalt
// Hämta från en JSON fil som ligger lokalt
// Hämta från en JSON fil som ligger lokalt
// Hämta från en JSON fil som ligger lokalt

document
  .getElementById("getJsonLocalConsole")
  .addEventListener("click", getJsonLocalConsole);

// Button 4 ...för att skriva till consolen
function getJsonLocalConsole() {
  fetch("users.json")
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((user) =>
        console.log(user.id + ":" + user.name + " " + user.email)
      );
    });
}

document
  .getElementById("getJsonLocalDom")
  .addEventListener("click", getJsonLocalDom);
// Button 5 Insert to DOM
function getJsonLocalDom() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach((user) => {
        output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
                `;
        document.getElementById("output").innerHTML = output;
      });
    })
    .catch((err) => {
      document.getElementById("output").innerHTML = err;
    });
}

// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// Hämta från en JSON fil som ligger EXTERNT
// Hämta från en JSON fil som ligger EXTERNT
// Hämta från en JSON fil som ligger EXTERNT
// Hämta från en JSON fil som ligger EXTERNT

document
  .getElementById("getJsonApiConsole")
  .addEventListener("click", getJsonApiConsole);

// Button 6...för att skriva till consolen
function getJsonApiConsole() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((user) => {
        console.log(user.id + ":"),
          console.log("TITLE: " + user.title),
          console.log("BODY: " + user.body);
      });
    });
}

// Method 2 Hämta från en JSON fil som ligger EXTERNT - dummyjson
// https://dummyjson.com/docs/products
// function getJsonApi() {
//     fetch("https://dummyjson.com/products")
//         .then((resp) => resp.json())
//         .then((data) => {
//             data.products.forEach((prod) => {
//                 console.log(prod.title)
//             });
//         })
// }

// Metod 3 Insert to DOM (ALL products)
// https://dummyjson.com/docs/products

// Button 7
document
  .getElementById("getJsonApiDom")
  .addEventListener("click", getJsonApiDom);

function getJsonApiDom() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Products</h2>";
      data.products.forEach((prod) => {
        output += `
                <div class="card card-body mb-3">
                    <h3>ID: ${prod.id}</h3>
                    <p>Name: ${prod.title}</p>
                    <p>Description: ${prod.description}</p>
                </div>
                `;
        document.getElementById("output").innerHTML = output;
      });
    })
    .catch((err) => {
      document.getElementById("output").innerHTML = err;
    });
}

// Button 8 Insert to DOM (ONE products)
// https://dummyjson.com/docs/products

document
  .getElementById("getJsonApiDomOneProduct")
  .addEventListener("click", getJsonApiDomOneProduct);

function getJsonApiDomOneProduct() {
  fetch("https://dummyjson.com/products/2")
    .then((response) => response.json())
    .then((data) => {
      let output = `<h2>Product</h2>
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Name: ${data.title}</li>
                    <li class="list-group-item">Email: ${data.description}</li>
                </ul>
                `;
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => {
      document.getElementById("output").innerHTML = err;
    });
}

// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// ADD a post till en JSON fil som ligger EXTERNT
// ADD a post till en JSON fil som ligger EXTERNT
// ADD a post till en JSON fil som ligger EXTERNT
// ADD a post till en JSON fil som ligger EXTERNT

document.getElementById("addPost").addEventListener("submit", addPost);

// Button 9. 'Post'
// Kommer inte att lägga till i api databasen "på riktigt"
// Men det är så här att syntaxen ser ut.
function addPost(e) {
  e.preventDefault();

  let titleHTML = document.getElementById("title").value;
  let bodyHTML = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleHTML,
      body: bodyHTML,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}
