//pf

let conn = new XMLHttpRequest();
conn.open("GET", "js/products.json");

conn.onload = function () {
  let response = conn.responseText;
  let data = JSON.parse(response);
  printer(data);
};

conn.send();

function printer(data) {
  for (var i = 0; i < data.length; i++) {
    // Create Elements With There Attributes and text content
    let item = document.createElement("div");
    item.setAttribute("class", "item");

    let img = document.createElement("img");
    img.setAttribute("src", data[i].imgsrc);
    img.setAttribute("alt", data[i].title);

    let header = document.createElement("h3");
    header.appendChild(document.createTextNode(data[i].title));

    let desc = document.createElement("p");
    desc.appendChild(document.createTextNode(data[i].description));

    let itemlinks = document.createElement("div");
    itemlinks.setAttribute("class", "item-links");

    let addcart = document.createElement("a");
    addcart.appendChild(document.createTextNode("Add To Cart"));
    addcart.setAttribute("href", data[i].links.addtocart);

    let details = document.createElement("a");
    details.appendChild(document.createTextNode("Details"));
    details.setAttribute("href", data[i].links.details);

    // append chain of elements

    itemlinks.appendChild(addcart);
    itemlinks.appendChild(details);

    item.appendChild(img);
    item.appendChild(header);
    item.appendChild(desc);
    item.appendChild(itemlinks);

    document.querySelector(".products").appendChild(item);
  }
}

// function createProducts() {
//   for (var i = 0; i < response.length; i++) {
//     console.log(response[i]);
//   }
// }

// createProducts();

//
//
// navbar icon set for responsive design

document.querySelector(".menu-icon").onclick = function () {
  this.classList.toggle("active");
  document.querySelector("header").classList.toggle("show-navbar");
};

/* this code to change header background when scroll */
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header-changer");
  } else {
    document.querySelector("header").classList.remove("header-changer");
  }
});
