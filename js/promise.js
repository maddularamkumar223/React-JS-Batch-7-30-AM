// console.log("Start");
// let myPromise = new Promise((res, rej) => {
//   let late = false;

//   if (late) {
//     res("Fulfilled");
//   } else {
//     rej("Rejected");
//   }
// });

// console.log(myPromise);
// let handlePromise = async () => {
//   try {
//     let data = await myPromise;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// handlePromise();

// console.log("End");

let section = document.querySelector("section");
let fetchProducts = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let responseData = await response.json();

    responseData.map((product) => {
      let container = document.createElement("article");
      let title = document.createElement("p");
      let description = document.createElement("p");
      let price = document.createElement("p");
      let image = document.createElement("img");
      let addToCart = document.createElement("button");

      title.innerHTML = `Title: ${product.title}`;
      description.innerHTML = `Description: ${product.description.slice(0, 40)}`;
      price.innerHTML = `Price: ${product.price}`;
      image.src = product.image;
      addToCart.innerHTML = "Add To Cart";

      container.append(image, title, description, price, addToCart);
      section.append(container);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();
